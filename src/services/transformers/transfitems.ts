import { Product } from "../../@types";

export async function convertItemsToApp(
    inComingItems: Product[]
) {
    return inComingItems.reduce((acc, obj) => {
        return {
            ...acc,
            ...obj
        };
    }, {});

    /* return convertedItems; */
}