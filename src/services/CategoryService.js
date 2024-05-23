//Dossier Services / Fichier CategoryService.js

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
