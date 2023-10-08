import axios from "axios";

const apiURL: string = process.env.API_URL || "http://localhost:3001/api";
class DeliveryManService {

  async getDeliveryManInfo() {
    try {
   const deliveryManInfo =  await axios.get(
        `${apiURL}/delivery-man/one`,
        {
          withCredentials: true,
        }
      );
      return deliveryManInfo;
    } catch (error) {
      console.error("Error al obtener la informacion del deliveryMan:", error);
      throw error;
    }
  }


  async getTakedPackages() {
    try {
      const packages = await axios.get(
        `${apiURL}/delivery-man/taked-packages`,
        {
          withCredentials: true,
        }
      );
      return packages;
    } catch (error) {
      console.error("Error al obtener los paquetes:", error);
      throw error;
    }
  }
  async getTakedPackagesDelivered() {
    try {
      const packages = await axios.get(
        `${apiURL}/delivery-man/taked-packages`,
        {
          withCredentials: true,
        }
      );
      return packages;
    } catch (error) {
      console.error("Error al obtener los paquetes:", error);
      throw error;
    }
  }

  async TakePackage(packagesId: string[]) {
    const packages = await axios.post(
      `${apiURL}/delivery-man/take-packages`,
      packagesId,
      {
        withCredentials: true,
      }
    );
    return packages;
  }

  async UntakePackage(packageId: string) {
    const pack = await axios.delete(
      `${apiURL}/delivery-man/untake-package/${packageId}`,
      {
        withCredentials: true,
      }
    );
    return pack;
  }

  async MarkDeliveredPackage(packageId: string) {
    const pack = await axios.post(
      `${apiURL}/delivery-man/mark-deli`,
      { packageId },
      {
        withCredentials: true,
      }
    );
    return pack;
  }
}

export default new DeliveryManService();
