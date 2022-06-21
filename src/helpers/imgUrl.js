import SystemInfo from "../util/SystemInfo"

export default (path) => {
    return `${SystemInfo.api}${path}`;
}