import { Package } from './package.types';

export interface UserRegister {
  name: string;
  last_name: string;
  password: string;
  confirmpassword?: string;
  email: string;
}
export interface Payload {
  name: string;
  id: string;
  email: string;
  is_admin: boolean;
  is_deleted: boolean;
  profile_img: string;
}
export interface UserUpdate {
  name?: string;
  last_name?: string;
  email?: string;
  profile_img?: string;
}
export interface User {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  is_admin: boolean;
  is_able_to_deliver: boolean;
  is_disabled: boolean;
  urlphoto: string;
  is_deleted: boolean;
  resetToken?: string;
  pendingPackages: Package[];
  currentPackage: Package | null;
  historyPackages: Package[];
  token: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserProfileData {
  _id: string;
  email: string;
  password?: string;
  name: string;
  last_name: string;
  profile_img: string;
  is_deleted: boolean;
  is_admin: boolean;
  deliveryManInfo: string;
}
