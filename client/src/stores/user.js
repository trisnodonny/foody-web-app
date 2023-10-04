import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from "sweetalert2"
import router from '../router'

const baseUrl = 'https://foody.trisno-rentroom.my.id'

export const useUserStore = defineStore('user', {
  state() {
    return {
      isLoggedIn: '' || localStorage.getItem("access_token") ? true : false,
      currentUser: '' || localStorage.getItem("username")
    }
  },

  actions: {
    async userRegister(userData) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/register`,
          data: userData
        })
        this.showSuccess('Register Success')
        router.push('/login')
      } catch (err) {
        console.log(err);
        this.showError(err)
      }
    },

    async userLogin(payload) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: payload
        })
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('username', data.username)
        this.currentUser = data.username
        this.isLoggedIn = true
        this.showSuccess('Login Success')
        router.push('/')
      } catch (err) {
        console.log(err);
        this.showError(err)
      }
    },

    async userGoogleLogin(response) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/glogin`,
          headers: {
            google_token: response.credential
          },
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem('username', data.username)
        this.currentUser = data.username
        this.isLoggedIn = true
        this.showSuccess("Login Success")
        router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async userLogout() {
      this.isLoggedIn = false
      localStorage.clear()
      // localStorage.removeItem("access_token")
      // localStorage.removeItem("favorites")
      // localStorage.removeItem("username")
      this.showSuccess("Logout Success")
    },

    showSuccess(message) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
    },

    showError(err) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
})
