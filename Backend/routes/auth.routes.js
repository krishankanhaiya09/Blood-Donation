import express from 'express'
import {loginUser,registeruser} from '../Controller/auth.controller.js'

const router=express.Router()

router.post('/login',loginUser)
router.post('/register',registeruser)

export default router