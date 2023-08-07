import {
  createAction,
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { UserLogin, UserRegister, User } from "@/types/user";
import { AuthService } from "@/services/auth-service";
