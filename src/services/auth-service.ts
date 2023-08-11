// import axios from "axios";
// import { UserLogin, UserRegister } from "@/types/user";
// import { stat } from "fs";

// export class AuthService {
//   static apiURL = "http://localhost:3001/api/users/";

//   static async register(userData: UserRegister) {
//     const { email, password, confirmpassword } = userData;

//     const user = await axios.post(`${this.apiURL}/auth/register`, {
//       email,
//       password,
//       confirmpassword,
//     });
//     return user.data;
//   }

//   static async loginUser(userData: UserLogin) {
//     const { password, email } = userData;

//     const user = await axios.post(`${this.apiURL}/auth/login`, {
//       password,
//       email,
//     });

//     return user.data;
//   }

//   static async me(token: string) {
//     const {
//       data: { data },
//     } = await axios.get(`${this.apiURL}/auth/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   }
// }
