import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import listProduct from "../../assets/database/groups.json";

const initialState = {
    result: 0,
    group: [],
    isLoading: true,
};

// --- Получение списка групп
export const getListGroup = createAsyncThunk("groups/getListGroup", async () => {
    const data = listProduct;
    // const { data } = await axios.get(`./`);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(1000);

    return data;
});

export const groupsSlice = createSlice({
    name: "groups",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // --- Получение списка товаров
        builder.addCase(getListGroup.pending, (state) => {
            state.result = 0;
            state.isLoading = true;
        });
        builder.addCase(getListGroup.fulfilled, (state, action) => {
            state.result = 1;
            state.group = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getListGroup.rejected, (state, action) => {
            state.result = 0;
            state.isLoading = false;
        });
    },
});

export default groupsSlice.reducer;
