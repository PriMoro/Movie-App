
/*En nuestro archivo index.js en nuestra carpeta actions. Por ahora vamos a crear 4 actions. 
Una para hacer la request a la API y traer todas las peliculas getMovies,otra para traer los detalles 
de la pelicula especifica getMovieDetail, a otra para agregarlas como Favoritas addMovieFavorite y otra 
para eliminarla de favoritas removeMovieFavorite.*/ 

export function addMovieFavorite(title){
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload: title
  }
}

export function removeMovieFavorite(id){
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: id
  }
}

export function getMovieDetail (id){
    return function (dispatch){
        return fetch("http://www.omdbapi.com/?apikey=66cf14dd&i=" + id)
        .then(r => r.json())
        .then(detail => {
            dispatch({ type: "GET_MOVIES_DETAIL", payload: detail });
          })
    }
}

// se dispacha una acción con title. getMovies se encarga de buscar la info 
// la traduce en un objeto, cuando termina la manda al dispatch 
export function getMovies (title) {
        return function(dispatch) {
                                // buscador de peliculas
            return fetch("http://www.omdbapi.com/?apikey=66cf14dd&s=" + title)
            // tambien se podría haber usado comillas invertidas
              .then(response => response.json())
              .then(movies => {
                dispatch({ type: "GET_MOVIES", payload: movies });
              });
          };
    }

