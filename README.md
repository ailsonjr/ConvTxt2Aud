# Conversor de texto para áudio
## _Teste prático de programação_

![N|Solid](https://smark.io/wp-content/uploads/2021/01/smarkio-logo-dark.png)

### Descrição do Objetivo

Desenvolver uma aplicação web em ​Node.js​ com banco de dados ​MySQL​. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário.

Para realizar a conversão do comentário de texto para áudio, o candidato deverá utilizar a API [Text to Speech do IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech).
As operações de cadastro e atualização da lista de comentários devem ser realizadas via AJAX.

### Tecnologias:

 ![https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white) ![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  ![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)  ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  ![](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) ![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red) ![](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![](https://img.shields.io/badge/Sequelize-2C8EBB?style=for-the-badge&logo=sequelize&logoColor=white)

## Instalação

 - Usando chave SSH, caso não tenha a mesma,  [acesse aqui](https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), no terminal digite os seguintes comandos:

```sh
git clone git@github.com:ailsonjr/ConvTxt2Aud.git
cd ConvTxt2Aud
npm install
```

## Configuração:

 - Para criar a tabela no banco de dados e a tabela digite no terminal o comando:
``` 
npx sequelize db:create
npx sequelize db:migrate
 ```
 - Visite o site[Text to Speech do IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech), crie uma conta gratuita e use a *apikey* e a *serviceUrl* no arquivo src/service/watson.js

 Assim a aplicação está toda configurada
## Inicialização:

 - No terminal digite o comando:
```sh
npm start
```

 - Abra o seu browser e digite na barra de endereço digite: localhost:3000 e a a página carregada será como essa:

![](/public/images/exemplo.png)

### Pronto! A aplicação está pronta para ser usada!

A aplicação também se encontra hospedada na plataforma do  [HerokuApp](https://conv-txt-aud.herokuapp.com/)
