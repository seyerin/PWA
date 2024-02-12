import { useImmer } from "use-immer";
import { CalendarContext } from "../context/context";
import { useState } from "react";

export default function CalendarProvider(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [nextMonth, setNextMonth] = useState(0);
  const [prevMonth, setPreveMonth] = useState(1);
  const nowYear = currentDate.getFullYear();
  const nowMonth = currentDate.getMonth();
  const [selectDate, updateSelectDate] = useImmer({
    year: nowYear,
    month: nowMonth + 1,
  });
  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        nextMonth,
        setNextMonth,
        prevMonth,
        setPreveMonth,
        selectDate,
        updateSelectDate,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
}
