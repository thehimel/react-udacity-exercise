// Solution to ex2
import React, { Component } from 'react';

// profiles is a list, users and movies are dictionary. We can access an item from users and movies like this.
// users[1].name and movies[2].name. Thus we are taking the corresponding value from the profiles.
class FavoriteMovies extends Component {
    render () {
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;

        const favorite_movies = [];

        for (let [key, movie] of Object.entries(movies)) {
            console.log(`${movie.name} is liked by `);
            
            const theProfiles = profiles.filter(profile => (
                profile.favoriteMovieID == movie.id
            ))

            if (theProfiles.length == 0) {
                console.log('None');
                console.log('\n')
            }else{
                theProfiles.map(theProfile => (
                    console.log(users[theProfile.id].name)
                ))
                console.log('\n')
            }
        }

        return (
        <div>{movies[1].name}</div>
        )
      }
}

export default FavoriteMovies