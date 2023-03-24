<script setup>
  import { useCountriesStore } from "@/stores/countries"
  import { ref } from "vue";

  const countriesState = useCountriesStore();

  const langSearchValue = ref('');
  
  const handleSubmit = () => {
    countriesState.getOneCountry(langSearchValue.value);
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      id="search"
      placeholder="Rechercher par langue"
      v-model="langSearchValue"
    >
    <button type="submit">
      <img src="@/assets/search-solid.svg" alt="search">
    </button>
  </form>
</template>

<style scoped>
  form {
    width: 100%;
  }
  input {
    padding: 10px;
    width: calc(60% - 40px);
    margin-left: 20%;
    border: 1px solid grey;
    border-right: none;
    outline: none;
  }
  button {
    width: 40px;
    padding: 10px;
    border: 1px solid grey;
    border-left: none;
    background: white;
  }
  img {
    width: 10px;
    height: 10px;
  }
  @media (max-width: 500px) {
    input {
      width: calc(80% - 40px);
      margin-left: 10%;
    }
  }
</style>