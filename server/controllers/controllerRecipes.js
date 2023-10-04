const baseUrl = "https://api.spoonacular.com"
const axios = require('axios')
const { Op, where } = require('sequelize')
const apiKey = "44fcdcfa72f145b190fec9672d9fa621"
// const apiKey = "0ddc78aa81234c25aef5c00f7d3df0c9"
// const apiKey = 'dd41579bd7cf4345aa86b35626826af9'
const { Post, Favorite } = require('../models')
 
class ControllerRecipes {
  static async renderRecipes(req, res, next) {
    try {
      const { page = 1, number = 9 } = req.query
      const formula = (Number(page) - 1) * Number(number)
      const queryParams = new URLSearchParams({
        ...req.query,
        apiKey,
        number,
        offset: formula,
      })

      const response = await axios.get(
        `${baseUrl}/recipes/complexSearch?${queryParams}`,
      )
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async renderRecipesDetail(req, res, next) {
    try {
      const { id } = req.params
      const queryParams = new URLSearchParams({
        ...req.query,
        apiKey,
      })
      const response = await axios.get(
        `${baseUrl}/recipes/${id}/information?${queryParams}`
      )
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async renderPopularRecipes(req, res, next) {
    try {
      const queryParams = new URLSearchParams({
        ...req.query,
        number: 9,
        apiKey
      })
      const response = await axios.get(
        `${baseUrl}/recipes/random?${queryParams}`
      )
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async renderVeggieRecipes(req, res, next) {
    try {
      // const queryParams = new URLSearchParams({
      //   ...req.query,
      //   apiKey
      //   number: 9,
      //   tags: vegetarion,
      // })
      const response = await axios.get(
        `${baseUrl}/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`
      )
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async renderRecipesQrCode(req, res, next) {
    try {
      const { qr_code_text } = req.body
      const acccessToken = "XEA8izhxyDc4XRuqCN3DldqMSVwDau-HJN40N1s_zfrJvzvBLkmQU1mg9OxKfZjh"
      const response = await axios.post(
        `https://api.qr-code-generator.com/v1/create?access-token=${acccessToken}`, 
        {
          frame_name: "no-frame",
          qr_code_text: qr_code_text,
          image_format: "SVG",
          qr_code_logo: "scan-me-square",
        }
      )
      res.status(200).json(response.data)
      // res.send(response.data)
    } catch (err) {
      next(err)
    }
  }

  static async addUserRecipes(req, res, next) {
    try {
      const { title, imageUrl, instructions, ingredients } = req.body
      const newPost = await Post.create({
        title,
        imageUrl,
        instructions,
        ingredients,
        UserId: req.user.id
      })
      res.status(201).json(newPost)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async renderUserRecipes(req, res, next) {
    try {
      const posts = await Post.findAll()
      res.status(200).json(posts)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async deleteUserRecipes(req, res, next) {
    try {
      const { id } = req.params
      const postDetail = await Post.findByPk(id)
      const deletedUserPost = await Post.destroy({
        where: {
          UserId: req.user.id
        }
      })
      if (!deletedUserPost) {
        throw { name:'NotFoundError'}
      }
      res.status(200).json({
        message: `${postDetail.title} has been deleted`
      })
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = ControllerRecipes