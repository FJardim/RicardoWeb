import { useState } from "react";
import { format } from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import useOverviewCalendar from "../hooks/useOverviewCalendar";
import DateFormatter from "../componentes/DateFormatter";
import useAxios from "../hooks/useAxios";
import DayDetails from "../componentes/Overview/DayDetails";
import clsx from "clsx";

const CalendarCell = ({
  date,
  isFirstDayOfWeek,
  mealPeriodBadges,
  gridRow,
  onClick,
  selected,
}) => {
  return (
    <>
      {isFirstDayOfWeek && (
        <span
          style={{
            paddingBottom: "100%",
            gridRow,
            gridColumn: 1,
          }}
        ></span>
      )}
      <div
        className={clsx(
          "flex flex-col items-center border-r border-b py-2 space-y-1",
          selected && "bg-gray-200"
        )}
        style={{
          gridRow: isFirstDayOfWeek ? gridRow : "auto",
          gridColumn: isFirstDayOfWeek ? 1 : "auto",
        }}
        onClick={onClick}
      >
        {date && <span className="">{format(date, "dd")}</span>}
        {mealPeriodBadges.map((mp) => (
          <span
            key={mp}
            className="bg-main w-full text-sm text-white font-semibold text-center"
          >
            {mp}
          </span>
        ))}
      </div>
    </>
  );
};

const OverviewUser = () => {
  const { state, decrementMonth, incrementMonth } = useOverviewCalendar();

  const [selectedDate, setSelectedDate] = useState(null);

  const [{ data: overview = {} }, getOverview] = useAxios({
    url: "/scheduled-recipes/overview",
    params: {
      year: state.year,
      month: state.month,
    },
  });

  return (
    <div className="container p-4 md:p-20 w-full mb-20">
      <p className="text-4xl font-bold text-black mb-8">Overview</p>

      <div className="flex justify-center space-x-4">
        <section className="w-full max-w-4xl border rounded-md">
          <header className="flex justify-between items-center p-3 border-b">
            <h3 className="text-3xl">
              <DateFormatter
                value={state.selectedDate}
                dateFormat="MMMM yyyy"
              />
            </h3>
            <div className="flex space-x-2">
              <button
                type="button"
                className="w-8 h-8 inline-flex items-center justify-center rounded hover:bg-gray-300 active:bg-gray-400"
                onClick={decrementMonth}
              >
                <FaAngleLeft size={30} />
              </button>
              <button
                type="button"
                className="w-8 h-8 inline-flex items-center justify-center rounded hover:bg-gray-300 active:bg-gray-400"
                onClick={incrementMonth}
              >
                <FaAngleRight size={30} />
              </button>
            </div>
          </header>
          <div className="flex">
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Sun</span>
            </div>
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Mon</span>
            </div>
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Tue</span>
            </div>
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Wed</span>
            </div>
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Thu</span>
            </div>
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Fri</span>
            </div>
            <div className="w-full flex flex-col items-center border-r border-b">
              <span className="">Sat</span>
            </div>
          </div>

          <div className="grid grid-cols-7">
            {state.datesOfMonth.map((week, i) =>
              week.map((date, j) => {
                const isFirstDayOfWeek = j === 0;

                if (!date) {
                  return (
                    <CalendarCell
                      key={`${i}-${j}`}
                      date={date}
                      isFirstDayOfWeek={isFirstDayOfWeek}
                      mealPeriodBadges={[]}
                      gridRow={i + 1}
                    />
                  );
                }

                const formattedDate = format(date, "yyyy-MM-dd");

                const day = overview[formattedDate];

                const mealPeriodBadges = [];

                if (day?.["Breakfast"]) {
                  mealPeriodBadges.push("Breakfast");
                }
                if (day?.["Lunch"]) {
                  mealPeriodBadges.push("Lunch");
                }
                if (day?.["Snacks"]) {
                  mealPeriodBadges.push("Snacks");
                }
                if (day?.["Dinner"]) {
                  mealPeriodBadges.push("Dinner");
                }

                return (
                  <CalendarCell
                    key={`${i}-${j}`}
                    date={date}
                    isFirstDayOfWeek={isFirstDayOfWeek}
                    mealPeriodBadges={mealPeriodBadges}
                    gridRow={i + 1}
                    onClick={() => setSelectedDate(date)}
                    selected={selectedDate === date}
                  />
                );
              })
            )}
          </div>
        </section>

        {selectedDate && (
          <div className="w-80 animate__animated animate__backInRight">
            <DayDetails date={selectedDate} onRecipeScheduled={getOverview} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewUser;
