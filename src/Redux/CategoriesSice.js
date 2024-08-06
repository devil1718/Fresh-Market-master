import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = { categories: [], loading: true, isErorr: null, ProductCtegory:[]  }
export let getCatecories = createAsyncThunk("categories/getCatecories",
    async () => {
        let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
        return data.data;
    }
)
export let getSpecificCategory = createAsyncThunk("categories/getSpecificCategory",
    async (category_id) => {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${category_id}`)
        return data.data;
    }
)

let categoriesSlice = createSlice({
    name: "categories",// used in action type
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(getCatecories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
        })
        builder.addCase(getCatecories.pending, (state, action) => {
            state.categories = action.payload;
            state.loading = true;
        })
        builder.addCase(getCatecories.rejected, (state, action) => {
            state.loading = false;
            state.isErorr = action.error.message;
        });
        builder.addCase(getSpecificCategory.fulfilled, (state, action) => {
            state.ProductCtegory = action.payload;
            
        });
        
    }, // this one for any method created out side this slice
   
})


export let categoriesReducer = categoriesSlice.reducer;
