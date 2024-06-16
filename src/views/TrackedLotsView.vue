<template>
  <div class="tracked-lots-view">
     <div class="buttons-container">
      <router-link v-if="connectedUser" :to="{ name: 'Profile', params: { id: connectedUser.id } }" class="back-button animated">
        Retour au profil
      </router-link>
     </div>
    <div class="header-container">
      <h1>Suivi de vos lots mis aux enchères</h1>
    </div>
    <div class="seller-lots">
      <LotListSeller :lots="lots" v-if="lots.length" @lotUpdated="loadSellerLots"/>
      <NoSellerLots v-else/>
    </div>
  </div>
</template>

<script>
import LotService from "@/services/LotService";
import UserService from "@/services/UserService";
import LotListSeller from "@/components/LotListSeller.vue";
import NoSellerLots from "@/components/NoSellerLots.vue";

export default {
  name: "TrackedLotsView",
  components: {
    LotListSeller,
    NoSellerLots
  },
  data() {
    return {
      lots: [],
      connectedUser : null
    };
  },
  async created() {
    await this.loadSellerLots();
    await this.loadConnectedUser();
  },
  methods: {
    async loadSellerLots() {
      try {
        const userId = UserService.getLoggedInUserId();
        if (userId) {
          this.lots = await LotService.getLotsBySellerId(userId);
        } else {
          console.error("No connected user found.");
        }
      } catch (error) {
        console.error("Error fetching seller's lots:", error);
      }
    },
    async loadConnectedUser() {
      try {
        const userId = UserService.getLoggedInUserId();
        if (userId) {
          this.connectedUser = await UserService.getUserById(userId);
        } else {
          console.error("Aucun utilisateur connecté trouvé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails de l'utilisateur: " + error);
      }
    }
  }
};
</script>

<style scoped>

.tracked-lots-view {
  min-height: calc(100vh - 80px);
  width: 100%;
  background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-right: 10%;
}

h1 {
  font-size: 2.5rem;
  color: floralwhite;
  margin-top: 0;
  margin-bottom: 30px;
}

.seller-lots {
  width: 98%;
}

.buttons-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 50px;
}

.back-button {
  padding: 10px 20px;
  background-color: white;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  opacity: 0;
  animation: fadeInAnimation 1.5s ease-out forwards;
}

.back-button:hover {
  background-color: #6dc571;
  color: white;
}

/* Animation d'apparition */
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
