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

    async loginUser(userId) {
        try {
            const user = await this.getUserById(userId);
            user.isConnected = true;
            const response = await axios.put(`${this.baseURL}/${userId}`, user);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la connexion de l'utilisateur: ${error.message}`);
        }
    }

    async logoutUser(userId) {
        try {
            const user = await this.getUserById(userId);
            user.isConnected = false;
            const response = await axios.put(`${this.baseURL}/${userId}`, user);
            return response.data;
        } catch (error) {
            throw new Error(`Erreur lors de la déconnexion de l'utilisateur: ${error.message}`);
        }
    }
}

export default new UserService();
