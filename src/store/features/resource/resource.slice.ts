import { ILiteracy, IResource } from "@/interfaces/resource.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResourceState {
  resources: IResource[];
  resourceType: "digital" | "physical";
  searchQuery: string;
  digitalLiteracyResources: ILiteracy[];
}

export const SLICE_NAME = "resource";

const initialState: ResourceState = {
  resources: [],
  resourceType: "digital",
  searchQuery: "",
  digitalLiteracyResources: [],
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
    setDigitalLiteracyResources: (
      state,
      action: PayloadAction<ILiteracy[]>
    ) => {
      state.digitalLiteracyResources = action.payload;
    },
  },
});

export const {
  setResourceType,
  setSearchQuery,
  setResources,
  setDigitalLiteracyResources,
} = resourceSlice.actions;

export default resourceSlice.reducer;
