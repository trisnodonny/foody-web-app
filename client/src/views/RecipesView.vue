<script>
import RecipeCard from '../components/RecipeCard.vue';
import{ mapActions, mapState, mapWritableState } from 'pinia'
import { useRecipesStore } from '../stores/recipes';
import Pagination from '../components/Pagination.vue';

export default {
  name: "RecipesView",
  components: {
    RecipeCard,
    Pagination
  },
  data() {
    return {
      titleMatch: "",
    }
  },
  computed: {
    ...mapWritableState(useRecipesStore, [
      'recipes',
      'currentPage',
      'totalPage'
    ])
  },
  methods: {
    ...mapActions(useRecipesStore, ['fetchRecipes']),

    onChangePage(page) {
      this.currentPage = page
      this.fetchRecipes()
    },

    handleFilter(cuisine) {
      this.fetchRecipes(cuisine, null)
    },

    handleSearch() {
      this.fetchRecipes(null, this.titleMatch)
    }
  },
  created() {
    this.fetchRecipes() 
  }
} 
</script>

<template>
  <!-- Search & Filter -->
  <div class="d-flex justify-content-around pb-4 h-5" style="margin: auto; width: 30%;">
    <div class="container-fluid">
      <form class="d-flex" role="search" @submit.prevent="handleSearch">
        <input v-model="titleMatch" class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <button 
      @click="handleFilter('Korean')"
      class="btn btn-outline-success mx-1">
      Korean
    </button>
    <button 
      @click="handleFilter('British')"
      class="btn btn-outline-success mx-1">
      British
    </button>
    <button 
      @click="handleFilter('Spanish')"
      class="btn btn-outline-success mx-1">
      Spanish
    </button>
    <button 
      @click="handleFilter('Japanese')"
      class="btn btn-outline-success mx-1">
      Japanese
    </button>
  </div>
  <!-- Search & Filter -->

  <section id="recipes" class="py-5">
    <div class="container">
      <div class="row">
        <RecipeCard 
          v-for="recipe in recipes"
          :key="recipe.id"
          :data="recipe"
        />
      </div>
    </div>
  </section>

  <Pagination
    :currentPage="currentPage"
    :totalPage="totalPage"
    @onChangePage="onChangePage"
  />
</template>
