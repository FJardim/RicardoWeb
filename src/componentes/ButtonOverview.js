const ButtonOverview = ({ name }) => {
    return (
        <div className="p-6">
            <button className="w-full h-14 rounded-full bg-main-light shadow">
                <p className="text-white Font-bold text-4xl">{name}</p>
            </button>
        </div>
    );
}

export default ButtonOverview;