import Footer from "./Footer";
import NavBar from "./NavBar";
import NavInfo from "./NavInfo";

const AppLayout = ({ children }) => {
    return (
        <div className="bg-gray-50">
            <NavBar />
            <NavInfo />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout;