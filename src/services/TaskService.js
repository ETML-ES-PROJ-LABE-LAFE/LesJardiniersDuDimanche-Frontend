import axios from 'axios'

//const TODOS_BASE_URL = "https://jsonplaceholder.typicode.com/todos"

class TaskService {

    /**
     * 
     * @returns Les cinq premières tâches de la liste sous forme JSON
     */
    async get() {
      try {
        
        // Envoi de la requête
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5") 

        console.log(response.data)
        console.log(response.status)

        // Renvoi des données en format JSON
        return response.data

      } catch (error) {
          throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`)
      }
    }
}

export default new TaskService()