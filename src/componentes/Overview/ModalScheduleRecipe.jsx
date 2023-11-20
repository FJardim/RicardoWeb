import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import ModalContainer from "../Modal/ModalContainer";
import Button from "../Button";
import ModalOverlay from "../Modal/ModalOverlay";
import DateFormatter from "../DateFormatter";
import useRecipes from "../../hooks/useRecipes";
import imgUrl from "../../helpers/imgUrl";
import useAxios from "../../hooks/useAxios";
import { useFeedBack } from "../../contexts/FeedBackContext";

const ModalScheduleRecipe = ({
  trigger: Trigger,
  onRecipeScheduled,
  date,
  mealPeriod,
}) => {
  const { setCustomToast } = useFeedBack();

  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const formattedDate = format(addDays(date, 1), "yyyy-MM-dd");

  const [data, setData] = useState({
    recipeId: "",
    scheduledAt: formattedDate,
    numberOfServings: "",
    mealPeriodId: mealPeriod.id,
  });

  const [recipeName, setRecipeName] = useState("");
  const [{ recipes }, getRecipes] = useRecipes({ options: { manual: true } });

  const [{ loading: scheduleRecipeLoading }, scheduleRecipe] = useAxios(
    { url: "/scheduled-recipes", method: "POST" },
    { manual: true }
  );

  useEffect(() => {
    if (recipeName.length >= 2) {
      getRecipes({
        params: {
          perPage: 300,
          name: recipeName,
        },
      });
    }
  }, [recipeName]);

  const handleNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (scheduleRecipeLoading) {
      return;
    }

    if (!data.numberOfServings) {
      return alert("The number of servings is required");
    }

    if (!data.recipeId) {
      return alert("You must select a recipe");
    }

    await scheduleRecipe({ data });

    onRecipeScheduled?.();
    hideModal();
    setCustomToast({
      message: "Recipe added",
      severity: "success",
      show: true,
      position: "",
    });
  };

  return (
    <>
      <Trigger onClick={showModal} />
      <ModalOverlay show={show} onClose={hideModal}>
        <ModalContainer className={"max-w-2xl w-full"} onClose={hideModal}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl">
              Schedule recipe for {mealPeriod.name} on
              <DateFormatter value={date} dateFormat=" MMMM dd, yyyy" />
            </h2>

            <div className="mt-4">
              <label className="block font-bold mb-2">Servings</label>
              <input
                type="text"
                name="servings"
                placeholder="Servings"
                className="w-full rounded-xl focus:outline-none focus:ring-main border-none bg-gray-100"
                value={data.numberOfServings}
                onChange={(e) =>
                  setData({ ...data, numberOfServings: e.target.value })
                }
              />
            </div>

            <div className="mt-2">
              <label className="block font-bold mb-2">Recipe</label>
              <input
                type="text"
                name="recipeName"
                placeholder="Recipe name..."
                className="w-full rounded-xl focus:outline-none focus:ring-main border-none bg-gray-100"
                value={recipeName}
                onChange={handleNameChange}
              />
            </div>

            <div className="grid grid-cols-4 gap-4 py-4">
              {recipes.map((recipe) => (
                <button
                  type="button"
                  key={recipe.id}
                  style={{
                    backgroundImage: `url(${imgUrl(recipe.images[0]?.path)})`,
                    backgroundSize: "100% 100%",
                  }}
                  className={`block w-32 h-24 relative rounded-md bg-center overflow-hidden ${
                    data.recipeId === recipe.id ? "ring-4 ring-main" : ""
                  }`}
                  onClick={() => setData({ ...data, recipeId: recipe.id })}
                >
                  <span className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gradient-to-t from-gray-900 to-transparent">
                    <span className="block truncate text-white text-xs text-left">
                      {recipe.name}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="text-right">
              <Button type="submit" disabled={scheduleRecipeLoading}>
                Save
              </Button>
            </div>
          </form>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
};

export default ModalScheduleRecipe;
