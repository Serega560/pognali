import React, {useState} from 'react'
import {ReactComponent as Plus} from '../../../assets/img/plusbutton.svg'
import {ReactComponent as Minus} from '../../../assets/img/minusbutton.svg'
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import {Link} from "react-router-dom";

interface DatesProps {
   children: React.ReactNode;
}

const Dates: React.FC<DatesProps> = ({children}) => {
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
               <h3>Шаг 1. Даты пребывания</h3>
               <p>Укажите предпочтительное количество попутчиков, которых
                  вы хотели бы позвать в поездку, и ее предполагаемую длительность.</p>
            </div>
            {children}
         </div>
         <div className="group-input-checkbox">
            <div className="group-input">
               <div className="companies">
                  <span className="companies-text">ищу попутчиков:</span>
                  <label htmlFor="companions">
                     <div className="buttons-input">
                        <button onClick={decrementCompanions}><Minus/></button>
                        <input
                           type="number"
                           id="companions"
                           value={companions}
                           onChange={(e) => setCompanions(Number(e.target.value))}
                           min="0"
                        />
                        <button onClick={incrementCompanions}><Plus/></button>
                     </div>
                  </label>
                  <span>чел.</span>
               </div>
               <div className="days">
                  <span className="companies-text">длительность:</span>
                  <label htmlFor="days">
                     <div className="buttons-input">
                        <button onClick={decrementDays}><Minus/></button>
                        <input
                           type="number"
                           id="days"
                           value={days}
                           onChange={(e) => setDays(Number(e.target.value))}
                           min="0"
                        />
                        <button onClick={incrementDays}><Plus/></button>
                     </div>
                  </label>
                  <span>дн.</span>
               </div>
            </div>
            <div className="group-checkbox">
               <label className="custom-checkbox">
                  <input type="checkbox"/>
                  <span className="checkbox-box"></span>
                  <span>можно с детьми</span>
               </label>
            </div>
         </div>
         <a href="#route">
            <span>Следующий шаг</span>
            <NextStep/>
         </a>
      </div>
   );
}
export default Dates;
