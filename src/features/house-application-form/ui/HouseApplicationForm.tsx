import { FC, useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { IHouseApplicationForm } from '../model/IHouseApplicationForm';
import useHouseApplication from '../model/useHouseApplication';

import styles from './HouseApplicationForm.module.scss';

import { EPeriod } from '@/shared/config/enums/EPeriod';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, SectionHead, Typography } from '@/shared/ui';
import RangeSlider from '@/shared/ui/range-slider/ui/range-slider';

const HouseApplicationForm: FC = () => {
  const notify = () => toast('Заявка создана!');
  const { formError, clearFormError, applicationRequest, loading, complete } =
    useHouseApplication();

  const { user } = useAuthContext();

  const defaultValues: IHouseApplicationForm = {
    fiasAddress: '',
    finishingCost: 0,
    structuralElCost: 0,
    neighborsCost: 0,
    household: 0,
    cost: 0,
    person: user?.id || 0,
    periodic: EPeriod.YEAR
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<Omit<IHouseApplicationForm, 'role'>>({
    defaultValues,
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IHouseApplicationForm) => {
    applicationRequest(data);
  };

  useEffect(() => {
    if (complete) {
      notify();
      reset({
        ...defaultValues
      });
      clearFormError();
    }
  }, [complete, reset]);

  const watchFields = watch(['finishingCost', 'structuralElCost', 'neighborsCost', 'household']);

  const { monthly, yearly } = useMemo(() => {
    const [finishing, structural, neighbors, household] = watchFields.map(v => Number(v) || 0);
    const total = finishing + structural + neighbors + household;
    const yearly = total * 0.005;
    const monthly = yearly / 12;
    return {
      yearly: Math.round(yearly),
      monthly: Math.round(monthly)
    };
  }, [watchFields]);

  return (
    <>
      <form
        noValidate
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SectionHead className={styles.form__head}>
          <Typography
            tag="h1"
            type={ETypographyType.h1}
            bold={700}
          >
            Создание заявки на оформление полиса
          </Typography>
        </SectionHead>
        <div className={styles.form__body}>
          <div className={styles.form__left}>
            <Controller
              name="fiasAddress"
              control={control}
              render={({ field }) => (
                <Input
                  id="fiasAddress"
                  type="text"
                  {...field}
                  placeholder="Введите адрес квартиры"
                  error={errors.fiasAddress?.message}
                  formError={formError}
                  autocomplete="off"
                  onChange={e => {
                    field.onChange(e);
                    clearFormError();
                  }}
                />
              )}
            />
            <Controller
              name="finishingCost"
              control={control}
              render={({ field }) => (
                <RangeSlider
                  id="finishingCost"
                  label="Внутренняя отделка, ₽"
                  size="lg"
                  max={3000000}
                  step={100000}
                  defaultValue={field.value}
                  onChange={val => {
                    field.onChange(val);
                    clearFormError();
                  }}
                />
              )}
            />
            <Controller
              name="structuralElCost"
              control={control}
              render={({ field }) => (
                <RangeSlider
                  id="structuralElCost"
                  label="Конструктивные элементы, ₽"
                  size="lg"
                  max={7000000}
                  step={100000}
                  defaultValue={field.value}
                  onChange={val => {
                    field.onChange(val);
                    clearFormError();
                  }}
                />
              )}
            />
            <Controller
              name="neighborsCost"
              control={control}
              render={({ field }) => (
                <RangeSlider
                  id="neighborsCost"
                  label="Гражданская ответственность, ₽"
                  size="lg"
                  max={2000000}
                  defaultValue={field.value}
                  step={100000}
                  onChange={val => {
                    field.onChange(val);
                    clearFormError();
                  }}
                />
              )}
            />
            <Controller
              name="household"
              control={control}
              render={({ field }) => (
                <RangeSlider
                  id="household"
                  label="Домашнее имущество, ₽"
                  size="lg"
                  max={2000000}
                  step={100000}
                  defaultValue={field.value}
                  onChange={val => {
                    field.onChange(val);
                    clearFormError();
                  }}
                />
              )}
            />
            <Controller
              name="documents"
              control={control}
              render={({ field }) => (
                <Input
                  id="document"
                  type="file"
                  placeholder="Прикрепите два файла: онлайн-выписку из ЕГРН (.pdf) и файл электронной цифровой подписи (.sig)."
                  onChange={function (value: string): void {
                    throw new Error('Function not implemented.');
                  }}
                />
              )}
            />

            <div className={styles.form__btns}>
              {formError && (
                <div className={styles.form__error}>
                  <Typography type={ETypographyType.p2}>{formError}</Typography>
                </div>
              )}
            </div>
          </div>
          <div className={styles.form__right}>
            <div className={styles.form__summary}>
              <Typography
                type={ETypographyType.h3}
                tag="h3"
                bold={600}
                className={styles.form__summaryTitle}
              >
                Предварительный расчёт
              </Typography>

              <Typography
                type={ETypographyType.p1}
                tag="h3"
                className={styles.form__summaryItem}
              >
                Платёж в год:
                <strong>{yearly.toLocaleString()} ₽</strong>
              </Typography>
              <Button
                loading={loading}
                className={styles.form__btn}
                text="Отправить заявку"
              ></Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default HouseApplicationForm;
