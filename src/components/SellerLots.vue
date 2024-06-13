<template>
  <div class="seller-lots">
    <LotList :lots="lots" v-if="lots.length" />
    <p v-else>You haven't auctioned any lots yet.</p>
  </div>
</template>

<script>
import LotList from "@/components/LotList.vue";
import LotService from "@/services/LotService";
import UserService from "@/services/UserService";

export default {
  name: "SellerLots",
  components: {
    LotList
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
