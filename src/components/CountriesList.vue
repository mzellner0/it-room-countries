<script setup>
  import Country from "./Country.vue"
  import Loader from "../components/Loader.vue"
  import { useCountriesStore } from "@/stores/countries"

  const countriesState = useCountriesStore();
  countriesState.getAllCountries();
</script>

<template>
  <div v-if="countriesState.isLoading">
    <Loader class="loader" />
  </div>
  <div v-else-if="countriesState.filtersCountries.length" class="countries">
    <Country
      v-for="country in countriesState.filtersCountries"
      :key="country.name" :country="country"
    />
  </div>
  <button
    v-if="countriesState.loadedNb < countriesState.countries.length"
    @click="countriesState.loadMore()"
  >
    Voir plus
  </button>
</template>

<style scoped>
  .countries {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
  }
  .loader {
    margin: 50px;
  }
  button {
    color: #e86061;
    background-color: #fad2d4;
    border-radius: 5px;
    border: none;
    padding: 10px 15px;
    margin: 20px;
  }
  @media (max-width: 800px) {
    .countries {
      width: 90%;
    }
  }
</style>