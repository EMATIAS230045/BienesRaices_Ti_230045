import express from 'express'
import { propiedades } from '../controllers/apiController.js'

const router = express.Router()

router.get('0', propiedades)

export default router
