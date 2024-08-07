import React from 'react';
import './filters.module.scss'
import CheckboxTransport from "../../ui/checkbox-transport/checkbox-transport"
import Checkboxes from "../../ui/checkboxes/checkboxes"
import AddSlider from "../slider/slider"


function Filters() {
    return (
        <form className="filters" action="https://echo.htmlacademy.ru/" method="post">
            <p className="filtes__header">Подберите идеального попутчика</p>
            <Checkboxes />
            <div className="filtes__transport">
                <p>Транспорт:</p>
                <CheckboxTransport />
            </div>
            <AddSlider />
            <button className="filters__button" type="submit">
              <span>Показать</span>
            </button>
        </form>
    )
}

export default Filters;
