<template>
  <div class="wip-container">
    <div class="message">
      <h1>Work in Progress</h1>
      <p>Cette section est en cours de développement. Revenez bientôt pour des mises à jour!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackedLotsView'
}
</script>

<style scoped>
.wip-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
  color: #fff;
  font-family: 'Nunito', sans-serif;
}

.message {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.message h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.message p {
  font-size: 18px;
}
</style>
