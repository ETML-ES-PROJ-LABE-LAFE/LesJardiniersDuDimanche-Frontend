import axios from "axios";

class CategoryService {
    baseURL = "http://localhost:8080/categories";

    /**
     * @returns Une liste de toutes les catégories sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
    async getAllCategories() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des catégories: ${error.message}`);
        }
    }

    /**
     * @param parentId L'identifiant de la catégorie parent
     * @returns Les sous-catégories correspondant à la catégorie parent sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
    async getSubCategoriesByParentId(parentId) {
        try {
            const response = await axios.get(`${this.baseURL}/subcategories/${parentId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des sous-catégories: ${error.message}`);
        }
    }
}

export default new CategoryService();
