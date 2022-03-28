import { Card } from '../../models'

class CardController {
  async addCard(req, res) {
    try {
      const { cardNumber, cvv, expirationDate, amount } = req.body
      const cardData = new Card({
        CardNumber: cardNumber,
        Amount: amount,
        Cvv: cvv,
        ExpDate: expirationDate,
      })
      await cardData.save()
      const { _id: RequestId, Amount } = cardData
      return res.status(201).json({RequestId,Amount})
    } catch (e) {
      return res.status(500).json({message:e.message})
    }
  }
}

export default new CardController()
