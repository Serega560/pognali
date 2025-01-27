import React, { useEffect, useState } from 'react';
import MiniPlan from "../miniplan/miniplan";
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {resetState, setActiveStep, setText} from "../../../store/app-slice";
import { useLazyPostFormDataQuery } from "../../../store/catalog-api";
import { DataToPost } from "../../../types";
import { getRandomNumber } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';


function Entertainment() {
   const dispatch = useAppDispatch();
   const choosenCountries = useAppSelector((state) => state.appSlice.choosenCountries);
   const startDate = useAppSelector((state) => state.appSlice.startDate);
   const endDate = useAppSelector((state) => state.appSlice.endDate);
   const hashtags = useAppSelector((state) => state.appSlice.hashtags);
   const companions = useAppSelector((state) => state.appSlice.companions);
   const text = useAppSelector((state) => state.appSlice.text);
   const transport = useAppSelector((state) => state.appSlice.transport_choice);
   const navigate = useNavigate();

   const [hasChoosenCountries, setHasChoosenCountries] = useState<boolean>(true);
   const [postData, {isLoading, isError, isSuccess}] = useLazyPostFormDataQuery();

  function handlePostData () {
   if (choosenCountries.length === 0) {
      setHasChoosenCountries(false);
      return;
   }
   const data: DataToPost = {
      startDate: startDate,
      endDate: endDate,
      companions: companions,
      text: Object.entries(text).toString(),
      transport_choice: transport,
      name: 'Vasya',
      hashtags: hashtags,
      country: choosenCountries.map(({ name, flag }) => ({ name, flag })),
      level: getRandomNumber(),
      is_form_generated: false
    }
    
    postData(data);
  }

  useEffect(() => {
   if (isSuccess) {
      dispatch(resetState());
      navigate(AppRoute.Catalog);
   }

  }, [isSuccess]);

   const [isActive, setIsActive] = useState(false);
   const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(true);

   useEffect(() => {
      if (startDate !== '' || endDate !== '' || transport.length !== 0 && !isLoading) {
         setIsSubmitButtonDisabled(false);
      }
   }, [startDate, endDate, transport.length, isLoading]);

   useEffect(() => {
      if (choosenCountries.length) {
         setHasChoosenCountries(true);
      }
      
   }, [choosenCountries.length]);

   return (
      <div className="entertainment" id="entertainment">
         <div className="entertainment-header">
            <div className="entertainment-heading">
               <h3>Шаг 3. Развлечения</h3>
               <p>Наконец, расскажите о&nbsp;своих планах времяпровождения.
                  Можно&nbsp;писать в&nbsp;свободной форме и&nbsp;ставить тэги.
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
                        className={isActive ? 'active-placeholder' : ''}
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                        id="textarea1"
                        name="textarea1"
                        rows={4}
                        cols={20}
                        placeholder="План действий"
                        onChange={(evt) => dispatch(setText(evt.currentTarget.value))}
                     />
                  </div>
               )
            })}

         </div>
         <div className={`form-error ${hasChoosenCountries ? '' : 'active'}`}>
            <span>Выберите хотя бы одну страну!</span>
         </div>
         <div className="group-btn">
            <button className="entertainment-btn" type="button" disabled={isSubmitButtonDisabled}
               onClick={(evt) => {
                  evt.preventDefault();
                  handlePostData();
                }}
            >
               <span>Отправить</span>
               <NextStep/>
            </button>
            <button className="entertainment-btn btn-back" onClick={() => dispatch(setActiveStep('route'))}>
               <NextStep/>
               <span>На шаг назад</span>
            </button>
         </div>
      </div>
   );
}

export default Entertainment;
