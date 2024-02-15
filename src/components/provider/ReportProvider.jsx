import { useState } from "react";
import { ReportContext } from "../context/context";
import { useImmer } from "use-immer";

const currentDate = new Date();
export default function ReportProvider(props) {
  const [showCategoryBtn, setShowCategoryBtn] = useState(true);
  const [selcetDate, updateSelctDate] = useImmer(defaultDate);
  const [currentCategory, setCurrentCategory] = useState("week");
  const [nextMonth, setNextMonth] = useState(0);
  const [prevMonth, setPreveMonth] = useState(1);
  const [clicked, updateClicked] = useImmer([]);
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <ReportContext.Provider
      value={{
        showCategoryBtn,
        setShowCategoryBtn,
        selcetDate,
        updateSelctDate,
        currentCategory,
        setCurrentCategory,
        nextMonth,
        setNextMonth,
        prevMonth,
        setPreveMonth,
        clicked,
        updateClicked,
        showCalendar,
        setShowCalendar,
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
}

const defaultDate = {
  startDate: {
    year: Number(currentDate.getFullYear().toString().substring(2, 4)),
    month: Number("0" + (currentDate.getMonth() + 1)),
    date: currentDate.getDate() - currentDate.getDay(),
  },
  endDate: {
    year: Number(currentDate.getFullYear().toString().substring(2, 4)),
    month: Number("0" + (currentDate.getMonth() + 1)),
    date: currentDate.getDate() + (6 - currentDate.getDay()),
  },
};