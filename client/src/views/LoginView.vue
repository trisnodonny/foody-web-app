<script>
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';
import { GoogleLogin } from 'vue3-google-login';

export default {
  name: "LoginView",
  components: { 
    RouterLink,
    GoogleLogin
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['userLogin']),
    ...mapActions(useUserStore, ['userGoogleLogin']),

    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.userLogin(payload)
    },

    onGoogleSubmit(response) {
      this.userGoogleLogin(response)
    }
  },
}
</script>

<template>
  <!-- Login -->
  <div class="d-flex justify-content-center mt-4 mb-5">
    <form class="w-25" @submit.prevent="onSubmit">
      <img
        class="d-flex justify-content-center"
        src="../assets/logo-color.png"
        style="width: 250px; margin: auto;" 
        alt=""
      >
      <div class="mb-5 mt-4 text-center">
        <h2>Get in to get your recipes</h2>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email" class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email . . ." 
          required
        >
      </div>
      <div class="mb-5">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="password"
          type="password" class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your password . . ."
          required
        >
      </div>
      <div class="d-flex justify-content-center mb-4">
        <button type="submit" class="btn btn-success w-25">Login</button>
      </div>
      <div class="d-flex justify-content-center">
        <p>or</p>
      </div>
      <div class="d-flex justify-content-center mb-5">
        <GoogleLogin :callback="onGoogleSubmit"/>
      </div>
      <div class="d-flex justify-content-center">
        <p>Doesn't have account?
          <span>
            <RouterLink to="/register">
              Register Here
            </RouterLink>
          </span>
        </p>
      </div>
      <div class="d-flex justify-content-center">
        <p>See the the recipes first??
          <span>
            <RouterLink to="/">
              Back to home
            </RouterLink>
          </span>
        </p>
      </div>
    </form>
  </div>
  <!-- Login -->
</template>