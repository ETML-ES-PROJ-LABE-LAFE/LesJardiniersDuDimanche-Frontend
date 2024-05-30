import axios from "axios";

class UserService {
    baseURL = "http://localhost:8080/users";

    /**
     * @returns Une liste de tous les utilisateurs sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
    async getAllUsers() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
        }
    }

    /**
     * @param userId L'identifiant de l'utilisateur
     * @returns Les détails de l'utilisateur correspondant à l'identifiant sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
    async getUserById(userId) {
        try {
            const response = await axios.get(`${this.baseURL}/${userId}`);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des détails de l'utilisateur: ${error.message}`);
        }
    }

    /**
     * @param userId L'identifiant de l'utilisateur
     * @param userData Les nouvelles données de l'utilisateur
     * @returns Les données mises à jour de l'utilisateur sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
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

    /**
     * @param userId L'identifiant de l'utilisateur
     * @param isConnected Statut de connexion de l'utilisateur
     * @returns Les données mises à jour de l'utilisateur sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
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

    /**
     * @param userId L'identifiant de l'utilisateur
     * @returns Les données mises à jour de l'utilisateur après connexion sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
    async loginUser(userId) {
        try {
            const updatedUser = await this.updateIsConnected(userId, true);
            console.log(`Utilisateur ${userId} est maintenant connecté:`, updatedUser.connected);
            localStorage.setItem('userId', userId); // Stocker l'ID de l'utilisateur dans le local storage
            return updatedUser;
        } catch (error) {
            throw new Error(`Erreur lors de la connexion de l'utilisateur: ${error.message}`);
        }
    }

    /**
     * @param userId L'identifiant de l'utilisateur
     * @returns Les données mises à jour de l'utilisateur après déconnexion sous forme JSON
     * @throws Erreur en cas d'échec de la requête
     */
    async logoutUser(userId) {
        try {
            const updatedUser = await this.updateIsConnected(userId, false);
            console.log(`Utilisateur ${userId} est maintenant déconnecté:`, updatedUser.connected);
            localStorage.removeItem('userId'); // Supprimer l'ID de l'utilisateur du stockage
            return updatedUser;
        } catch (error) {
            throw new Error(`Erreur lors de la déconnexion de l'utilisateur: ${error.message}`);
        }
    }

    /**
     * @returns L'ID de l'utilisateur actuellement connecté depuis le local storage
     */
    getLoggedInUserId() {
        return localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur depuis le local storage
        // Solution de contournement que l'on a mis en place pour quand meme nous permettre d'avoir un systeme de User
        // Car comme discuté avec Mme.Bianchi nous n'avons pas vu la réelle facon de faire et nous n'allons pas avoir le temps de le faire
    }
}

export default new UserService();


