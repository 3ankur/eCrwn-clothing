import {UPDATE_COLLECTIONS} from "./shop.types";

export const UpdateCollections = (collection)=>{
    return {
        type:UPDATE_COLLECTIONS,
        payload:collection
    }
}
