<p align="center">
  <img src="./web/src/assets/logo-nlw-esports.svg" alt="Logo" width="300"/>
  <br>
</p>
<h3 align="center">
Conecte-se com jogadores dos seus jogos preferidos!
</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=esports&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/nlw-esports?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/nlw-esports?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/nlw-esports?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#nlw-esports">NLW eSports</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante a NLW eSports, evento criado pela Rocketseat. Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 11 ao dia 18 de Setembro de 2022 e teve como intuito mostrar na prática o poder da stack NodeJS + ReactJS + React Native e como essas tecnologias podem te levar até os seus maiores objetivos como programador.

![Wallpaper NLW eSports](.github/wallpaper.png)

## NLW eSports

NLW eSports é uma plataforma cujo objetivo é unir jogadores dos mais variados games para que formem seus duos e conquistem suas vitórias em co-op em seus games preferidos.

A aplicação é composta por dois frontend: mobile e web, cada qual com suas funcionalidades particulares as quais serão apresentadas a seguir.

### NLW eSports - Web

A aplicação web do NLW eSports possui como responsabilidade o cadastro de novos anúncios. É aqui onde os jogadores cadastram seus jogos de interesse, suas informações como nickname e discord e os horários que costumam jogar. ao acessar a aplicação, o usuário irá se deparar com a homepage abaixo aonde serão exibidos os games já cadastrados por outros gamers e o número de anúncios que o game possui:

![Web home](.github/web-home.png)

A única funcionalidade disponível na web é o cadastro de novos anúncios, que é feito através do formulário abaixo:

![Empty ad form](.github/web-empty-ad-form.png)

É através dele que o usuário preenche as informações que estarão disponíveis para os demais usuários que também se interessam pelo game ao qual o anuncio será criado, conforme exemplificado abaixo:

![Ad form](.github/web-ad-form.png)

Após o preenchimento das informações, o anúncio será criado e já estará disponível para os outros usuários se conectarem e iniciar as partidas em co-op rumo às vitorias 🙃.

Para ilustrar a aplicação em funcionamento, deixo abaixo um GIF onde navego pelas funcionalidades do app:

![Demo web](.github/web-demo.gif)

### NLW eSports - Mobile

Vamos falar agora sobre o aplicativo mobile da NLW eSports, suas funcionalidade e responsabilidades. Começamos pela home, que é exibida assim que o usuário acessa o app, contém as mesmas informações da home web e a única diferença aqui é que os cards dos games são clicados, mas falaremos disso em tópicos futuros:

<img src='./.github/mobile-home.png' alt='Mobile home' height='500' />

Ao clicar no game de interesse, será exibido para o usuários os anúncios criados na página web. Os cards de anúncios terão as informações do outro jogador e suas preferências, conforme podemos ver na imagem abaixo:

<img src='./.github/mobile-game-details.png' alt='Game Details' height='500' />

Ao clicar no anúncio de um jogador ao qual o usuário tem interesse de fazer um duo, o Discord do mesmo será exibido no modal abaixo:

<img src='./.github/mobile-player-info.png' alt='Player info card' height='500' />

E pronto, o usuário já pode entrar em contato com o outro player para iniciarem suas jogatinas. Ao clicar no username do Discord do outro jogador, ele é copiado para a área de transferência facilitando assim a busca no Discord:

<img src='./.github/mobile-copy-clipboard.png' alt='Discord copied to clipboard' height='500' />

O app também conta com um sistema de push notification pré implementado porém até então não funcional, conforme mostrado a seguir:

<img src='./.github/mobile-push-notification.png' alt='Mobile push notification' height='500' />

Por fim, deixo um GIF navegando pela aplicação mobile e mostrando suas funcionalidades:

<img src='.github/mobile-demo.gif' alt='Mobile demo' height='500' />

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-esports.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-esports

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-esports.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-esports

# Vá para a pasta web
$ cd web

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 5173 - acesse <http://localhost:5173>
```

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/nlw-esports.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-esports

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ yarn start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<img align="left" src="https://www.svgrepo.com/show/353722/expo.svg" alt="Expo" height="100" />

<br><br><br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
