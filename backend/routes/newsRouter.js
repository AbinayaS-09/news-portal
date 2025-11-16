const newsController = require('../controllers/newsController')

const router = require('express').Router()

router.post('/addNews',newsController.addNews)
router.delete('/:id',newsController.deleteNews)
router.get('/allNews',newsController.getAllNews)
router.get('/:id',newsController.getOneNews)
router.put('/:id',newsController.updateNews)

module.exports = router