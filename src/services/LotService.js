import axios from "axios";

class LotService {
    baseURL = "http://localhost:8080/lots";

    async get() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`);
        }
    }

    async getByArticleNumber(articleNumber) {
        try {
            const response = await axios.get(`${this.baseURL}/${articleNumber}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des détails du lot: ${error.message}`);
        }
    }

    async getLotsByCategory(categoryId) {
        try {
            const response = await axios.get(`${this.baseURL}/category/${categoryId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par catégorie: ${error.message}`);
        }
    }

    async getLotsBySubCategory(subCategoryId) {
        try {
            const response = await axios.get(`${this.baseURL}/subcategory/${subCategoryId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par sous-catégorie: ${error.message}`);
        }
    }

    async placeBid(articleNumber, bidAmount) {
        try {
            const response = await axios.put(`${this.baseURL}/${articleNumber}/bid`, bidAmount, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error.response ? error.response.data : error.message}`);
        }
    }

    async createLot(lotData) {
        try {
            const response = await axios.post(this.baseURL, lotData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la création du lot: ${error.message}`);
        }
    }

    async getLotsBySellerId(userId) {
        try {
            const response = await axios.get(`${this.baseURL}/seller/${userId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des lots par vendeur: ${error.message}`);
        }
    }
}

export default new LotService();
