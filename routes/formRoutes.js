import express  from 'express'
const router = express.Router()
import { createForm, getAllForms } from '../controllers/formController.js'


router.post('/create',createForm)
router.get('/',getAllForms)

export default router