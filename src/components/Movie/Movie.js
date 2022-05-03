import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    // una vez renderizado el componente se ejecuta.
    // tomo el valor del parametro, id, y busco el detalle de la pelicula
    // lo hacemos con el id, para evitar perder la info ante un refresh
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId); // despacha la acción,
        // se llena el estado de movieDetail
    }


    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h1> {this.props.movie.Title} </h1>
                <h2> {this.props.movie.Year} </h2>
                <h2> {this.props.movie.Rated} </h2>
                <h2> {this.props.movie.Released} </h2>
                <h2> {this.props.movie.Genre} </h2>
                <img src={this.props.movie.Poster} alt="img" /> 
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return {
        // getMovieDetail funcion que recibe una propiedad que despacha una acción,
        // la accion despachada es getMovieDetail
        getMovieDetail: movieId => dispatch(getMovieDetail(movieId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Movie);