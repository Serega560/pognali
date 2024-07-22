import React from "react";
import Dates from "../dates/dates";
import MiniPlan from "../miniplan/miniplan";

function Plan() {
    return (
        <section className="plan">
            <div className="container">
                <h2>Добавить план:</h2>
                <Dates>
                    <MiniPlan />
                </Dates>
            </div>
        </section>
    );
}

export default Plan
