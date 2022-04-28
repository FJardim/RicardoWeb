import Footer from "./Footer";
import NavBar from "./NavBar";
import NavInfo from "./NavInfo";

const AppLayout = ({children}) => {
    return (
        <div className="br-gray-800">
            <NavBar />
            <NavInfo />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout;