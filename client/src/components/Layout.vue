<script>
import { RouterView } from 'vue-router';
import Navbar from '../components/Navbar.vue'
import Footer from './Footer.vue';
export default {
  name: "Layout",
  components: {
    RouterView,
    Navbar,
    Footer,
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>