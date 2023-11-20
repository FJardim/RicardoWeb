import { Link } from "react-router-dom";
import { format } from "date-fns";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import imgUrl from "../../helpers/imgUrl";
import useMealPeriodsForDayOverview from "../../hooks/useMealPeriodsForDayOverview";
import DateFormatter from "../DateFormatter";
import ModalScheduleRecipe from "./ModalScheduleRecipe";

const DayDetails = ({ date, onRecipeScheduled }) => {
  const [{ mealPeriods = [], loading: loadingMealPeriods }] =
    useMealPeriodsForDayOverview({
      day: format(date, "yyyy-MM-dd"),
    });

  return (
    <>
      <section className="w-full h-full border rounded">
        <header className="flex justify-between items-center p-3 border-b">
          <h3 className="text-3xl">
            <DateFormatter value={date} dateFormat="MMMM dd, yyyy" />
          </h3>
        </header>
        {loadingMealPeriods ? (
          <div className="h-full flex items-center justify-center p-10">
            <span className="animate-spin text-main">
              <AiOutlineLoading size={60} />
            </span>
          </div>
        ) : (
          <div className="p-4 space-y-10">
            {mealPeriods.map((mealPeriod) => (
              <article key={mealPeriod.id} className="space-y-2">
                <header className="flex items-center">
                  <img
                    className="w-12 h-12 mr-3"
                    src={imgUrl(mealPeriod.icon)}
                    alt={mealPeriod.name}
                  />
                  <h4 className="font-semibold text-lg">{mealPeriod.name}</h4>
                  <ModalScheduleRecipe
                    date={date}
                    mealPeriod={mealPeriod}
                    onRecipeScheduled={onRecipeScheduled}
                    trigger={({ onClick }) => (
                      <button
                        className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-main text-white ml-auto"
                        title="Add recipe"
                        onClick={onClick}
                      >
                        <IoMdAdd size={24} />
                      </button>
                    )}
                  />
                </header>

                <div className="grid grid-cols-2 gap-2">
                  {mealPeriod.scheduledRecipes.length === 0 ? (
                    <div className="space-y-2 text-center">
                      <p className="text-sm italic">No recipes</p>
                    </div>
                  ) : (
                    mealPeriod.scheduledRecipes.map((sr) => (
                      <Link
                        key={sr.id}
                        to={`/recipes/${sr.slug}`}
                        style={{
                          backgroundImage: `url(${imgUrl(sr.images[0]?.path)})`,
                          backgroundSize: "100% 100%",
                        }}
                        className="block w-32 h-24 relative rounded-md bg-center overflow-hidden"
                      >
                        <span className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gradient-to-t from-gray-900 to-transparent">
                          <span className="block truncate text-white text-xs">
                            {sr.name}
                          </span>
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default DayDetails;
