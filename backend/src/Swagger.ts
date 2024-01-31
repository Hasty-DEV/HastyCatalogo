import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hasty Catalogo API",
      version: "0.0.1",
      description:
        "API de um catálogo dinâmico para simplificar visualização de catálogos. Explore produtos e serviços com facilidade. Interface intuitiva e recursos robustos para uma experiência elevada.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["**/*.ts"],
};

const specs = swaggerJsdoc(options);

export default specs;
