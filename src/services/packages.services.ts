import axios from 'axios';

const apiURL = 'http://localhost:3001/api';

class PackagesService {
  async getAllPackages() {
    try {
      const response = await axios.get(`${apiURL}/packages/all`, {
        withCredentials: true,
      });
      return response.data.message;
    } catch (error) {
      console.error('Error al obtener los paquetes:', error);
      throw error;
    }
  }
}

export default new PackagesService();
