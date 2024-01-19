<script setup>


</script>

<template>
  <div id="nav">
    <img src="../img/logo.png" alt="logo" width="40" height="40">
    
    <div class="links">
      <a>About</a>
      <a>Contact</a>
    </div>
  </div>
</template>

<style>

  #nav {
    list-style-type: none;
    position: fixed;

    height: 50px;
    width: 100vw;

    margin-top: 5vh;

  }

  #nav .links {
    margin-left: 75vw;
    position: absolute;
    bottom: 20%;

  }

  #nav img {
    margin-left: 13vw;
    
  }

  #nav a{
    color: #353535;
    font-size: 15px;
    padding: 20px;
    margin: auto;
  }

</style>