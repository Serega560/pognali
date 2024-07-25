import React from "react";
import MiniPlan from "../miniplan/miniplan";
import {ReactComponent as NextStep} from '../../../assets/img/nextstep.svg';


function Entertainment() {
    return (
        <div className="entertainment">
            <div className="entertainment-header">
                <div className="entertainment-heading">
                    <h3>Шаг 3. Развлечения</h3>
                    <p>Наконец, расскажите о своих планах времяпровождения.
                        Можно писать в свободной форме и ставить тэги.
                    </p>
                </div>
                <MiniPlan/>
            </div>
            <div className="entertainment-form">
                <div className="form-group">
                    <label htmlFor="textarea1">Босния</label>
                    <textarea
                        id="textarea1"
                        name="textarea1"
                        rows={3}
                        cols={20}
                        placeholder="План действий"
                        // value=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea2">Чехия</label>
                    <textarea
                        id="textarea2"
                        name="textarea2"
                        rows={3}
                        cols={50}
                        placeholder="План действий"
                        // value=""
                    />
                </div>
            </div>
            <div className="group-btn">
                <button className="entertainment-btn" type="button">
                    <span>Отправить</span>
                    <NextStep/>
                </button>
                <button className="entertainment-btn btn-back" type="button">
                    <NextStep/>
                    <span>На шаг назад</span>
                </button>
            </div>
        </div>
    );
}

export default Entertainment;
