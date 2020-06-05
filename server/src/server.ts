import express from "express";

const app = express();

// Possibilita ao Express poder ler JSON
app.use(express.json());

const users = ["Mike", "Cleriton", "Robson", "Daniel"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return response.json(filteredUsers);
});

// : -> significa que estou recebendo um parâmetro
// :batata -> request.params.batata
app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
});

app.listen(3333);
