<template>
  <div id="app">
    <Topbar/>
    <router-view class="screen-wrapper"/>
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1740px;
  margin: auto;
}

html, body {
  margin: 0;
}

</style>
<script>
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Topbar}
}
</script>
