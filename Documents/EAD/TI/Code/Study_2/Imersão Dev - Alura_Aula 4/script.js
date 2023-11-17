function adicionarFilme() {
  var favFilme = document.getElementById('filme').value;
  var elementListFilmes = document.getElementById('listaFilmes');
  elementListFilmes.innerHTML = elementListFilmes.innerHTML + ('<img src=' + favFilme + '>');
  document.getElementById('filme').value = '';
}


//https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg
