import { IResource } from "@/interfaces/resource.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResourceState {
  resources: IResource[];
  resourceType: "digital" | "physical";
  searchQuery: string;
}

export const SLICE_NAME = "resource";

const initialState: ResourceState = {
  resources: [],
  resourceType: "digital",
  searchQuery: "",
};

const resourceSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setResourceType: (state, action: PayloadAction<"digital" | "physical">) => {
      state.resourceType = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setResources: (state, action: PayloadAction<IResource[]>) => {
      state.resources = action.payload;
    },
  },
});

export const { setResourceType, setSearchQuery, setResources } =
  resourceSlice.actions;

export default resourceSlice.reducer;
