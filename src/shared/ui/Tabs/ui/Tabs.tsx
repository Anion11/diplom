import { FC, useState } from 'react';
import clsx from 'clsx';

import Typography from '../../typography/ui/Typography';
import { ITabs } from '../model/ITabs';

import style from './Tabs.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';

const Tabs: FC<ITabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={style.tabs}>
      <ul className={style.tabs__head}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={clsx(style.tabs__item, activeTab === index && style.tabs__item_active)}
            onClick={() => setActiveTab(index)}
          >
            <Typography type={ETypographyType.p1}>{tab.label}</Typography>
          </li>
        ))}
      </ul>
      {tabs[activeTab].content}
    </div>
  );
};

export default Tabs;
