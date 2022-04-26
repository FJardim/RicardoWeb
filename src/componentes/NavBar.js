import NavSearchBar from "./NavSearchBar";
import PageLogo from "./PageLogo";

const NavBar = () => {
    return (
        <div className="bg-gray-800 text-white h-14">
            <div className="container h-full">
                <div className="flex justify-between md:justify-none items-center h-full">
                    <PageLogo />
                    <NavSearchBar />
                    <div className="text-white w-50 bg-gray-800 border border-slate-300 rounded-md py-1 px-2.5">
                        <input
                            name="search"
                            value=""
                            onChange=""
                            id="search"
                            placeholder="Search..."
                            className=""
                            type="text"
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </div>
    );
}

export default NavBar;
