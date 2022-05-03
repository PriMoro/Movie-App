import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies && this.props.movies.map(m => (
            <div key={m.id}>
              <Link to={`/movie/${m.id}`} >
                <span>{m.title}</span>
              </Link>
              <button onClick={ () => this.props.removeMovieFavorite(m.id)}>X</button>
            </div>
          ) )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state){
  return{
    movies: state.moviesFavorites
  }
}

function mapDispatchToProps (dispatch){
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
} 


export default connect(mapStateToProps, mapDispatchToProps) (ConnectedList);
