const {Router} = require('express');
const router = new Router();
const {
    loginPOST,
    registerPOST,
    logoutPOST,
} = require('../controllers/userControllers');


router.post('/login', loginPOST);

router.post('/register', registerPOST);

router.post('/logout', logoutPOST);

module.exports = router;