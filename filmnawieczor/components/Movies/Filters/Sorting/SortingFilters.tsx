import styles from '../sortingFilters.module.scss';
import React, {useState} from 'react';
import SortingButton from '../../../Ui/Buttons/SortingButton';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setActiveSorting} from '../../../../redux/movies-slice';
import { SortingItem } from '@/types/redux/moviesFilters';
import { SortingFilterType } from '@/redux/utils/moviesSortingFilter';
const SortingFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortingCategoriesStore = useAppSelector(
    (state) => state.movies.sorting
  );
  const [listActive, setListActive] = useState(false);
  const selectSortingFilterHandler = (cat: SortingFilterType) => {
    dispatch(setActiveSorting({sortingName: cat.sortingName}));
    setListActive(false);
  };
  return (
    <div className={styles['sortingFilters-container']}>
      <div className={styles['sortingFilters-container__active-btn']}>
        {sortingCategoriesStore.map(
          (cat) =>
            cat.active && (
              <SortingButton
                key={`${cat.sortingName}_${cat.order}`}
                active={cat.active}
                order={cat.order}
                name={cat.buttonName}
                listActive={listActive}
                onClick={() => {
                  setListActive(!listActive);
                }}
              />
            )
        )}

        <div className={styles['sortingFilters-container__list-box']}>
          {listActive && (
            <ul>
              {sortingCategoriesStore.map(
                (cat) =>
                  !cat.active && (
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
