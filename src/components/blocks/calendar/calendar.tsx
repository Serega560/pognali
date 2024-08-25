import { DateRange } from 'react-date-range';
import { addDays, addMonths, differenceInDays } from 'date-fns';
import '../../vendor/datepicker/datepicker.scss';
import '../../vendor/datepicker/datepicker-theme.scss';
import ru from "date-fns/locale/ru";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setDateState, setDuration, setEndDate, setStartDate } from "../../../store/app-slice";
import { formatDate } from '../../../utils';




function StepDates() {

  const dispatch = useAppDispatch();
  const companions = useAppSelector(state => state.appSlice.companions);
  const duration = useAppSelector(state => state.appSlice.duration);
  const dateState = useAppSelector(state => state.appSlice.dateState);


  const onInputChange = function (event: React.ChangeEvent<HTMLInputElement>, setState: any, min: number, max: number) {
    const inputTarget = event.target as HTMLInputElement;
    if (+inputTarget.value > max) {
      dispatch(setState(max))
    } else if (inputTarget.value === '' || +inputTarget.value === 0) {
      dispatch(setState(0))
    } else {
      dispatch(setState(inputTarget.value))
    }
    inputTarget.focus();
  }

  const onInputBlur = function (event: React.ChangeEvent<HTMLInputElement>, setState: any, min: number) {
    const inputTarget = event.target as HTMLInputElement;
    if (+inputTarget.value < min) {
      dispatch(setState(min))
    }
  }

  const onDateChange = function (item: any) {
    const result = differenceInDays(item[0].endDate, item[0].startDate);

    if (result === 0) {
      dispatch(setDateState([
        {
          startDate: item[0].startDate.toString(),
          endDate: (addDays(item[0].startDate, 1)),
          key: 'selection'
        }
      ]));
      dispatch(setStartDate(formatDate(item[0].startDate.toString())));
      dispatch(setEndDate(formatDate((addDays(item[0].startDate, 1)).toString())));
      dispatch(setDuration(1));
    } else if (result > 31) {
      dispatch(setDateState([
        {
          startDate: item[0].startDate.toString(),
          endDate: (addMonths(item[0].startDate, 1)),
          key: 'selection'
        }
      ]));
      dispatch(setStartDate(formatDate(item[0].startDate.toString())));
      dispatch(setEndDate(formatDate((addMonths(item[0].startDate, 1)).toString())));
      dispatch(setDuration(31));
    } else {
      dispatch(setDateState([
        {
          startDate: item[0].startDate.toString(),
          endDate: item[0].endDate.toString(),
          key: 'selection'
        }
      ]));
      dispatch(setStartDate(formatDate(item[0].startDate.toString())));
      dispatch(setEndDate(formatDate(item[0].endDate.toString())));
      dispatch(setDuration(result));
    }
  }

  return (
    <section className="step">
      <div className="step__content">
        <div className="step__calendar">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => onDateChange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: new Date(dateState[0].startDate),
                endDate: new Date(dateState[0].endDate),
                key: 'selection'
              }
            ]}
            weekStartsOn={1}
            locale={ru}
            weekdayDisplayFormat={window.matchMedia("(min-width: 768px)").matches ? "eeeeee" : "eeeee"}
            monthDisplayFormat="MMMM"
            minDate={addDays(new Date(), 0)}
            showMonthAndYearPickers={false}
          />
        </div>
      </div>
    </section>
  )
}

export default StepDates;
