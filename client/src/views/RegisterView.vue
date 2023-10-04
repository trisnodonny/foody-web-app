<script>
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '../stores/user'

export default {
  name: "RegisterView",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      phoneNumber: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['userRegister']),

    onSubmit() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber
      }
      this.userRegister(data)
    }
  }
}
</script>

<template>
  <!-- Register -->
  <div class="d-flex justify-content-center mb-5">
    <form class="w-25" @submit.prevent="onSubmit">
      <img
        class="d-flex justify-content-center"
        src="../assets/logo-color.png"
        style="width: 250px; margin: auto;" 
        alt=""
      >
      <div class="mb-4">
        <h2>Register</h2>
      </div>
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label">Username</label>
        <input v-model="username" type="text" class="form-control" id="exampleInputUsername" placeholder="Enter username . . .">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email . . ." required>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword" placeholder="Enter password . . ." required>
      </div>
      <div class="mb-3">
        <label for="exampleInpuexampleInputAddresstPassword1" class="form-label">Phone Number</label>
        <input v-model="phoneNumber" type="text" class="form-control" id="exampleInputPhoneNumber" placeholder="Enter phone number . . . ">
      </div>
      <div class="d-flex justify-content-center mt-5 mb-5">
        <button type="submit" class="btn btn-success w-25">Register</button>
      </div>
      <div class="d-flex justify-content-center">
        <p>See the the recipes first?
          <span>
            <RouterLink to="/">
              Back to home
            </RouterLink>
          </span>
        </p>
      </div>
    </form>
  </div>
  <!-- Register -->
</template>