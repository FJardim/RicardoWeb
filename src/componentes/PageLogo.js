import LogoDrafts from '../assets/drafts.png';

const PageLogo = ({ centered = false }) => {
    return (
        <div className={`flex items-center text-white space-x-4 ${centered ? 'justify-center' : ''}`}>
            <img className="inline-block h-9 rounded-lg"
                src={LogoDrafts} alt="Drafts" />
        </div>

    );
}

export default PageLogo;