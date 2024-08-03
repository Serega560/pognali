
import React from 'react';
import './filters.module.scss'
import CheckboxTransport from "../../ui/checkbox-transport/checkbox-transport"
import Checkboxes from "../../ui/checkboxes/checkboxes"


function Filters() {
    return (
        <section className="filters">
            <h3 className="filtes__header">Подберите идеального попутчика</h3>
            <Checkboxes />
            <CheckboxTransport />
        </section>
    )
   
}


export default Filters;
