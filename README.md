Uma iniciativa concebida por @aires1294, inspirada nas orientações e diretrizes da @Trybe.

# API para gerenciamento de concessionária de veículos
Este projeto consiste na construção de uma API com CRUD para gerenciar uma concessionária de veículos, utilizando os princípios de Programação Orientada a Objetos (POO) e o banco de dados MongoDB através do framework do Mongoose.

# Pré-requisitos
Docker-compose na versão 1.29 ou superior
Node instalado na versão 16

# Configuração
Clone o repositório com o comando: git clone https://github.com/tryber/sd-025-a-project-car-shop.git
Entre na pasta do repositório: cd sd-025-a-project-car-shop
Instale as dependências: npm install
Renomeie o arquivo src/server.example.ts para src/server.ts e descomente o conteúdo do mesmo
Inicialize os serviços app-car-shop e mongodb com o comando: docker-compose up -d
Caso não esteja utilizando Docker, rode o comando npm install para instalar as dependências e inicie a aplicação com o comando npm start.

# Atenção
Todos os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container Docker, ou seja, no terminal que aparece após a execução do comando docker exec
O git dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

# Instruções de utilização
Recomendo utilizar o Docker para rodar o seu projeto, assim como o Thunder Client para testar as rotas diretamente no VSCode.

# A API possui as seguintes rotas:
GET /vehicles: Retorna todos os veículos cadastrados.

GET /vehicles/:id: Retorna um veículo pelo ID.

POST /vehicles: Cadastra um novo veículo.

PUT /vehicles/:id: Atualiza um veículo pelo ID.

DELETE /vehicles/:id: Deleta um veículo pelo ID.

# Autor

Pedro Teixeira Jacobina Aires

<div>
  <a href="https://www.linkedin.com/in/pedrotja/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="mailto:pedrotja.engenharia@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
