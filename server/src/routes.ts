import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (request, response) => {
  // Sempre que for utilizado uma query do banco de dados, precisamos utilizar
  // async/await para poder aguardar os resultados
  const items = await knex("items").select("*");

  // Serialização de dados, eu transformo os dados para um novo formato o qual
  // vai ser mais accesível para quem esta requisitando essas informações.
  const serializedItems = items.map((item) => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return response.json(serializedItems);
});

export default routes;
