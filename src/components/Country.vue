<script>
export default {
  props: ['country']
}
</script>

<template>
  <div class="country" v-if="country">
    <div>
      <img :src="country.flags.svg" :alt="country.flags.alt">
      <p class="region">{{country.region}}</p>
      <h4>{{country.name.common}}</h4>
      <p>Liste des langues préférées :</p>
      <div class="langs">
        <p v-for="lang in country.languages" :key="lang">
          {{ lang }},
        </p>
      </div>
    </div>
    <button>
      <a :href="country.maps.googleMaps" target="_blank">
        Voir sur GoogleMap
      </a>
    </button>
  </div>
</template>

<style scoped>
  img {
    width: 100%;
  }
  button {
    color: #e86061;
    background-color: #fad2d4;
    border-radius: 5px;
    border: none;
    padding: 10px 15px;
    margin-top: 40px;
    cursor: pointer;
  }
  h4 {
    color: black;
  }
  a {
    text-decoration: none;
    color: #e86061;
  }
  p {
    margin: 10px 0px;
    color: #677085;
    font-size: 14px;
  }
  h4 {
    margin: 10px 0px;
  }
  .country {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.123);
    padding: 30px;
    margin: 10px;
    width: calc(100% / 3 - 60px - 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .langs {
    display: flex;
    flex-wrap: wrap;
  }
  .langs p {
    margin: 0px;
    margin-right: 5px;
  }
  .region {
    color: #e86061;
  }
  @media (max-width: 700px) {
    .country {
      width: calc(100% / 2 - 60px - 20px);
    }
  }
  @media (max-width: 500px) {
    .country {
      width: calc(100% - 60px - 20px);
    }
  }
</style>