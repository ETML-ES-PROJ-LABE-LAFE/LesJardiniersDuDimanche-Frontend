import axios from "axios";

class UserService {
    baseURL = "http://localhost:8080/users";

    async getAllUsers() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
        }
    }

    async getUserById(userId) {
        try {
            const response = await axios.get(`${this.baseURL}/${userId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des détails de l'utilisateur: ${error.message}`);
        }
    }

    async updateUser(userId, userData) {
        try {
            console.log(`Mise à jour de l'utilisateur ${userId} avec les données:`, userData);
            const response = await axios.put(`${this.baseURL}/${userId}`, userData);
            console.log(`Réponse de mise à jour pour l'utilisateur ${userId}:`, response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour de l'utilisateur: ${error.message}`);
        }
    }

    async updateIsConnected(userId, isConnected) {
        try {
            const response = await axios.put(`${this.baseURL}/${userId}/isConnected`, { isConnected: isConnected }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(`Réponse de mise à jour pour isConnected de l'utilisateur ${userId}:`, response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour de isConnected: ${error.message}`);
        }
    }

    async loginUser(userId) {
        try {
            const updatedUser = await this.updateIsConnected(userId, true);
            console.log(`Utilisateur ${userId} est maintenant connecté:`, updatedUser.isConnected);
            return updatedUser;
        } catch (error) {
            throw new Error(`Erreur lors de la connexion de l'utilisateur: ${error.message}`);
        }
    }

    async logoutUser(userId) {
        try {
            const updatedUser = await this.updateIsConnected(userId, false);
            console.log(`Utilisateur ${userId} est maintenant déconnecté:`, updatedUser.isConnected);
            return updatedUser;
        } catch (error) {
            throw new Error(`Erreur lors de la déconnexion de l'utilisateur: ${error.message}`);
        }
    }
}

export default new UserService();
