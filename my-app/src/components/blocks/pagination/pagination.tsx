import React from 'react';
import { ReactComponent as ArrowNext } from '../../../assets/img/arrowNext.svg'
import './pagination.module.scss'

function Pagination() {
    return (
      <section className="pagination">
        <ul className="pagination__page-list">
            <li className="pagination__page-item active">
                <span>1</span>
            </li>
            <li className="pagination__page-item">
                <span>2</span>
            </li>
            <li className="pagination__page-item">
                <span>3</span>
            </li>
            <li className="pagination__page-item">
                <span>4</span>
            </li>
        </ul>

        <div className="pagination__arrows">
            <button className="pagination__arrow pagination__arrow--prev">
                <ArrowNext/>
            </button>
            <button className="pagination__arrow pagination__arrow--next">
                <ArrowNext/>
            </button>
        </div>
        
      </section>
    );
  }
  
  export default Pagination;