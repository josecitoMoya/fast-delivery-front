import axios from "axios";
import Cookies from "js-cookie";
import { UserLogin, UserRegister } from "@/types/user.types";

const apiURL = "http://localhost:3001/api";

export default class User_Service {
  async register(userData: UserRegister) {
    try {
      const { email, password, last_name, name } = userData;
      const user = await axios.post(
        `${apiURL}/users/signup`,
        {
          email,
          password,
          last_name,
          name,
        },
        {
          withCredentials: true,
        }
      );
      return user.data;
    } catch (error) {
      console.log("register error : ", error);
    }
  }

  async loginUser(userData: UserLogin) {
    try {
      const { password, email } = userData;
      const user = await axios.post(
        `${apiURL}/users/login`,
        {
          password,
          email,
        },
        { withCredentials: true }
      );

      return user.data;
    } catch (error) {
      console.log("login error : ", error);
    }
  }

  async logoutUser() {
    try {
      Cookies.remove("token");
      await axios.post(`${apiURL}/users/logout`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log("logout error", error);
    }
  }

  async me(token: string) {
    const {
      data: { data },
    } = await axios.get(`${apiURL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
