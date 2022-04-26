import LogoDrafts from '../assets/drafts.png';

const PageLogo = () => {
    return (
        <div className="flex items-center text-white space-x-4">
            <img className="inline-block h-9 rounded-lg"
                src={LogoDrafts} alt="Drafts" />
        </div>

    );
}

export default PageLogo;