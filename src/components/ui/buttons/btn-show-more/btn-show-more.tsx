import React from 'react';
import { ReactComponent as Plus } from '../../../../assets/img/plus.svg'
import "./btn-show-more.module.scss"
import { useAppDispatch } from '../../../../hooks/hooks';
import { setLimit } from '../../../../store/app-slice';

function BtnShowMore() {
    const dispatch = useAppDispatch();

    return (
        <button className="btn-show-more" onClick={() => dispatch(setLimit())}>
            <Plus />
            <span>показать еще</span>
        </button>
    );
  }
  
  export default BtnShowMore;