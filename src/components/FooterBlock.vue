<template>
  <div>
    <footer class="container" >
      <div
        class="
          d-flex
          align-items-center
          footerDiv
          justify-content-center
          footerDiv
        "
      >
        <p>2021 &copy; All right reserved by ABC.Inc</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
};
</script>

<style>
footer {
  /* border: 1px solid #000; */
  margin-bottom: 24px;
}
.footerDiv {
  min-height: 50px;
  background-color: #aab2b7;
  padding-top: 12px;
}
</style>