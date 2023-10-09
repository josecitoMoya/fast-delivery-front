import axios from "axios";

const apiURL: string = process.env.NEXT_PUBLIC_API_URL || "";

class PackagesService {
  async getAllPackages() {
    try {
      const response = await axios.get(`${apiURL}/packages/all`, {
        withCredentials: true,
      });
      return response.data.message;
    } catch (error) {
      console.error("Error al obtener los paquetes:", error);
      throw error;
    }
  }
}

export default new PackagesService();
