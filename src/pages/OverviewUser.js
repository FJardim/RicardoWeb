import BoxName from "../componentes/BoxName";
import ButtonOverview from "../componentes/ButtonOverview";
import LyOverview from "../componentes/LyOverview";

const OverviewUser = () => {
    return (
        <div className="container p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">Overview</p>
            <div className="grid grid-cols-8 px-2 py-2 mt-10">
                <BoxName name="Sunday" />
                <BoxName name="Monday" />
                <BoxName name="Tuesday" />
                <BoxName name="Wednesday" />
                <BoxName name="thursday" />
                <BoxName name="Friday" />
                <BoxName name="Saturday" />
                <div className="grig grid-rows-4 gap-48 ">
                    <LyOverview name="B" />
                    <LyOverview name="S" />
                    <LyOverview name="L" />
                    <LyOverview name="S" />
                    <LyOverview name="D" />
                </div>


            </div>
            <div className="mt-8 px-20 py-2">
                <ButtonOverview name="Breakfact" />
                <ButtonOverview name="Morning Snack" />
                <ButtonOverview name="Lunch" />
                <ButtonOverview name="Afternoon Snack" />
                <ButtonOverview name="Dinner" />
                <ButtonOverview name="Opctional Snacks" />
            </div>
        </div>
    );
}
export default OverviewUser;