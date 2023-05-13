API para gerenciamento de concessionária de veículos
Este projeto consiste na construção de uma API com CRUD para gerenciar uma concessionária de veículos, utilizando os princípios de Programação Orientada a Objetos (POO) e o banco de dados MongoDB através do framework do Mongoose.

Pré-requisitos
Docker-compose na versão 1.29 ou superior
Node instalado na versão 16

Configuração
Clone o repositório com o comando: git clone https://github.com/tryber/sd-025-a-project-car-shop.git
Entre na pasta do repositório: cd sd-025-a-project-car-shop
Instale as dependências: npm install
Renomeie o arquivo src/server.example.ts para src/server.ts e descomente o conteúdo do mesmo
Inicialize os serviços app-car-shop e mongodb com o comando: docker-compose up -d
Caso não esteja utilizando Docker, rode o comando npm install para instalar as dependências e inicie a aplicação com o comando npm start.

Atenção
Todos os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container Docker, ou seja, no terminal que aparece após a execução do comando docker exec
O git dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

A API possui as seguintes rotas:
GET /vehicles: Retorna todos os veículos cadastrados.
GET /vehicles/:id: Retorna um veículo pelo ID.
POST /vehicles: Cadastra um novo veículo.
PUT /vehicles/:id: Atualiza um veículo pelo ID.
DELETE /vehicles/:id: Deleta um veículo pelo ID.
