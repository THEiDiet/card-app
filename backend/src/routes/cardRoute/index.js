import { Router } from 'express'
import { CardController } from '../../controllers'

export const cardRouter = new Router()

cardRouter.post('/addcard', CardController.addCard)