<template>
  <header class="home">
    <h1>Venez claquer votre tune !</h1>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    }
}
</script>

<style>

.home {
  height: 300px;
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin-top: 20px;
  color: white;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.home h1 {
  transition: transform 0.3s ease;
}

.home h1:hover {
  transform: scale(1.05);
}

</style>