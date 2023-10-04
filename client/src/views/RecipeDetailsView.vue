<script>
import { mapState, mapActions } from 'pinia';
import { useRecipesStore } from '../stores/recipes';

export default {
  name: "RecipeDetailView",
  data() {
    return {
      isVisible: false,
    }
  },
  computed: {
    ...mapState(useRecipesStore, [
      'recipeDetails',
      'qrCodeData'
    ])
  },
  methods: {
    ...mapActions(useRecipesStore, [
      'fetchRecipeDetails',
      'generateQrCode'
    ]),

    showVisible() {
      this.isVisible = !this.isVisible
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRecipeDetails(id)

    this.generateQrCode()
  }
}
</script>

<template>
  <!-- Section Recipe Detail -->
  <section id="recipe-detail" class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="pb-3 mx-auto">
                  {{ recipeDetails.title }}
                </h2>
                <img
                  :src="recipeDetails.image" 
                  :alt="recipeDetails.title"
                  class="img-fluid rounded-4 mb-4 rounded mx-auto d-block"
                >
                <div>
                  <h4 class="text-center">Share this recipes!</h4>
                  <div
                  class="mx-auto"
                  v-html="qrCodeData" 
                  style="width: 300px;"
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6">
                <button :class="`btn me-3 ${!this.isVisible ? 'btn-success' : 'btn-outline-success'}`" @click="showVisible">Instructions</button>
                <button :class="`btn me-3 ${this.isVisible ? 'btn-success' : 'btn-outline-success'}`" @click="showVisible">Ingredients</button>
                <div v-if="!isVisible">
                  <h3 class="mt-3">Instructions:</h3>
                  <div
                    v-html="recipeDetails.summary">
                  </div>
                  <div
                    class="mt-3"
                    v-html="recipeDetails.instructions">
                  </div>
                </div>
                <div v-if="isVisible">
                  <h3 class="my-3">Ingredients:</h3>
                  <ul
                    v-for="ingredient in recipeDetails.extendedIngredients"
                    :key="ingredient.id"  
                  >
                    <li>{{ ingredient.original }}</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- Section Recipe Detail -->
</template>