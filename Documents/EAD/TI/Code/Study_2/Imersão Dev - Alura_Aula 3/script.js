var filmes = [ "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg", 
  "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg", 
  "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYTJhZDk4NGQtNTM3Ny00ODg0LThlNDktY2U1MjZmMDdhMWNkXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
];

var nomeFilmes = ["Harry Potter e a Pedra Filosofal", "Harry Potter e a Câmara Secreta", "Harry Potter e o Prisioneiro de Azkaban", "Harry Potter e o Cálice de Fogo", "Harry Potter e a Ordem da Fênix", "Harry Potter e o Enigma do Príncipe", "Harry Potter e as Relíquias da Morte - Parte 1", "Harry Potter e as Relíquias da Morte - Parte 2", ];

for (i=0;i<filmes.length;i++){
  document.write("<img src=" + filmes[i] + ">");
  document.write("<p" + nomeFilmes[i] + "</p>");
}
