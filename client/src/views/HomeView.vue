<script>
import { RouterView } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { useRecipesStore } from '../stores/recipes';
import Welcome from '../components/Welcome.vue';
import RecipeCard from '../components/RecipeCard.vue';
import RecipeImage from '../components/RecipeImage.vue'
import UserRecipesView from './UserRecipesView.vue';

export default {
  name: "HomeView",
  components: {
    RouterView,
    Welcome,
    RecipeCard,
    RecipeImage,
    UserRecipesView
  },
  computed: {
    ...mapState(useRecipesStore, [
      'popularRecipes',
      'veggieRecipes'
    ]),
  },
  methods: {
    ...mapActions(useRecipesStore, [
      'fetchPopularRecipes',
      'fetchVeggieRecipes'
    ]),
  },
  created() {
    this.fetchPopularRecipes()
    this.fetchVeggieRecipes()
  }
}
</script>

<template>
  <Welcome />

  <!-- Popular -->
  <section id="recipes" class="py-5">
    <div class="container">
      <h2 class="text-center pb-3">Recipes of the day!</h2>
      <p class="text-center">Check out some of the most loved recipes from our community:</p>
      <div class="row">
        <RecipeCard
          v-for="popular in popularRecipes"
          :key="popular.id"
          :data="popular"
        />
      </div>
      <h2 class="text-center pt-5 pb-3">For you vegan lovers!</h2>
      <p class="text-center">Discover some of the most beloved recipes from our vegan community:</p>
      <div class="row">
        <RecipeImage
          :data="veggieRecipes"
        />
      </div>
    </div>
  </section>
  <!-- Popular -->
  
  <RouterView />
</template>
