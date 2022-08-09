import { format } from "date-fns";

const DateFormatter = ({ value, dateFormat = 'yyyy-mm-dd' }) => format(new Date(value), dateFormat);

export default DateFormatter;