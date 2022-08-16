import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesApi from "../api/catelogyApi";

export const fetchApiCatelogy = createAsyncThunk(
  "api/fetchApiCatelogy",
  async () => {
    const categoryList = await categoriesApi.getAll();
    return categoryList;
  }
);

const initialState = {
  categoryList: [],
  loading: false,
};
const apiCatelogySlice = createSlice({
  name: "apiCatelogy",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchApiCatelogy.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchApiCatelogy.fulfilled]: (state, action) => {
        state.categoryList = action.payload;
        state.loading = false;
    },
    [fetchApiCatelogy.rejected]: (state, action) => {
        state.loading = false;  
    }
  }
});
const { reducer: apiCategoryReducer } = apiCatelogySlice;
export default apiCategoryReducer;
