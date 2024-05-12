//Dossier services Fichier LotService.js

import axios from "axios";

class LotService {

    /**
     * @returns Les lots disponibles sous forme JSON
     */
    async get() {
        try {
            console.log("GET")
            // Envoi de la requête pour récupérer tous les lots
            const response = await axios.get("http://localhost:8080/lots")
            console.log("lot recu " + response.data)
            console.log(response.status)
            // Renvoi des données en format JSON
            return response.data
        } catch (error) {
            throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`)
        }
    }

    /**
     * @param lotId L'identifiant du lot
     * @returns Le lot correspondant à l'identifiant sous forme JSON
     */
    async getById(lotId) {
        try {
            const response = await axios.get(`http://localhost:8080/lots/${lotId}`)
            return response.data
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des détails du lot: ${error.message}`)
        }
    }

    /**
     * @param categoryId L'identifiant de la catégorie
     * @returns Les lots appartenant à une catégorie spécifique
     */
    async getLotsByCategory(categoryId) {
        try {
            const response = await axios.get(`http://localhost:8080/lots/category/${categoryId}`);
            console.log("Lots par catégorie reçus: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par catégorie: ${error.message}`);
        }
    }
    async getLotsBySubCategory(subCategoryId) {
        try {
            const response = await axios.get(`http://localhost:8080/lots/subcategory/${subCategoryId}`);
            console.log("Lots par sous-catégorie reçus: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par sous-catégorie: ${error.message}`);
        }
    }

}

export default new LotService()
