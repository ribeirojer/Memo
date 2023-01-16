const request = require('supertest');
const app = require('../app');
const FlashCard = require('../models/FlashCard');

describe('FlashCardController', () => {
    describe('create', () => {
        beforeEach(async () => {
            await FlashCard.deleteMany({});
        });
        it('should create a flashcard', async () => {
            const card = {
                question: 'What is the capital of Brazil?',
                response: 'Brasília',
                subject: 'Geography'
            };
            const response = await request(app)
                .post('/flashcard')
                .send(card);
            expect(response.status).toBe(201);
            expect(response.body).toEqual({
                message: 'FlashCard inserida no sistema com sucesso!'
            });
            const createdCard = await FlashCard.findOne({ question: card.question });
            expect(createdCard).toMatchObject(card);
        });
    });
});


/**
describe("POST /flashcard", () => {
  it("deve adicionar um flashcard com sucesso", async () => {
    // faça uma solicitação POST para a rota de flashcard
    const res = await request(app).post("/flashcard").send({
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });

    // verifique se o flashcard foi adicionado com sucesso
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      message: "FlashCard inserido no sistema com sucesso!",
    });
  });

  it("deve retornar um erro se houver um problema ao adicionar o flashcard", async () => {
    // sobrescreva o método de criação do modelo FlashCard para sempre lançar um erro
    FlashCard.create = jest.fn(() => {
      throw new Error("Test error");
    });

    // faça uma solicitação POST para a rota de flashcard
    const res = await request(app).post("/flashcard").send({
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ erro: "Test error" });
  });
});

describe("GET /flashcard", () => {
  it("deve retornar todos os flashcards", async () => {
    // crie alguns flashcards de teste
    const testCard1 = new FlashCard({
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });
    await testCard1.save();

    const testCard2 = new FlashCard({
      question: "What is the capital of Italy?",
      response: "Rome",
      subject: "Geography",
    });
    await testCard2.save();

    // faça uma solicitação GET para a rota de flashcard
    const res = await request(app).get("/flashcard");

    // verifique se todos os flashcards são retornados
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      {
        _id: expect.any(String),
        question: "What is the capital of France?",
        response: "Paris",
        subject: "Geography",
      },
      {
        _id: expect.any(String),
        question: "What is the capital of Italy?",
        response: "Rome",
        subject: "Geography",
      },
    ]);
  });

  it("deve retornar um erro se houver um problema ao recuperar os flashcards", async () => {
    // sobrescreva o método de busca do modelo FlashCard para sempre lançar um erro
    FlashCard.find = jest.fn(() => {
      throw new Error("Test error");
    });

    // faça uma solicitação GET para a rota de flashcard
    const res = await request(app).get("/flashcard");

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ erro: "Test error" });
  });
});

describe("GET /flashcard/:id", () => {
  it("deve retornar um flashcard específico", async () => {
    // crie um flashcard de teste
    const testCard = new FlashCard({
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });
    await testCard.save();

    // faça uma solicitação GET para a rota de flashcard com o ID do flashcard de teste
    const res = await request(app).get(`/flashcard/${testCard._id}`);

    // verifique se o flashcard é retornado
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      _id: expect.any(String),
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });
  });

  it("deve retornar um erro se o flashcard não for encontrado", async () => {
    // faça uma solicitação GET para a rota de flashcard com um ID que não existe na base de dados
    const res = await request(app).get("/flashcard/123");

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ message: "FlashCard não encontrado!" });
  });

  it("deve retornar um erro se houver um problema ao recuperar o flashcard", async () => {
    // sobrescreva o método de busca do modelo FlashCard para sempre lançar um erro
    FlashCard.findOne = jest.fn(() => {
      throw new Error("Test error");
    });

    // faça uma solicitação GET para a rota de flashcard
    const res = await request(app).get("/flashcard/123");

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ erro: "Test error" });
  });
});

describe("DELETE /flashcard/:id", () => {
  it("deve excluir um flashcard específico", async () => {
    // crie um flashcard de teste
    const testCard = new FlashCard({
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });
    await testCard.save();

    // faça uma solicitação DELETE para a rota de flashcard com o ID do flashcard de teste
    const res = await request(app).delete(`/flashcard/${testCard._id}`);

    // verifique se o flashcard é excluído
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "FlashCard removido com sucesso!" });
  });

  it("deve retornar um erro se o flashcard não for encontrado", async () => {
    // faça uma solicitação DELETE para a rota de flashcard com um ID que não existe na base de dados
    const res = await request(app).delete("/flashcard/123");

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ message: "FlashCard não encontrado!" });
  });

  it("deve retornar um erro se houver um problema ao excluir o flashcard", async () => {
    // sobrescreva o método de exclusão do modelo FlashCard para sempre lançar um erro
    FlashCard.deleteOne = jest.fn(() => {
      throw new Error("Test error");
    });

    // faça uma solicitação DELETE para a rota de flashcard
    const res = await request(app).delete("/flashcard/123");

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ erro: "Test error" });
  });
});

describe("PATCH /flashcard/:id", () => {
  it("deve atualizar um flashcard específico", async () => {
    // crie um flashcard de teste
    const testCard = new FlashCard({
      question: "What is the capital of France?",
      response: "Paris",
      subject: "Geography",
    });
    await testCard.save();

    // faça uma solicitação PATCH para a rota de flashcard com o ID do flashcard de teste e as alterações a serem feitas
    const res = await request(app)
      .patch(`/flashcard/${testCard._id}`)
      .send({ question: "What is the capital of Italy?", response: "Rome" });

    // verifique se o flashcard é atualizado
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      question: "What is the capital of Italy?",
      response: "Rome",
      subject: "Geography",
    });
  });

  it("deve retornar um erro se o flashcard não for encontrado", async () => {
    // faça uma solicitação PATCH para a rota de flashcard com um ID que não existe na base de dados e as alterações a serem feitas
    const res = await request(app)
      .patch("/flashcard/123")
      .send({ question: "What is the capital of Italy?", response: "Rome" });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ message: "FlashCard não encontrado!" });
  });

  it("deve retornar um erro se houver um problema ao atualizar o flashcard", async () => {
    // sobrescreva o método de atualização do modelo FlashCard para sempre lançar um erro
    FlashCard.updateOne = jest.fn(() => {
      throw new Error("Test error");
    });

    // faça uma solicitação PATCH para a rota de flashcard e as alterações a serem feitas
    const res = await request(app)
      .patch("/flashcard/123")
      .send({ question: "What is the capital of Italy?", response: "Rome" });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ erro: "Test error" });
  });
});
 */