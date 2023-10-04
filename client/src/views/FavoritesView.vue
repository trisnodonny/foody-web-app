<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
  name: "FavoritesView",
  components: { RecipeCard },
  data() {
    return {
      favoriteList: []
    }
  },
  created() {
    const favorites = localStorage.getItem("favorites")
    const items = favorites ? JSON.parse(favorites) : []
    this.favoriteList = items
  }
}
</script>

<template>
  <section id="recipes" class="py-5">
    <div class="container">
      <div class="row">
        <RecipeCard 
        v-for="fav in favoriteList"
        :key="fav.id"
        :data="fav"
        :isFavorite="true"
        />
      </div>
     </div>
   </section>
</template>