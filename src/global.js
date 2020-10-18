import { format, getYear } from "date-fns";

export const WIDTH = 5000;
export const HEIGHT = 5000;

export const formattedDate = (start, end) => {

    const startDate = start ? start : Date.now();

    if (!end) {
        return format(startDate, "HH:mm:ss / dd.MM.yyy");
    }

    const endDate = Date.parse(end);

    if (format(startDate, "dd.MM.yyyy") == format(endDate, "dd.MM.yyyy")) {
        return format(startDate, "dd.MM.yyyy");
    }

    const startFormat =
        getYear(startDate) == getYear(endDate) ? "dd.MM" : "dd.MM.yyyy";
    const endFormat = "dd.MM.yyyy";

    return format(startDate, startFormat) + " – " + format(endDate, endFormat);
};
