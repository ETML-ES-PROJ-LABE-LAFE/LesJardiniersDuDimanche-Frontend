# AuctionApp Front-End

## Description
Ce projet est l'interface utilisateur de l'application Web d'enchères, construite avec Vue.js. Il interagit avec l'API RESTful fournie par le back-end en Java Spring Boot pour gérer les enchères.

L'application inclut les fonctionnalités suivantes :
- Affichage des catégories et des lots disponibles
- Création, mise à jour et suppression des catégories et des lots
- Gestion des erreurs et affichage des messages d'erreur appropriés
- Connexion utilisateur et gestion du profil

## Structure des Fichiers
Le projet est composé des fichiers suivants :

### Composants
- **BidAuction.vue** : Composant pour gérer les enchères.
- **FilterCategorie.vue** : Filtrage des catégories.
- **FilterSubCategorie.vue** : Filtrage des sous-catégories.
- **LotDetails.vue** : Affichage des détails d'un lot.
- **LotItem.vue** : Composant pour afficher un lot individuel.
- **LotList.vue** : Affichage de la liste des lots.
- **SearchBar.vue** : Barre de recherche.
- **SearchBarNoResults.vue** : Affichage en cas de résultats de recherche vides.

### Services
- **CategoryService.js** : Contient les fonctions pour interagir avec les catégories via l'API.
- **LotService.js** : Contient les fonctions pour interagir avec les lots via l'API.
- **UserService.js** : Contient les fonctions pour la gestion des utilisateurs.

### Vues
- **HomeView.vue** : Page d'accueil affichant les informations générales.
- **LoginView.vue** : Page de connexion utilisateur.
- **LotDetailsView.vue** : Page affichant les détails d'un lot spécifique.
- **LotsView.vue** : Page affichant la liste des lots.
- **ProfileView.vue** : Page de profil utilisateur.

### Autres Fichiers Importants
- **App.vue** : Composant principal de l'application.
- **main.js** : Point d'entrée de l'application.
- **router/index.js** : Configuration des routes de l'application.

## Comment Exécuter
1. Clonez le dépôt.
   ```sh
   git clone https://github.com/ETML-ES-PROJ-LABE-LAFE/LesJardiniersDuDimanche-Frontend.git
2. Naviguez jusqu'au répertoire du projet
    ```sh
   cd [nom_du_répertoire choisi]
3. Installez les dépendances nécessaires
     ```sh
   npm install
4. Démarrez l'application
    ```sh
   npm run serve
5. Ouvrez votre navigateur et accédez à
    ```sh
    http://localhost:8081