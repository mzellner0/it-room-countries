export default {
  async getCAllountries() {
    const response = await fetch(
      import.meta.env.VITE_API_URL + '/all'
    )
    const data = await response.json();
    return data;
  },

  async getOneCountry(lang) {
    const response = await fetch(
      import.meta.env.VITE_API_URL + '/lang/' + lang
    )
    const data = await response.json();
    return data;
  }
}