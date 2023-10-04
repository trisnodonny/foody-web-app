<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  name: "Navbar",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useUserStore, [
      'isLoggedIn',
      'currentUser'
    ])
  },
  methods: {
    ...mapActions(useUserStore, ['userLogout']),

    onClickLogout() {
      this.userLogout()
      this.$router.push('/')
    },  

    isActive(routeName) {
      return this.$route.path === routeName
    }
  },
}
</script>

<template>
  <!-- Navbar -->
  <nav class="">
    <div class="d-flex justify-content-around mt-5 mb-5 fs-5">
      <div class="d-flex justify-content-start">
        <RouterLink
          to="/"
          class="me-4 text-decoration-none"
          :class="isActive('/') ? 'text-success fw-bold' : 'text-dark'"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/recipes" 
          class="me-4 text-decoration-none"
          :class="isActive('/recipes') ? 'text-success fw-bold' : 'text-dark'"
        >
          Recipes
        </RouterLink>
        <RouterLink 
          to="/about"
          class="text-decoration-none"
          :class="isActive('/about') ? 'text-success fw-bold' : 'text-dark'"
        >
          About
        </RouterLink>
      </div>
      <div style="position: absolute; right: 50%; left: 50%;">
        <RouterLink to="/" 
          class="d-flex justify-content-center"
        >
          <img
            style="width: 80px;"
            src="../assets/logo-no-background.png"
          >
        </RouterLink>
      </div>
      <div>
        <a
          v-if="isLoggedIn"
          class="me-4 text-decoration-none text-dark"
        >
          Hi, {{ currentUser }}
        </a>
        <RouterLink
          v-if="isLoggedIn"
          to="/favorites" 
          class="me-4 text-decoration-none"
          :class="isActive('/favorites') ? 'text-success fw-bold' : 'text-dark'"
        >
          Favorites
        </RouterLink>
        <a href="" v-if="isLoggedIn" class="me-4 text-decoration-none text-dark" @click.prevent="onClickLogout">Logout</a>
        <RouterLink
          v-if="!isLoggedIn" to="/login"
          class="me-4 text-decoration-none text-dark"
        >
          Login
        </RouterLink>
        <RouterLink
          v-if="!isLoggedIn" to="/register"
          class="btn btn-success rounded-3"
        >
          Sign Up
        </RouterLink>
      </div>
    </div>
  </nav>
</template>