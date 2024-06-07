<template>
  <div class="bid animated">
    <div class="bid-input">
      <input
          type="number"
          v-model="bidAmount"
          placeholder="CHF"
          @input="updateBidAmount"
      />
    </div>
    <button @click="validateBid" class="bid-button">
      Valider l'enchère
    </button>
  </div>
</template>

<script>
export default {
  name: 'BidAuction',
  data() {
    return {
      bidAmount: ''
    };
  },
  methods: {
    updateBidAmount() {
      this.$emit('update-bid-amount', this.bidAmount);
    },
    validateBid() {
      this.$emit('validate-bid', this.bidAmount);
    }
  }
};
</script>

<style scoped>
  .bid {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 0;
    opacity: 0;
    animation: fadeInAnimation 1.5s ease-out forwards;
  }

  .bid-input input {
    width: 100%;
    padding: 14px 22px;
    margin: 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }

  .bid-input input:focus {
    border-color: #66afe9;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }

  .bid-button {
    background-color: #ffffff;
    border: none;
    color: black;
    padding: 14px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-weight: bold;
  }

  .bid-button:hover {
    background-color: #6dc571;
    transform: translateY(-2px);
  }

  .bid-button:active {
    background-color: #6dc571;
    transform: translateY(1px);
  }

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
