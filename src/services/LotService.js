//Dossier services Fichier LotService.js

import axios from "axios"

class LotService {

    /**
     *
     * @returns Les cinq premières tâches de la liste sous forme JSON
     */
    async get() {
        try {
            console.log("GET")
            // Envoi de la requête
            const response = await axios.get("http://localhost:8080/lots")

            console.log("lot recu " + response.data)
            console.log(response.status)

            // Renvoi des données en format JSON
            return response.data

        } catch (error) {
            throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`)
        }

    }
    async getById(lotId) {
        try {
            const response = await axios.get(`http://localhost:8080/lots/${lotId}`)
            return response.data
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des détails du lot: ${error.message}`)
        }
    }


}
export default new LotService()