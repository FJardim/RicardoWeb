import BoxName from "../componentes/BoxName";
import ButtonOverview from "../componentes/ButtonOverview";

const OverviewUser = () => {
    return (
        <div className="container p-4 mt-6">
            <p className="text-4xl font-bold text-black">Overview</p>
            <div className="grid grid-cols-8 px-2 py-2 mt-10">
                <BoxName name="Sunday" />
                <BoxName name="Monday" />
                <BoxName name="Tuesday" />
                <BoxName name="Wednesday" />
                <BoxName name="thursday" />
                <BoxName name="Friday" />
                <BoxName name="Saturday" />
            </div>
            <ButtonOverview name="Breakfact" />
            <ButtonOverview name="Morning Snack" />
            <ButtonOverview name="Lunch" />
            <ButtonOverview name="Afternoon Snack" />
            <ButtonOverview name="Dinner" />
            <ButtonOverview name="Opctional Snacks" />
        </div>
    );
}
export default OverviewUser;