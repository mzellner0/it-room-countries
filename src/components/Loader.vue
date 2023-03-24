<template>
  <div class="loader"></div>
</template>

<style scoped>
  @keyframes turn {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  .loader {
    width: 30px;
    height: 30px;
    border-top: pink 4px solid;
    border-bottom: pink 4px solid;
    border-left: #811b1c 4px solid;
    border-right: #811b1c 4px solid;
    border-radius: 100%;
    animation: turn 1200ms linear infinite;
  }
</style>