import { configureStore } from "@reduxjs/toolkit";

import groupsSlice from "./slices/groupsSlice";
import filterSlice from "./slices/filterSlice";

export interface GetGroupsResponse {
    result: 1 | 0,
    group?: Group[],
    isLoading: true | false,
}
  
export interface Group {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: User[]
}
  
interface User {
    "first_name": string,
    "last_name": string
}

export const store = configureStore({
    reducer: {
        groups: groupsSlice,
        filterGroup: filterSlice,
    },
});

export type RootState = ReturnType <typeof store.getState>;
