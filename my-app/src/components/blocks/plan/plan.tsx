import React, {useState} from 'react';
import Dates from "../dates/dates";
import MiniPlan from "../miniplan/miniplan";
import {ReactComponent as Plus} from '../../../assets/img/plusbutton.svg'
import {ReactComponent as Minus} from '../../../assets/img/minusbutton.svg'
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';
import Route from "../route/route";

function Plan() {
    const [companions, setCompanions] = useState(2);
    const [days, setDays] = useState(3);

    // Обработчики для увеличения и уменьшения значений
    const incrementCompanions = () => setCompanions(prevCompanions => prevCompanions + 1);
    const decrementCompanions = () => setCompanions(prevCompanions => Math.max(prevCompanions - 1, 0));

    const incrementDays = () => setDays(prevDays => prevDays + 1);
    const decrementDays = () => setDays(prevDays => Math.max(prevDays - 1, 0));

    return (
        <section className="plan">
            <div className="container">
                <h2>Добавить план:</h2>
                <div className="planstep">
                    <Dates>
                        <MiniPlan/>
                        <div className="group-input">
                            <div className="companies">
                                <span>ищу попутчиков:</span>
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
                                <span>длительность:</span>
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
                                <span>чел.</span>
                            </div>
                        </div>
                        <a href="#">
                            <span>Следующий шаг</span>
                            <NextStep/>
                        </a>
                    </Dates>
                    <Route/>
                </div>
            </div>
        </section>
    );
}

export default Plan
