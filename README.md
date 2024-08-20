
# Primeira API 

Este é meu primeiro de uma API básica criada com o framework Express.js. Ela simula uma pequena aplicação de e-commerce que gerencia produtos e exibe informações através de rotas HTTP.


## Funcionalidades:
- Página Principal (/): Retorna uma mensagem de boas-vindas na rota raiz.
- Sobre Nós (/sobre): Exibe informações básicas sobre o projeto ou empresa.
- Lista de Produtos (/produtos): Retorna todos os produtos disponíveis em um arquivo JSON estático.
- Detalhes do Produto (/produto/:id): Retorna os detalhes de um produto específico, identificado pelo seu ID.

## Estruturas do projeto

- Express.js: Usado para construir a API REST, proporcionando uma maneira rápida e eficiente de criar servidores web com JavaScript.
- Arquivo Estático (static/produtcs.js): Contém os dados dos produtos em formato JSON, simulando uma base de dados.