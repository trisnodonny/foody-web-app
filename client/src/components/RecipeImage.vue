<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "RecipeImage",
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      splideOptions: {
      type: 'loop',
      perPage: 3,
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      gap: "5rem"
      },
    }
  },
  props: ['data'],
  methods: {
    goRecipeDetails(id) {
      this.$router.push(`recipes/${id}`)
    }
  }
}
</script>

<template>
  <Splide
    :options="splideOptions"
  >
    <SplideSlide
      v-for="veggie in data"
      :key="veggie.id"
    >
      <div
        class="w-100"
        style="margin: 0 auto; cursor: pointer;"
        @click="goRecipeDetails(veggie.id)"
      > 
        <img
          :src="veggie.image"
          :alt="veggie.title"
          class="img-fluid rounded border border-success"
          style="opacity: 0.8; color; filter: brightness(50%);" 
        >
        <div class="card-img-overlay">
          <h5 class="text-white pt-3 ps-3 pe-3">
            {{ veggie.title }}
          </h5>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>