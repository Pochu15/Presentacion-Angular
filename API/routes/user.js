const router = require('express').Router()
const userController = require('../controllers/user')

router.get('/', userController.basicGet);
router.get('/:username', userController.getOne);
router.post('/', userController.basicPost);

module.exports = router