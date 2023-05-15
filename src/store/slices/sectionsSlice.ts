import { createSlice,} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


// Define a type for the slice state
export interface Section {
  name: string;
  status: boolean;
  scrollFn: (elementRef: any) => void;
  argument: React.MutableRefObject<HTMLDivElement | null>;
}

interface SectionState {
  sections: Section[];
}

// Define the initial state using that type
const initialState: SectionState = {
  sections: [],
};




export const sectionSlice = createSlice({
  name: "sections",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    addSections: (state, action: PayloadAction<Section[]>) => {
      state.sections=action.payload as any
    }
    
  },
 
});

export const { addSections} = sectionSlice.actions;



export default sectionSlice.reducer;
