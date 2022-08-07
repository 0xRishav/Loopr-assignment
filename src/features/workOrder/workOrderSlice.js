import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addWorkOrderApi, fetchWorkOrderDataApi } from "./WorkOrderApi";

const initialState = {
  loading: false,
  error: "",
  workOrderData: [],
};

const fetchWorkOrderData = createAsyncThunk(
  "workOrder/getWorkOrder",
  async () => {
    const res = await fetchWorkOrderDataApi();
    return res;
  }
);

const addWorkOrder = createAsyncThunk("workOrder/addWorkOrder", async () => {
  const res = await addWorkOrderApi();
  return res;
});

const workOrderSlice = createSlice({
  name: "workOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorkOrderData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWorkOrderData.fulfilled, (state, { payload }) => {
      console.log("usdhfusdf", payload);
      state.loading = false;
      state.workOrderData = payload;
    });
    builder.addCase(fetchWorkOrderData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(addWorkOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addWorkOrder.fulfilled, (state, { payload }) => {
      console.log("usdhfusdf", payload);
      state.loading = false;
      state.workOrderData = payload;
    });
    builder.addCase(addWorkOrder.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

const workOrderReducer = workOrderSlice.reducer;

export { workOrderReducer, fetchWorkOrderData, addWorkOrder };
