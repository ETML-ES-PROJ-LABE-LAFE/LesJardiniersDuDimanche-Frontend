import axios from "axios";

class LotService {
    baseURL = "http://localhost:8080/lots";

    /**
     * @returns Les lots disponibles sous forme JSON
     */
    async get() {
        try {
            console.log("GET")
            // Envoi de la requête pour récupérer tous les lots
            const response = await axios.get(this.baseURL);
            console.log("lot recu " + response.data);
            console.log(response.status);
            // Renvoi des données en format JSON
            return response.data;
        } catch (error) {
            throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`);
        }
    }

    /**
     * @param lotId L'identifiant du lot
     * @returns Le lot correspondant à l'identifiant sous forme JSON
     */
    async getById(lotId) {
        try {
            const response = await axios.get(`${this.baseURL}/${lotId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des détails du lot: ${error.message}`);
        }
    }

    /**
     * @param categoryId L'identifiant de la catégorie
     * @returns Les lots appartenant à une catégorie spécifique
     */
    async getLotsByCategory(categoryId) {
        try {
            const response = await axios.get(`${this.baseURL}/category/${categoryId}`);
            console.log("Lots par catégorie reçus: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par catégorie: ${error.message}`);
        }
    }

    /**
     * @param subCategoryId L'identifiant de la sous-catégorie
     * @returns Les lots appartenant à une sous-catégorie spécifique
     */
    async getLotsBySubCategory(subCategoryId) {
        try {
            const response = await axios.get(`${this.baseURL}/subcategory/${subCategoryId}`);
            console.log("Lots par sous-catégorie reçus: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par sous-catégorie: ${error.message}`);
        }
    }

    /**
     * @param lotId L'identifiant du lot
     * @param bidAmount Le montant de l'enchère à placer
     * @returns La réponse de l'API après avoir placé l'enchère
     * @throws Erreur en cas d'échec de la requête
     */
    async placeBid(lotId, bidAmount) {
        try {
            const response = await axios.put(`${this.baseURL}/${lotId}/bid`, bidAmount, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error.response ? error.response.data : error.message}`);
        }
    }
}

export default new LotService();
