import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import TabsContainer from "./TabsContainer";

const CreatePlanForm = () => {

    return (
        <TabsProvider>
            {/* Tabs */}
            <TabsContainer className="md:flex flex flex-wrap md:m-10 m-2 mt-6 text-center">
                <Tab value={0}>1.- Information</Tab>
                <Tab value={1}>2.- Categories</Tab>
                <Tab value={2}>3.- Weeks</Tab>
                <Tab value={3}>4.- Recipes</Tab>
            </TabsContainer>

            {/* TAB PANELS */}
            <div className="mt-4 md:p-4">
                {/* Descripción */}
                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={0}
                >
                    <StepOne />
                </TabPanel>

                {/* Vendedor */}
                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={1}
                >
                    <StepTwo />
                </TabPanel>

                {/* Comments */}
                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={2}
                >
                    <StepThree />
                </TabPanel>

                {/* Comments */}
                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={3}
                >
                    <StepFour />
                </TabPanel>
            </div>
        </TabsProvider>
    )
}

export default CreatePlanForm;