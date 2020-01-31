# API de base com webpack e docker

## Motivação

Durante o envio para a produção, o projeto fica com um volume muito grande devido a node_modules, o projeto então possui o webpack, o webpack compila todos os arquivos necessários gerando um build menor, sendo assim o docker que antes criava imagens com volume gigantesco agora cria imagens com aproximadamente 80mb

## Comandos

install - instala os modules necessários para o node
`yarn install`

build - Gera a build do projeto
`yarn build-prod`

docker - Gera a imagem do docker
`yarn docker`

Start - Inicia o projeto
`yarn start`

### Comando para executar a imagem do docker
`docker run --name api-webpack -d -p 3000:3000 api-webpack`

### Autor
Marco Guilherme