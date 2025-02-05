import styles from './sortingFilters.module.scss';
import React, {useState} from 'react';
import SortingButton from '../../../Ui/Buttons/SortingButton/SortingButton';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setActiveSorting} from '../../../../redux/movies-slice';
import {SortingFilterType} from '@/redux/utils/moviesSortingFilter';

const SortingFilters = () => {

  const dispatch = useAppDispatch();
  const sortingCategoriesStore = useAppSelector(
    (state) => state.movies.sorting
  );

  const [listActive, setListActive] = useState(false);

  const selectSortingFilterHandler = (cat: SortingFilterType) => {
    dispatch(setActiveSorting({sortingName: cat.sortingName}));
    setListActive(false);
  };

const activeSortingFilter = sortingCategoriesStore.filter(cat=>cat.active)
const inactiveSortingFilters = sortingCategoriesStore.filter(cat=>!cat.active)
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        
              <SortingButton
                key={`${activeSortingFilter[0].sortingName}_${activeSortingFilter[0].order}`}
                active={activeSortingFilter[0].active}
                order={activeSortingFilter[0].order}
                name={activeSortingFilter[0].buttonName}
                listActive={listActive}
                onClick={() => {
                  setListActive(!listActive);
                }}
              />
           

        <div className={styles.listBox}>
          {listActive && (
            <ul>
              {inactiveSortingFilters.map(
                (cat) =>
                   (
                    <li key={`${cat.sortingName}_${cat.order}`}>
                      <SortingButton
                        active={cat.active}
                        order={cat.order}
                        name={cat.buttonName}
                        onClick={() => selectSortingFilterHandler(cat)}
                      />
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortingFilters;
