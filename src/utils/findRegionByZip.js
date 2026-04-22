import { regionsData } from "../data/regionsData";

export const findRegionByZip = (zip) => {
    if (!zip) return null;

    const cleanZip = String(zip).trim();

    for (const region of regionsData) {
        if (region.zipCodes.includes(cleanZip)) {
            return region;
        }
    }

    return null;
};
