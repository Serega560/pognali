import Dates from "../dates/dates";
import MiniPlan from "../miniplan/miniplan";
import Route from "../route/route";
import Entertainment from "../entertainment/entertainment";

function Plan() {

    return (
        <section className="plan">
            <div className="container">
                <h2>Добавить план:</h2>
                <div className="planstep">
                    <Dates>
                        <MiniPlan/>
                    </Dates>
                    <Route/>
                    <Entertainment />
                </div>
            </div>
        </section>
    );
}

export default Plan
