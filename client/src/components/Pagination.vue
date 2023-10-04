<script>
import { mapState } from 'pinia';
import { useRecipesStore } from '../stores/recipes';

export default {
  name: "Pagination",
  emits: ['onChangePage'],
  props: ['currentPage', 'totalPage'],
  computed: {
    ...mapState(useRecipesStore, ['paginationItems'])
  },
  methods: {
    changePage(page) {
      this.$emit('onChangePage', page)
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center pb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link text-success" href="#">Previous</a></li>
        <li 
          class="page-item"
          v-for="(el, index) in new Array(this.totalPage)"
          :class="{ active: index + 1 === currentPage}"
        >
          <a 
            class="page-link text-success" href="#"
            @click.prevent="changePage(index + 1)"
          >
            {{ index + 1 }}
          </a>
        </li>
        <li class="page-item"><a class="page-link text-success" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>