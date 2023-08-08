import axios from "axios";
import { setUser, setUsers, setIsLoading, setError } from "../slices/userSlice";

const fetchURL = "http://localhost:3001/api/users/";

axios.defaults.withCredentials = true;

export const fetchCreateUser = (data: object) => async (dispatch: any) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(`${fetchURL}signup`, data, {
      withCredentials: true,
    });

    dispatch(setUser(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.error("fetchCreateUser error", err);
    dispatch(setIsLoading(false));
    dispatch(setError(err));
  }
};

export const fetchLoginUser = (data: object) => async (dispatch: any) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(`${fetchURL}login`, data, {
      withCredentials: true,
    });

    dispatch(setUser(response.data));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.error("fetchLoginUser error", err);
    dispatch(setIsLoading(false));
    dispatch(setError(err));
  }
};

export const fetchLogOut = () => async (dispatch: any) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(`${fetchURL}logout`);
    dispatch(setIsLoading(false));
    dispatch(setUser([]));
  } catch (err) {
    console.error("fetchLogOut error", err);
    dispatch(setIsLoading(false));
    dispatch(setError(err));
  }
};
