import express  from 'express'
import { addHLE,getHLE } from '../controllers/hleController.js'

const router = express.Router()

router.post('/create',addHLE)
router.get('/',getHLE)

export default router