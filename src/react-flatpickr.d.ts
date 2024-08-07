declare module 'react-flatpickr' {
   import { Component } from 'react';
   import { Instance, Options } from 'flatpickr/dist/types/options';

   export interface DateTimePickerProps {
      options?: Options.Options;
      value?: Date | string | number | (Date | string | number)[];
      defaultValue?: Date | string | number | (Date | string | number)[];
      onChange?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onOpen?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onClose?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onMonthChange?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onYearChange?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onReady?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onValueUpdate?: (selectedDates: Date[], dateStr: string, instance: Instance) => void;
      onDayCreate?: (selectedDates: Date[], dateStr: string, instance: Instance, dayElement: HTMLElement) => void;
      render?: () => JSX.Element;
      children?: React.ReactNode;
      className?: string;
      style?: React.CSSProperties;
   }

   export default class Flatpickr extends Component<DateTimePickerProps> {}
}
