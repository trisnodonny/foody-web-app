<script>
import { RouterLink } from 'vue-router';
export default {
  name: "Welcome",
}
</script>

<template>
  <!-- Welcome -->
  <section id="home" class="py-5">
    <div class="container text-center">
        <h1 class="pb-3 fw-bold">Welcome to Foody!</h1>
        <p class="lead w-75 pb-4" style="margin: 0 auto; font-size: 25px;">Your ultimate culinary companion on the web. Foody is not just a website; it's a gastronomic journey, a virtual kitchen where food lovers from around the world come together to celebrate the art of cooking and sharing recipes.</p>
        <RouterLink 
          to="/recipes" 
          class="btn btn-success btn-lg mt-3"
        >
          Explore Recipes
        </RouterLink>
    </div>
  </section>
  <!-- Welcome -->
</template>
