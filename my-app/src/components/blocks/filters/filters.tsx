import React from 'react';
import './filters.module.scss'
import CheckboxTransport from "../../ui/checkbox-transport/checkbox-transport"
import Checkboxes from "../../ui/checkboxes/checkboxes"
import AppSlider from "../slider/slider"


function Filters() {
    return (
        <div className="filters">
            <p className="filtes__header">Подберите идеального попутчика</p>
            <Checkboxes />
            <div className="filtes__transport">
                <p>Транспорт:</p>
                <CheckboxTransport />
            </div>
            <AppSlider />
        </div>
    )
}

export default Filters;
