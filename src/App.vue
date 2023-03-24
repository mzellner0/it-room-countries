<script setup>
  const selectSearch = () => {
    document.getElementById("search").focus()
  }
</script>

<template>
  <header>
    <img src="@/assets/logo.svg" alt="logo">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <a class="search" @click="selectSearch">Recherche</a>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  border-bottom: 2px solid #811b1c;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px;
}
a {
  text-decoration: none;
  color: black;
  margin: 0px 20px;
  font-weight: bold;
}
img {
  max-width: 300px;
  margin-left: 40px;
}
.search {
  cursor: pointer;
}
@media (max-width: 600px) {
  header {
    flex-direction: column;
  }
  nav {
    margin-top: 20px;
  }
  a:first-of-type {
    margin-left: 0;
  }
}
@media (max-width: 400px) {
  img {
    max-width: 200px;
  }
}
</style>
