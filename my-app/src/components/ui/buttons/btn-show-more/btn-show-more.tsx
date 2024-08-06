import React from 'react';
import { ReactComponent as Plus } from '../../../../assets/img/plus.svg'
import "./btn-show-more.module.scss"
// import { useLazyGetPaginationQuery } from '../../../../store/catalog-api';
// import { LIMIT } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { setLimit } from '../../../../store/app-slice';

function BtnShowMore() {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.appSlice.currentPage);
    // const [showMoreCards, {isLoading}] = useLazyGetPaginationQuery();


    return (
        <button className="btn-show-more" onClick={() => dispatch(setLimit())}>
            <Plus />
            <span>показать еще</span>
        </button>
    );
  }
  
  export default BtnShowMore;