import { padLeft } from "./padLeft";

export function formatDate(data: string | Date | null) {
    const dataObj = data ? new Date(data) : null;
    const dataString = dataObj
        ? `${dataObj.getFullYear()}-${padLeft(dataObj.getMonth() + 1, 2)}-${padLeft(dataObj.getDate(), 2)}`
        : "";
    return dataString;
}
