<template>
  <div class="seller-lots">
    <LotListSeller :lots="lots" v-if="lots.length" @lotUpdated="loadSellerLots" />
    <NoSellerLots v-if="!lots.length" />
  </div>
</template>

<script>
import LotService from "@/services/LotService";
import UserService from "@/services/UserService";
import LotListSeller from "@/components/LotListSeller.vue";
import NoSellerLots from "@/components/NoSellerLots.vue";

export default {
  name: "SellerLots",
  components: {
    NoSellerLots,
    LotListSeller,
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
.seller-lots {
  padding: 20px;
}

h2 {
  margin-bottom: 15px;
}

p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
</style>
