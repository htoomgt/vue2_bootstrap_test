<template>
  <div class="landing_page_body">
    <div class="row">
      <landing-jumbotron />
    </div>
    <div class="row">
      <intro-cards />
    </div>
    <div class="row">
      <div class="col-md-8">
        <content-panel />        
      </div>
      <div class="col-md-4">
        <side-panel />
      </div>
    </div>
  </div>
</template>

<script>
import LandingJumbotron from './LandingJumbotron.vue'
import IntroCards from './IntroCards.vue'
import ContentPanel from './ContentPanel.vue'
import SidePanel from './SidePanel.vue'

export default {
  name: "LandingPage",
  components : {
    LandingJumbotron,
    IntroCards,
    ContentPanel,
    SidePanel,
  }
};
</script>

<style>
  .landing_page_body{
    margin-bottom:16px;
  }

  .archive_list{
    list-style: none;
    padding-left:0;
  }
  .archive_list li{
    margin-top:4px;
  }
  .archive_list li>a{
    text-decoration: none;
  }
  .archive_list li>a:hover{
    text-decoration: underline;
  }
</style>