import React, {useState} from 'react'
import {ReactComponent as Plus} from '../../../assets/img/plusbutton.svg'
import {ReactComponent as Minus} from '../../../assets/img/minusbutton.svg'
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import {Link} from "react-router-dom";
import { useAppDispatch } from '../../../hooks/hooks';
import { setDataToPostCompanions } from '../../../store/app-slice';
import StepDates from "../calendar/calendar";

interface DatesProps {
   children: React.ReactNode;
}

const Dates: React.FC<DatesProps> = ({children}) => {
   const dispatch = useAppDispatch();
   const [companions, setCompanions] = useState(0);
   const [days, setDays] = useState(0);

   // Обработчики для увеличения и уменьшения значений
   const incrementCompanions = () => setCompanions(prevCompanions => prevCompanions + 1);
   const decrementCompanions = () => setCompanions(prevCompanions => Math.max(prevCompanions - 1, 0));

   const incrementDays = () => setDays(prevDays => prevDays + 1);
   const decrementDays = () => setDays(prevDays => Math.max(prevDays - 1, 0));

   return (
      <div className="dates" id="dates">
         <div className="dates-header">
            <div className="dates-heading">
               <h3>Шаг 1. Даты&nbsp;пребывания</h3>
               <p>Укажите предпочтительное количество попутчиков, которых
                  вы&nbsp;хотели&nbsp;бы позвать в&nbsp;поездку, и&nbsp;ее&nbsp;предполагаемую длительность.</p>
            </div>
            {children}
         </div>
         <div className="group-input-checkbox">
            <div className="group-input">
               <div className="companies">
                  <span className="companies-text">ищу попутчиков:</span>
                  <label className="buttons-input" htmlFor="companions">
                     <button onClick={decrementCompanions}><Minus/></button>
                     <input
                        type="number"
                        id="companions"
                        value={companions}
                        onChange={(e) => setCompanions(Number(e.target.value))}
                        min="0"
                     />
                     <button onClick={incrementCompanions}><Plus/></button>
                  </label>
                  <span className="companies-description">чел.</span>
               </div>
               <div className="days">
                  <span className="companies-text">длительность:</span>
                  <label className="buttons-input" htmlFor="days">
                     <button onClick={decrementDays}><Minus/></button>
                     <input
                        type="number"
                        id="days"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                        min="0"
                     />
                     <button onClick={incrementDays}><Plus/></button>
                  </label>
                  <span className="companies-description">дн.</span>
               </div>
            </div>
            <div className="group-checkbox">
               <label className="custom-checkbox">
                  <input type="checkbox"/>
                  <span className="checkbox-box"></span>
                  <span>Можно с детьми</span>
               </label>
            </div>
         </div>
         <StepDates/>
         <a href="#route" onClick={() => dispatch(setDataToPostCompanions(companions))}>
            <span>Следующий шаг</span>
            <NextStep/>
         </a>
      </div>
   );
}
export default Dates;
