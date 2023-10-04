import axios from 'axios';
import Cookies from 'js-cookie';
import { UserLogin, UserRegister } from '@/types/user.types';

const apiURL = process.env.API_URL || 'http://localhost:3001/api';

export default class User_Service {
  async register(userData: UserRegister) {
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
  }

  async loginUser(userData: UserLogin) {
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
  }

  async logoutUser() {
    try {
      Cookies.remove('token');
      await axios.post(`${apiURL}/users/logout`, {
        withCredentials: true,
      });
    } catch (error: any) {
      console.log('register error : ', error.response.data);
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
