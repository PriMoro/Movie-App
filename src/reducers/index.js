const initiaState = {
    moviesLoaded: [],
    moviesFavorites: [],
    movieDetail: {}
}


//{ type: "GET_MOVIES", payload: movies }
export default function rootReducer ( state = initiaState, action )
{
    switch ( action.type )
    {
        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search // porque en el json, la pelicula esta dentro de Seach
            }
        case "GET_MOVIES_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }
        case "ADD_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: [...state.moviesFavorites, action.payload]
                // otra opción valida: state.moviesFavorites.concat(action.payload)
                // no se puede hacer push, porque este modifica el arreglo en sí y no devuelve nada,
                // concat y spread, modifican, concatenan y devuelven un nuevo arreglo
            } 
            case "REMOVE_MOVIE_FAVORITE":
                return {
                    ...state,
                    moviesFavorites: state.moviesFavorites.filter(e => e.id !== action.payload )
                    // podemos usar un filter porque devuelve un  nuevo arreglo y cumple con ser una 
                    // funcion pura, ante mismo input mismo output
                }
        default:
            return { ...state };
    }
}