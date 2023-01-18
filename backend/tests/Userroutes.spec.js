import { describe, it, expect, vi } from "vitest";
const checkToken = require("../middlewares/checkToken").default
/**
describe("GET /user/:id", () => {
  it("deve retornar um usuário existente", async () => {
    // crie um usuário de teste e salve-o na base de dados
    const testUser = new User({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });
    await testUser.save();

    // faça uma solicitação GET para a rota de usuário
    const res = await request(app).get(`/user/${testUser._id}`);

    // verifique se o usuário foi retornado corretamente
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      user: {
        _id: testUser._id.toString(),
        name: "Test User",
        email: "test@example.com",
      },
    });
  });

  it("deve retornar um usuário vazio para um ID de usuário não existente", async () => {
    // faça uma solicitação GET para uma rota de usuário com um ID que não existe na base de dados
    const res = await request(app).get(
      `/user/${new mongoose.Types.ObjectId()}`
    );

    // verifique se o usuário vazio é retornado
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ user: {} });
  });

  it("deve retornar um erro para um ID de usuário inválido", async () => {
    // faça uma solicitação GET para uma rota de usuário com um ID inválido
    const res = await request(app).get("/user/invalid-id");

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ msg: "ID do usuário inválido" });
  });
});

describe("POST /auth/register", () => {
  it("deve criar um usuário com sucesso", async () => {
    // faça uma solicitação POST para a rota de registro
    const res = await request(app).post("/auth/register").send({
      name: "Test User",
      email: "test@example.com",
      password: "password",
      confirmpassword: "password",
    });

    // verifique se o usuário foi criado com sucesso
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ msg: "Usuário criado com sucesso!" });
  });

  it("deve retornar um erro se um campo obrigatório estiver faltando", async () => {
    // faça uma solicitação POST para a rota de registro com um campo obrigatório faltando
    const res = await request(app).post("/auth/register").send({
      name: "Test User",
      password: "password",
      confirmpassword: "password",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ msg: "O email é obrigatório!" });
  });

  it("deve retornar um erro se a senha e a confirmação não forem iguais", async () => {
    // faça uma solicitação POST para a rota de registro com a senha e a confirmação diferentes
    const res = await request(app).post("/auth/register").send({
      name: "Test User",
      email: "test@example.com",
      password: "password",
      confirmpassword: "incorrect",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({
      msg: "A senha e a confirmação precisam ser iguais!",
    });
  });

  it("deve retornar um erro se o e-mail já estiver sendo utilizado", async () => {
    // crie um usuário de teste com um e-mail específico
    const testUser = new User({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });
    await testUser.save();

    // faça uma solicitação POST para a rota de registro com o mesmo e-mail
    const res = await request(app).post("/auth/register").send({
      name: "Test User 2",
      email: "test@example.com",
      password: "password",
      confirmpassword: "password",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ msg: "Por favor, utilize outro e-mail!" });
  });
});

describe("POST /auth/login", () => {
  it("deve realizar o login com sucesso", async () => {
    // crie um usuário de teste
    const testUser = new User({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });
    await testUser.save();

    // faça uma solicitação POST para a rota de login
    const res = await request(app).post("/auth/login").send({
      email: "test@example.com",
      password: "password",
    });

    // verifique se o login foi realizado com sucesso
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      msg: "Autenticação realizada com sucesso!",
      token: expect.any(String),
    });
  });

  it("deve retornar um erro se um campo obrigatório estiver faltando", async () => {
    // faça uma solicitação POST para a rota de login com um campo obrigatório faltando
    const res = await request(app).post("/auth/login").send({
      email: "test@example.com",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ msg: "A senha é obrigatória!" });
  });

  it("deve retornar um erro se o usuário não for encontrado", async () => {
    // faça uma solicitação POST para a rota de login com um e-mail que não existe na base de dados
    const res = await request(app).post("/auth/login").send({
      email: "test@example.com",
      password: "password",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Usuário não encontrado!" });
  });

  it("deve retornar um erro se a senha for inválida", async () => {
    // crie um usuário de teste
    const testUser = new User({
      name: "Test User",
      email: "test@example.com",
      password: "password",
    });
    await testUser.save();

    // faça uma solicitação POST para a rota de login com uma senha inválida
    const res = await request(app).post("/auth/login").send({
      email: "test@example.com",
      password: "incorrect",
    });

    // verifique se um erro é retornado
    expect(res.statusCode).toBe(422);
    expect(res.body).toEqual({ msg: "Senha inválida" });
  });
});

describe("checkToken", () => {
  it("deve permitir acesso se o token é válido", async () => {
    // crie um token de teste
    const testToken = jwt.sign({ id: "123" }, "test-secret");

    // crie uma solicitação de teste com o token de teste
    const req = { headers: { authorization: `Bearer ${testToken}` } };
    const res = {};
    const next = vi.fn();

    // chame a função checkToken com a solicitação de teste, a resposta e o próximo middleware
    checkToken(req, res, next);

    // verifique se o próximo middleware é chamado
    expect(next).toHaveBeenCalled();
  });

  // chame a função checkToken com a solicit
  it("deve negar acesso se o token não é válido", async () => {
    // crie um token de teste inválido
    const testToken = "invalid-token";
    // crie uma solicitação de teste com o token de teste

    const req = { headers: { authorization: `Bearer ${testToken}` } };
    const res = { status: vi.fn(() => ({ json: vi.fn() })) };
    const next = vi.fn();

    // chame a função checkToken com a solicitação de teste, a resposta e o próximo middleware
    checkToken(req, res, next);

    // verifique se o código de status da resposta é definido como 400
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

 */