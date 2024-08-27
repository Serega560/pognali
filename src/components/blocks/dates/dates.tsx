import React, {useState} from 'react'
import {ReactComponent as Plus} from '../../../assets/img/plusbutton.svg'
import {ReactComponent as Minus} from '../../../assets/img/minusbutton.svg'
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import StepDates from "../calendar/calendar";
import { setActiveStep, setCompanions, setDuration } from '../../../store/app-slice';

interface DatesProps {
   children: React.ReactNode;
}

const Dates: React.FC<DatesProps> = ({children}) => {
   const dispatch = useAppDispatch();
   const companions = useAppSelector((state) => state.appSlice.companions);
   const days = useAppSelector((state) => state.appSlice.duration);
   const incrementCompanions = () => dispatch(setCompanions(companions + 1));
   const decrementCompanions = () => dispatch(setCompanions(Math.max(companions - 1, 0)));
   const incrementDays = () => dispatch(setDuration(days + 1));
   const decrementDays = () => dispatch(setDuration(Math.max(days - 1, 0)));

   return (
      <div className="dates" id="dates">
         <div className="dates-header">
            <div className="dates-heading">
               <h3>Шаг 1. Даты&nbsp;пребывания</h3>
               <p>Укажите предпочтительное количество попутчиков, которых
                  вы&nbsp;хотели&nbsp;бы позвать в&nbsp;поездку, и&nbsp;ее&nbsp;предполагаемую</p>
            </div>
            {children}
         </div>
         <div className="group-input-checkbox">
            <div className="group-input">
               <div className="companies">
                  <span className="companies-text">ищу попутчиков:</span>
                  <label className="buttons-input" htmlFor="companions">
                     <button className="buttons-minus" onClick={decrementCompanions}><Minus/></button>
                     <input
                        type="number"
                        id="companions"
                        value={companions}
                        onChange={(e) => dispatch(setCompanions(Number(e.target.value)))}
                        min="0"
                     />
                     <button onClick={incrementCompanions}><Plus/></button>
                  </label>
                  <span className="companies-description">чел.</span>
               </div>
               <div className="days">
                  <span className="companies-text">длительность:</span>
                  <label className="buttons-input" htmlFor="days">
                     <button className="buttons-minus" onClick={decrementDays}><Minus/></button>
                     <input
                        type="number"
                        id="days"
                        value={days}
                        onChange={(e) => dispatch(setDuration(Number(e.target.value)))}
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
         <a className="buttons-step" href="#route" onClick={() => dispatch(setActiveStep('route'))}>
            <span>Следующий шаг</span>
            <NextStep/>
         </a>
      </div>
   );
}
export default Dates;
