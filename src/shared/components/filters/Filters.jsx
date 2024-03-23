import React from 'react';
import styles from './filters.module.scss';
import FilterSelect from './FilterSelect';

const Filters = ({
  onFilterChange,
  staffValue,
  serviceValue,
  serviceOptions,
  staffOptions,
  setStaffValue,
  setServiceValue,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__heading}>
          <h3>filters</h3>
        </div>
        <div className={styles.container__filters}>
          <div className={styles.container__filters__item}>
            <div className={styles.container__filters__item__label}>
              Search by Staff:
            </div>
            <div className={styles.container__filters__item__filter}>
              <FilterSelect
                id='staff filter'
                element='select'
                type='select'
                label='Filter By Staff'
                options={staffOptions}
                multiple
                value={staffValue}
                onChange={(o) => setStaffValue(o)}
                onFilterChange={onFilterChange}
              />
            </div>
          </div>
          <div className={styles.container__filters__item}>
            <div className={styles.container__filters__item__label}>
              Search by Service name:
            </div>
            <div className={styles.container__filters__item__filter}>
              <FilterSelect
                id='service filter'
                element='select'
                type='select'
                label='Filter by service'
                multiple
                options={serviceOptions}
                value={serviceValue}
                onChange={(o) => setServiceValue(o)}
                onFilterChange={onFilterChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
