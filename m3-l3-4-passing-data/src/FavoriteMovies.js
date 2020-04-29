import React, { Component } from 'react';

// profiles is a list, users and movies are dictionary. We can access an item from users and movies like this.
// users[1].name and movies[2].name. Thus we are taking the corresponding value from the profiles.
class FavoriteMovies extends Component {
    render () {
        //console.log('Props', this.props)
        return (
            <ul className='favorite-movies'>
                {this.props.profiles.map((profile) => (
                    <li key={profile.id}>
                        {this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}
                    </li>
                ))}
            </ul>
        )
    }
}

export default FavoriteMovies