import React from 'react';
import { ReactComponent as Plus } from '../../../../assets/img/plus.svg'
import "./btn-show-more.module.scss"

function BtnShowMore() {
    return (
        <button className="btn-show-more">
            <Plus />
            <span>показать еще</span>
        </button>
    );
  }
  
  export default BtnShowMore;