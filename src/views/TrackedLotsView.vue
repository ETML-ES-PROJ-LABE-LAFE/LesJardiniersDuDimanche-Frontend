<template>
  <div class="tracked-lots-view">
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
      lots: []
    };
  },
  async created() {
    await this.loadSellerLots();
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
  padding-top: 5px;
  margin-bottom: 0px;
}

.seller-lots {
  padding: 20px;
  width: 95%;
}
</style>
