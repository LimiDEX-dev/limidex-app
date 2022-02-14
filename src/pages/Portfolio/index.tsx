/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import { portfolio } from '../../lib/mock/portfolio';
import { NetworkItem } from '../../components/NetworkItem';
import { PortfolioTable, PortfolioTableFields } from '../../components/PortfolioTable';
import { SortType } from '../../components/Sort';

export const Portfolio: FC = () => {
  const [activeNetwork, setActiveNetwork] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [networks, setNetworks] = useState(portfolio.networks);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState(portfolio.data);
  const [sort, setSort] = useState<{ field: PortfolioTableFields; by: SortType }>({ field: 'network', by: 'no' });

  useEffect(() => {
    // THERE IS FUNCTION THAT SET NETWORKS DATA
    // setNetworks(someData);
    // AND PORTFOLIO TABLE DATA
    // setList(someData);
  }, []);

  return (
    <div className="portfolio">
      <ul className="portfolio__networks__list">
        {networks.map((item, index) => (
          <NetworkItem
            title={item.title}
            icon={index !== 0 && (
              <span style={{
                display: 'block', width: '16px', height: '16px', backgroundColor: '#C4C4C4', borderRadius: '100%',
              }}
              />
            )}
            isActive={index === activeNetwork}
            handleChange={() => setActiveNetwork(index)}
            key={`${item.title}-${index}`}
          />
        ))}
      </ul>
      <PortfolioTable sort={sort} handleChangeSort={setSort} data={list} />
    </div>
  );
};
