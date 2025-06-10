import { FC, useState } from 'react';
import clsx from 'clsx';

import Typography from '../../typography/ui/Typography';
import { ISideTabs } from '../model/ISideTabs';

import style from './SideTabs.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';

const SideTabs: FC<ISideTabs> = ({ tabs, mods }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={clsx(style.tabs, mods && style['tabs_' + mods])}>
      <ul className={style.tabs__head}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={clsx(
              style.tabs__item,
              activeTab === index && style.tabs__item_active,
              tab.mods && style['tabs__item_' + tab.mods]
            )}
            onClick={() => (tab.onClick ? tab.onClick() : handleTabClick(index))}
          >
            <Typography type={ETypographyType.p1}>{tab.label}</Typography>
          </li>
        ))}
      </ul>
      <div className={style.tabs__content}>
        {tabs[activeTab].content && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default SideTabs;
