// const { Lodging } = require('../models')

// const deleteAuthorize = async (req, res, next) => {
//   const { id } = req.params
//   const lodgingByPk = await Lodging.findByPk(id);
//   const userId = req.user.id
  
//   if (!lodgingByPk) {
//     next({ name: "NotFoundError" })
//   } else if (req.user.role === "Admin") {
//     next();
//   } else if (req.user.role === "Staff" && userId === lodgingByPk.authorId) {
//     next();
//   } else {
//     next({ name: "Forbidden" })
//   }
// }

// const customerAuthorize = async (req, res, next) => {
//   if (req.user.role !== "Customer") {
//     next({ name:"Forbidden"})
//   } else {
//     next()
//   }
// }

// module.exports = {
//   deleteAuthorize,
//   customerAuthorize
// };