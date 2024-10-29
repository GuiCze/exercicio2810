import express from "express"
import expedition from "../controllers/expedition-controller.js"
const router = express.Router()

router.get('/',  expedition.index)
router.get('/:id', expedition.show)
router.post('/', expedition.store)
router.put('/:id', expedition.update)
router.delete('/:id', expedition.destroy)

export default router