const comments = document.querySelector('.comments');
const textarea = document.querySelector('#textarea-comment');
const url = 'http://localhost:3000/comments';

axios.get(url, {})
  .then(res => {
    return res.data;
  })
  .then(data => data.forEach(comment => {
    const button = document.createElement('button');
    const p = document.createElement('p');
    button.classList.add('btn', 'btn-outline-dark', 'flex-shrink-0');
    button.setAttribute('id', 'play');
    button.innerHTML = 'Ouvir';
    p.classList.add('lead');
    p.innerText = comment.comment;
    comments.appendChild(p);
    comments.appendChild(button);
    button.addEventListener
  }));

function convertText(com) {

}


    // const play = document.querySelector('#play')
    // play.addEventListener('click', function () {
    //   const audio = document.querySelector('audio')
    //   audio.play
    // });