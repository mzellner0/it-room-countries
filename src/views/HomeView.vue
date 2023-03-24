<script setup>
  import SearchBar from "../components/SearchBar.vue"
  import CountriesList from "../components/CountriesList.vue"
</script>

<template>
  <main>
    <h2>Ma super page de recherche</h2>
    <SearchBar />
    <CountriesList />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  h2 {
    margin: 20px 10px;
    margin-top: 40px;
    text-align: center;
  }
</style>
