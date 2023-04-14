import { createSlice, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { IUser } from "../../models/IUser";
import { AuthService } from "../../services/AuthService";
import { AuthResponse } from "../../models/response/AuthResponse";
import axios from "axios";
import { API_URL } from "../../http";

// Define a type for the slice state
interface UserState {
  value: number;
  user: IUser | null;
  isAuth: boolean;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  value: 0,
  user: null,
  isAuth: false,
  loading: "idle",
  error: null,
};

export const login = createAsyncThunk<
  AuthResponse | undefined,
  { email: string; password: string },
  { rejectValue: string }
>("users/login", async (auth, { rejectWithValue }) => {
  const response = await AuthService.login(auth.email, auth.password);
  console.log("login resp:", response);
  if (response.status !== 200) {
    return rejectWithValue("Server Error!");
  }

  localStorage.setItem("token", response.data.accessToken);
  return response.data;
});

export const registration = createAsyncThunk<
  AuthResponse | undefined,
  { name: string; surname: string; email: string; password: string },
  { rejectValue: string }
>("users/registration", async (auth, { rejectWithValue }) => {
  const response = await AuthService.registration(
    auth.email,
    auth.password,
    auth.name,
    auth.surname
  );
  if (response.status !== 200) {
    return rejectWithValue("Server Error!");
  }

  localStorage.setItem("token", response.data.accessToken);
  return response.data;
});

export const logout = createAsyncThunk<{ rejectValue: string }>(
  "users/logaut",
  async (_, { rejectWithValue }) => {
    const response = await AuthService.logout();
    if (response.status !== 200) {
      return rejectWithValue("Server Error!");
    }

    localStorage.removeItem("token");
    return response.data;
  }
);

export const checkAuth = createAsyncThunk<
  AuthResponse | undefined
  
>("users/checkAuth", async (_, { rejectWithValue }) => {
  const response = await axios.get<AuthResponse>(
    `${API_URL}/refresh`,
    { withCredentials: true }
  );
  console.log('status', response)
  if (response.status !== 200) {
    return rejectWithValue("Server Error!");
  }

  localStorage.setItem("token", response.data?.accessToken);
  return response.data;
});

export const userSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = "succeeded";

      if (action.payload) {
        state.user = action.payload.user;
        state.isAuth = true;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

    builder.addCase(registration.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.loading = "succeeded";

      if (action.payload) {
        state.user = action.payload.user;
        state.isAuth = true;
      }
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = "succeeded";

      if (action.payload) {
        state.user = null;
        state.isAuth = false;
      }
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.loading = "succeeded";

      if (action.payload) {
        state.user = action.payload.user;
        state.isAuth = true;
      }
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.loading = "failed";
      console.log(state.error)
      state.error = action.payload as string;
      
    });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.users.value;

export default userSlice.reducer;
