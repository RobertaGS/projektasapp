const express = require('express');
const router = express.Router();

const {
    getUsers,
    setUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const { protect } = require('./middelware/middelware');


router.route('/').get(protect, getUsers).post(protect, setUser);
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser);

module.exports = router;