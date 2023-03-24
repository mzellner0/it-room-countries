import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import countriesService from '../services/countriesService'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([])
  const isLoading = ref(false)
  const loadedNb = ref(6)

  const filtersCountries = computed(() => {
    return countries.value.slice(0, loadedNb.value)
  })

  const loadMore = () => {
    loadedNb.value += 6
  }

  const getAllCountries = async () => {
    loadedNb.value = 6
    isLoading.value = true
    const data = await countriesService.getCAllountries()
    countries.value = data
    isLoading.value = false
  }

  const getOneCountry = async (lang) => {
    loadedNb.value = 6
    isLoading.value = true
    if (lang != '') {
      const data = await countriesService.getOneCountry(lang)
      countries.value = data
    } else {
      await getAllCountries()
    }
    isLoading.value = false
  }

  return {
    loadedNb,
    countries,
    isLoading,
    filtersCountries,
    getAllCountries,
    getOneCountry,
    loadMore
  }
})
