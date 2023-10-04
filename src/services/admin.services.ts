import axios from "axios";
import { createPackageDto } from "./dto/admin.dto";

const apiURL = process.env.API_URL || "http://localhost:3001/api";

export default class Admin_Service {
  private static instance: Admin_Service | null = null;

  private constructor() {}

  static getInstance(): Admin_Service {
    if (!Admin_Service.instance) {
      Admin_Service.instance = new Admin_Service();
    }
    return Admin_Service.instance;
  }

  async addNewPackage(packageInfo: createPackageDto) {
    try {
      await axios.post(`${apiURL}/packages/create`, packageInfo, {
        withCredentials: true,
      });
      return alert("Package Added Succesfully");
    } catch (error: any) {
      console.log("addingPackage error : ", error.response.data);
    }
  }

  async deletePackage(packageId: string) {
    try {
      await axios.delete(`${apiURL}/packages/delete/${packageId}`, {
        withCredentials: true,
      });
      return console.log("Package Deleted Succesfully");
    } catch (error: any) {
      console.log("deletingPackage error : ", error.response.data);
    }
  }

  async getAllDeliverymans() {
    try {
      const registeredDeliverymans = await axios.get(
        `${apiURL}/delivery-man/all`,
        { withCredentials: true }
      );

      return registeredDeliverymans;
    } catch (error: any) {
      console.log("geting deliverymans error : ", error.response.data);
    }
  }
}
