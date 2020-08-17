import { formatDate } from "./dateFormat";

describe("dateFormat tests", () => {
    test("Return empty string for null input", () => {
        expect(formatDate(null)).toEqual("");
    });

    test("Return empty string for empty input", () => {
        expect(formatDate("")).toEqual("");
    });

    test("Return valid date string for date obj", () => {
        const data = new Date(1999, 1, 1);
        expect(formatDate(data)).toEqual(`1999-02-01`);
    });

    test("Return valid date string for string date", () => {
        expect(formatDate("1995-12-17T03:24:00")).toEqual("1995-12-17");
    });
});
