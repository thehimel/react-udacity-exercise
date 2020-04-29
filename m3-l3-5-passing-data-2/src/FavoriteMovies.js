import React, { Component } from 'react';
import UsersByMovie from './UsersByMovie'

class FavoriteMovies extends Component {
    render () {
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;

        const movieList = []
        for (let [key, movie] of Object.entries(movies)) {
            movieList.push(movie);
        }
        console.log(movieList);

        return (
            movieList.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.name}</h2>
                    <UsersByMovie profiles={profiles} users={users} movieId={movie.id} />
                </div>
            ))
        )
      }
}

export default FavoriteMovies