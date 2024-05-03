<template>
  <div>
    <LotList :lots="lots" />
  </div>
</template>

<script>

import LotList from "@/components/LotList.vue";

export default {
  name: 'LotsView',
  components: {
    LotList
  },
}
</script>