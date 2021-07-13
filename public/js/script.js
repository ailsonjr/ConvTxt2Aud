const comments = fetch("http://localhost:3000/comments").then(comment => comment.comment);

console.log(comments);


const play = document.querySelector('#play')
play.addEventListener('click', function () {
  const audio = document.querySelector('audio')
  audio.play
});