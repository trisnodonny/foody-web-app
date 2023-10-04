<script>
import { mapActions, mapState } from 'pinia';
import { useRecipesStore } from '../stores/recipes';
import { useUserStore } from '../stores/user';

export default {
  name: "RecipeCard",
  props: ['data', 'isFavorite'],
  data() {
    return {
      favorite: false
    }
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn'])
  },
  methods: {
    goRecipeDetails(id) {
      this.$router.push(`recipes/${id}`)
    },

    ...mapActions(useRecipesStore, ['addRecipeToFavorite']),

    onClick(data, fav) {
      this.favorite = fav
      this.addRecipeToFavorite(data, fav)
    }
  },
  created() {
    const dataFav = localStorage.getItem(this.data.id)
    if (dataFav) {
      this.favorite = true
    }
    if(this.isFavorite) {
      this.favorite = this.isFavorite
    }
  }
}
</script>

<template>
  <div class="col-md-4">
    <div
      class="card mb-4" 
      style="height: 450px;"
    >
      <img :src="data.image" class="card-img-top" alt="Recipe image">
      <div class="card-body">
          <h5 class="card-title">{{ data.title }}</h5>
          <button
            @click="goRecipeDetails(data.id)"
            class="btn btn-success position-absolute bottom-0 start-1 mb-3"
          >
            View Recipe
          </button>
          <div class="position-absolute bottom-0 end-0 me-3 mb-3">
            <!-- <span 
              @click="onClick(data)"
              class="material-symbols-outlined"
              style="cursor: pointer;"
            >
             favorite
            </span> -->
            <div
              v-if="!favorite && isLoggedIn"
              @click="onClick(data, true)"
              style="cursor: pointer;"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
            </div>
            <div
              v-if="favorite && isLoggedIn"
              @click="onClick(data, false)"
              style="cursor: pointer;"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>