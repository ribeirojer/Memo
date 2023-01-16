import FlashCard from '../models/FlashCard';

class FlashCardController {
    async create(req, res) {
        const { question, response, subject } = req.body;

        const card = {
            question,
            response,
            subject,
        };
        try {
            await FlashCard.create(card);
            res.status(201).json({ message: "FlashCard inserida no sistema com sucesso!" });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

export default new FlashCardController();
