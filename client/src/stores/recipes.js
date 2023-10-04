import { defineStore } from 'pinia'
import axios from "axios"

const baseUrl = "https://foody.trisno-rentroom.my.id"

export const useRecipesStore = defineStore('recipe', {
  state: () => {
    return {
      popularRecipes: [],
      veggieRecipes: [],
      recipes: [],
      recipeDetails: {},
      totalPage: 1,
      currentPage: 1,
      cuisines: [],
      qrCodeData: null,
      urlQrCode: '',
      paginationItems: [],
      favorites: []
    }
  },

  actions: {
    async fetchRecipes(cuisine, titleMatch) {
      try {
        let paramsObj = {
          page: this.currentPage
        }
   
        if (titleMatch) {
          paramsObj = {
            ...paramsObj,
            titleMatch
          }
        }

        if (cuisine) {
          paramsObj = {
            ...paramsObj,
            cuisine
          }
        }
        const searchParams = new URLSearchParams(paramsObj)
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/recipes?${searchParams}`
        })
        this.recipes = data.results

        if (!data.results.length) {
          this.totalPage = 1
        } else {
          this.totalPage = 10
        }
      } catch (err) {
        console.log(err);
      }
    },

    async fetchRecipeDetails(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/recipes/${id}`
        })

        this.recipeDetails = data
        this.urlQrCode = `https://foody-26.web.app/recipes/${data.id}`
        await this.generateQrCode()
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPopularRecipes() {
      try {
        const check = localStorage.getItem('popular')
        if (check) {
          this.popularRecipes = JSON.parse(check)
          // this.popularRecipes = check ? JSON.parse(check) : []
          // items.push(data)
          // localStorage.setItem('popular')
        } else {
          const { data } = await axios({
            method: "GET",
            url: `${baseUrl}/popularRecipes`
          })
          localStorage.setItem('popular', JSON.stringify(data.recipes))
          this.popularRecipes = data.recipes
        }
      } catch (err) {
        console.log(err);
      }
    },

    async fetchVeggieRecipes() {
      try {
        const check = localStorage.getItem('veggie')
        if (check) {
          this.veggieRecipes = JSON.parse(check)
        } else {
          const { data } = await axios({
            method: "GET",
            url: `${baseUrl}/veggieRecipes`
          })
          localStorage.setItem('veggie', JSON.stringify(data.recipes))
          this.veggieRecipes = data.recipes
        }
      } catch (err) {
        console.log(err);
      }
    },

    async generateQrCode() {
      try {
        const qr_code_text = this.urlQrCode
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/generate-qr-code`,
          data: {qr_code_text}
        })
        this.qrCodeData = data
      } catch (err) {
        console.log(err);
      }
    },

    async addRecipeToFavorite(data, fav) {
      const newData = {
        id: data.id,   
        title: data.title,
        image: data.image
      }

      const favorites = localStorage.getItem("favorites")
      const items = favorites ? JSON.parse(favorites) : []

      let newItems = []
      if (fav) {
        items.push(newData)
        newItems = [...items]
        localStorage.setItem(data.id, "true")
      } else {
        newItems = items.filter((el) => el.id !== data.id)
        localStorage.removeItem(data.id)
      }
      localStorage.setItem("favorites", JSON.stringify(newItems))
    }
  }
}) 