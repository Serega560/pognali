import React from "react";
import {Link} from "react-router-dom";
import MiniPlan from "../miniplan/miniplan";
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import { useAppSelector } from "../../../hooks/hooks";


function Entertainment() {

   const choosenCountries = useAppSelector((state) => state.appSlice.choosenCountries);

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
         <div className="entertainment-body">
            <div className="entertainment-form">
            {choosenCountries.map((country) => {
               return (
                  <div className="form-group" key={country.name}>
                  <label htmlFor="textarea1">{country.name}</label>
                  <textarea
                     id="textarea1"
                     name="textarea1"
                     rows={3}
                     cols={20}
                     placeholder="План действий"
                     // value=""
                  />
               </div>
               )
            })}
               {/* <div className="form-group">
                  <label htmlFor="textarea1">Босния</label>
                  <textarea
                     id="textarea1"
                     name="textarea1"
                     rows={3}
                     cols={20}
                     placeholder="План действий"
                     // value=""
                  />
               </div> */}
               {/* <div className="form-group">
                  <label htmlFor="textarea2">Чехия</label>
                  <textarea
                     id="textarea2"
                     name="textarea2"
                     rows={3}
                     cols={50}
                     placeholder="План действий"
                     // value=""
                  />
               </div> */}
            </div>
            <div className="group-country">
               {choosenCountries.map((country) => {
                  return (
                     <div>
                        <img src={country.flag} alt="flag image" />
                     </div>
                  )
               })}
               {/* <div></div>
               <div></div> */}
            </div>
         </div>
         <div className="group-btn">
            <button className="entertainment-btn" type="button">
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
