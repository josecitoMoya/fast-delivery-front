import axios from 'axios';
import { createPackageDto } from './dto/admin.dto';
import { Deliveryman } from '@/types/deliveryman.types';

const apiURL: string = process.env.NEXT_PUBLIC_API_URL || "";

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
      return alert('Package Added Succesfully');
    } catch (error) {
      console.log('addingPackage error : ', error);
    }
  }

  async deletePackage(packageId: string) {
    try {
      await axios.delete(`${apiURL}/packages/delete/${packageId}`, {
        withCredentials: true,
      });
      return console.log('Package Deleted Succesfully');
    } catch (error) {
      console.log('deletingPackage error : ', error);
    }
  }

  async getAllDeliverymans() {
    try {
      const registeredDeliverymans = await axios.get(
        `${apiURL}/delivery-man/all`,
        { withCredentials: true }
      );
      return registeredDeliverymans;
    } catch (error) {
      console.log('geting deliverymans error : ', error);
    }
  }

  async updateDeliveryman(deliverymanId: string, updatedInfo: Deliveryman) {
    try {
      console.log('vengo del service del front : ', deliverymanId, updatedInfo);

      await axios.put(
        `${apiURL}/delivery-man/update-status/${deliverymanId}`,
        updatedInfo,
        { withCredentials: true }
      );
    } catch (error) {
      console.log('updating deliveryman status error : ', error);
    }
  }

  async getDeliveryman(deliverymanId: string) {
    try {
      const response = await axios.get(
        `${apiURL}/delivery-man/${deliverymanId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.log('updating deliveryman status error : ', error);
    }
  }
}
