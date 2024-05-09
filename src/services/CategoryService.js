import axios from "axios";

class CategoryService {
    baseURL = "http://localhost:8080/categories";

    async getAllCategories() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des catégories: ${error.message}`);
        }
    }
}

export default new CategoryService();
