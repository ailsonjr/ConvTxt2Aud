/*!
* Start Bootstrap - Shop Item v5.0.1 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const comments = document.querySelector('.comments');

const url = 'db';

fetch(url).then(res => {
  return res.json();
}).then(data => data.map(comment => {
  const button = document.createElement('button');
  const p = document.createElement('p');
  button.classList.add('btn', 'btn-outline-dark', 'flex-shrink-0');
  button.setAttribute('id', 'play');
  button.innerHTML = 'Ouvir';
  p.classList.add('lead');
  p.innerText = comment.comment_text;
  comments.appendChild(p);
  comments.appendChild(button);
}));

{/* <p class="lead">API criada para converter textos em audio, ao clicar no botão Ouvir, o mesmo faz uma request
              para a API da IBM </p>
            <p>{<%- %>}</p>
            <div class="d-flex">
              <button id="play" class="btn btn-outline-dark flex-shrink-0" type="button">
                Ouvir
              </button>
              <audio src="" />
            </div> */}