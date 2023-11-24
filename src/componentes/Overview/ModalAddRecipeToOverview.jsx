import { useState } from "react";
import useMealPeriods from "../../hooks/useMealPeriods";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import Button from "../Button";
import useAxios from "../../hooks/useAxios";
import { useFeedBack } from "../../contexts/FeedBackContext";

const initialData = ({
  scheduledAt = "",
  numberOfServings = "",
  mealPeriodId = "",
} = {}) => ({
  scheduledAt,
  numberOfServings,
  mealPeriodId,
});

const ModalAddRecipeToOverview = ({ trigger: Trigger, recipeId }) => {
  const { setCustomToast } = useFeedBack();

  const [data, setData] = useState(initialData({ recipeId }));
  const { isShown, show, hide } = useToggle();
  const [{ mealPeriods }] = useMealPeriods();

  const [{}, scheduleRecipe] = useAxios(
    { url: "/scheduled-recipes", method: "POST" },
    { manual: true }
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await scheduleRecipe({ data: { ...data, recipeId } });

    setData(initialData());

    hide();

    setCustomToast({
      message: "Recipe scheduled",
      severity: "success",
      show: true,
      position: "",
    });
  };

  return (
    <>
      {<Trigger onShow={show} />}

      <Modal show={isShown} onClose={hide}>
        <h2 className="text-2xl mb-4">Schedule recipe</h2>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block">Servings</label>
            <input
              type="text"
              name="numberOfServings"
              placeholder="Servings"
              className="w-full rounded-xl focus:outline-none focus:ring-main border-none bg-gray-100"
              value={data.numberOfServings}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block">Date</label>
            <input
              type="date"
              name="scheduledAt"
              placeholder="Date"
              className="w-full rounded-xl focus:outline-none focus:ring-main border-none bg-gray-100"
              value={data.scheduledAt}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block">Meal period</label>
            <select
              name="mealPeriodId"
              className="w-full rounded-xl focus:outline-none focus:ring-main border-none bg-gray-100"
              value={data.mealPeriodId}
              onChange={handleChange}
              required
            >
              <option value={""} disabled>
                Select an option
              </option>
              {mealPeriods.map((mealPeriod) => (
                <option key={mealPeriod.id} value={mealPeriod.id}>
                  {mealPeriod.name}
                </option>
              ))}
            </select>

            <div className="text-right">
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalAddRecipeToOverview;
