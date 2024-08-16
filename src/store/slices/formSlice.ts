import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface FormState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that interface
const initialState: FormState = {
  data: null,
  loading: false,
  error: null,
};

// Define an async thunk for submitting the form
export const submitForm = createAsyncThunk<
  any,
  Record<string, any>,
  {rejectValue: string}
>('form/submitForm', async (formData, {rejectWithValue}) => {
  console.log('====================================');
  console.log(formData, 'slice');
  console.log('====================================');
});

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetForm: state => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitForm.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(
        submitForm.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'An error occurred';
        },
      );
  },
});

export const {resetForm} = formSlice.actions;

export default formSlice.reducer;
