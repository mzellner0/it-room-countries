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
    <button type="submit">Search</button>
  </form>
</template>

<style scoped>
  form {
    width: 100%;
  }
  input {
    padding: 10px;
    width: calc(70% - 70px);
    margin-left: 15%;
    border: 1px solid grey;
    border-right: none;
    outline: none;
  }
  button {
    width: 70px;
    padding: 10px;
    border: 1px solid grey;
    border-left: none;
  }
</style>