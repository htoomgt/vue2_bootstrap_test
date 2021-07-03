<template>
  <div id="app">
    <div class="container" role="main" id="mainContainer">
      <nav-bar />
      <router-view></router-view>
    </div>
    <footer-block />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBlock from "./components/FooterBlock.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBlock,
  },
  created(){
    // NavBar.methods.setActiveLink('')
    // console.log()
  } 
};
</script>

<style>
#mainContainer {
  /* border: 1px solid #000; */
  min-height: 600px;
}
</style>
