import React from "react";
import {Link} from "react-router-dom";
import MiniPlan from "../miniplan/miniplan";
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {resetState, setText} from "../../../store/app-slice";
import { useLazyPostFormDataQuery } from "../../../store/catalog-api";
import { DataToPost } from "../../../types";


function Entertainment() {
   const dispatch = useAppDispatch();
   const choosenCountries = useAppSelector((state) => state.appSlice.choosenCountries);
   const startDate = useAppSelector((state) => state.appSlice.startDate);
   const endDate = useAppSelector((state) => state.appSlice.endDate);
   const hashtags = useAppSelector((state) => state.appSlice.hashtags);
   const companions = useAppSelector((state) => state.appSlice.companions);
   const text = useAppSelector((state) => state.appSlice.text);
   const transport = useAppSelector((state) => state.appSlice.transport_choice);

   const [postData, {isLoading, isError, isSuccess}] = useLazyPostFormDataQuery();

  function handlePostData () {
    const data: DataToPost = {
      startDate: startDate,
      endDate: endDate,
      companions: companions,
      text: text,
      transport_choice: transport,
      name: 'Vasya',
      hashtags: hashtags,
      countries: choosenCountries.map((country) => country.name),
    }
    
    postData(data);
    if (isSuccess) {
      dispatch(resetState());
    }
  }

   return (
      <div className="entertainment" id="entertainment">
         <div className="entertainment-header">
            <div className="entertainment-heading">
               <h3>Шаг 3. Развлечения</h3>
               <p>Наконец, расскажите о&nbsp;своих планах времяпровождения.
                  Можно писать в&nbsp;свободной форме и&nbsp;ставить тэги.
               </p>
            </div>
            <MiniPlan/>
         </div>
         <div className="entertainment-form">
            {choosenCountries.map((country) => {
               return (
                  <div className="form-group">
                     <label htmlFor="textarea1">{country.name}</label>
                     <div>
                        <img src={country.flag} alt="country flag image"/>
                     </div>
                     <textarea
                        id="textarea1"
                        name="textarea1"
                        rows={3}
                        cols={20}
                        placeholder="План действий"
                        onChange={(evt) => dispatch(setText(evt.currentTarget.value))}
                     />
                  </div>
               )
            })}

         </div>
         <div className="group-btn">
            <button className="entertainment-btn" type="button"
               onClick={(evt) => {
                  evt.preventDefault();
                  handlePostData();
                }}
            >
               <span>Отправить</span>
               <NextStep/>
            </button>
            <a href="#route" className="entertainment-btn btn-back">
               <NextStep/>
               <span>На шаг назад</span>
            </a>
         </div>
      </div>
   );
}

export default Entertainment;
