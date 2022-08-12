import DateFormatter from './DateFormatter';

const Comment = ({ imgPath, name, comment, createdAt }) => {
    return <>
        <div className="flex items-center space-x-2 font-semibold">
            <img src={imgPath} alt="" className="inline-block w-12 h-12 rounded-full" />
            <span>{name ?? 'Guest'}</span>
            </div>
        <p className="mb-1">{comment} - <span className="text-xs font-semibold italic"><DateFormatter value={createdAt} dateFormat="hh:mm:ss yyyy-MM-dd" /></span></p>
    </>
}

export default Comment;