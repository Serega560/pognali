import React from 'react';
import { ReactComponent as ArrowNext } from '../../../assets/img/arrowNext.svg'
import './pagination.module.scss'
import { useGetPaginationQuery } from '../../../store/catalog-api';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setCurrentPage } from '../../../store/app-slice';
import { LIMIT } from '../../../const';

function Pagination() {
    
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.appSlice.currentPage);
    const {data: paginationData} = useGetPaginationQuery({page: currentPage, limit: LIMIT});
    const totalPages = paginationData?.totalPages ?? 1;

    console.log(paginationData, 'pagindata')
    return (
      <section className="pagination">
        <ul className="pagination__page-list">
            {Array.from({length: totalPages}, (_, index: number) => {
                return (
                    <li className={`pagination__page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => dispatch(setCurrentPage(index + 1))}>
                <span>{index + 1}</span>
            </li>
                )
            } )}
            {/* <li className="pagination__page-item active">
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
            </li> */}
        </ul>

        <div className="pagination__arrows">
            <button className="pagination__arrow pagination__arrow--prev" type="button" onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                <ArrowNext/>
            </button>
            <button className="pagination__arrow pagination__arrow--next" type="button" onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                <ArrowNext/>
            </button>
        </div>
        
      </section>
    );
  }
  
  export default Pagination;