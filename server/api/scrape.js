const router = require('express').Router()
module.exports = router
const {processUrl} = require('../scrape/main')
const Recipe = require('../db/models/recipe')

// POST   /api/scrape
router.post('/', async (req, res, next) => {
  try {
    const url = req.body.url
    const userId = req.body.userId
    let data = await processUrl(url, userId)
    if (data === 'notAccepted') {
      res.send('notAccepted')
    }
    if (data !== 'error' && data.url !== '' && data.name !== '') {
      const newRecipe = await Recipe.create(data)
      res.status(200).send(newRecipe)
    }
  } catch (error) {
    res.send('error')
  }
})

// router.post('*', async (req, res) => {
//   try {
//     let url = req.body.url
//     let id = 3 // change to req.body.userId after testing is done
//     let data = await processUrl(url, id)
//     res.send(data)
//   } catch (error) {
//     console.error(error)
//   }
// })
