<template>
  <header class="home">
    <h1 class="welcome-message">Venez claquer vos thunes !</h1>
  </header>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {};
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .home {
    min-height: calc(100vh - 80px);
    width: 100%;
    background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 250%;
    color: white;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }

  .welcome-message {
    animation: move 3s infinite alternate;
  }

  @keyframes move {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
