import axios from "axios";

<<<<<<< HEAD
const apiURL: string = process.env.API_URL || "http://localhost:3001/api";
=======

const apiURL: string = process.env.API_URL || "http://localhost:3001/api";


>>>>>>> 8ee6b891f4a7e57b5331562997433fb7ad310c97
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
