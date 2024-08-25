import Dates from "../dates/dates";
import MiniPlan from "../miniplan/miniplan";
import Route from "../route/route";
import Entertainment from "../entertainment/entertainment";
import { useAppSelector } from "../../../hooks/hooks";

function Plan() {

    const activeStep = useAppSelector((state) => state.appSlice.activeStep);

    return (
        <section className="plan">
            <div className="container container-plan">
                <h2>Добавить план:</h2>
                <div className="plan-step">
                    {activeStep === 'dates' ? <Dates>
                        <MiniPlan />
                    </Dates> : ''}
                    {activeStep === 'route' ? <Route /> : ''}
                    {activeStep === 'activities' ? <Entertainment /> : ''}
                </div>
            </div>
        </section>
    );
}

export default Plan;

