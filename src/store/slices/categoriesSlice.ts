import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {SupabaseClient} from '@supabase/supabase-js';
import {RootState} from './store';

// Define the Category type based on your category object
export interface Category {
  id: number;
  name: string;
  allowance: number;
  color: string | null;
  created_at: string;
  created_by: string;
  current_budget: number;
  group_allowance: number;
  group_current_budget: number;
  group_id: number;
  group_name: string;
  icon: string | null;
  type: 'expense' | 'income';
}

interface CategoriesState {
  categories: Category[];
  selectedCategory: Category | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
  loading: false,
  error: null,
};

// Async thunk to fetch categories from Supabase
export const fetchCategories = createAsyncThunk<
  Category[],
  void,
  {rejectValue: string}
>('categories/fetchCategories', async (_, {rejectWithValue}) => {
  // try {
  //   const supabase = new SupabaseClient(
  //     'your-supabase-url',
  //     'your-supabase-key',
  //   );
  //   const {data, error} = await supabase.from('categories').select('*');
  //   if (error) {
  //     throw new Error(error.message);
  //   }
  //   return data;
  // } catch (error: any) {
  //   return rejectWithValue(error.message);
  // }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: state => {
      state.selectedCategory = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.categories = action.payload;
        },
      )
      .addCase(
        fetchCategories.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to load categories';
        },
      );
  },
});

// Export the actions
export const {setSelectedCategory, clearSelectedCategory} =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
