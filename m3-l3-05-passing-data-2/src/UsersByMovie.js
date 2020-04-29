import React, { Component } from 'react';

class UsersByMovie extends Component {
    render() {
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movieId = this.props.movieId;
        
        // Filter the profiles who like the movie with movieID
        const theProfiles = profiles.filter(profile => (
            profile.favoriteMovieID == movieId
        ))

        // If there is no profile who likes the movie
        if (theProfiles.length == 0) {
            return (
                <p>None of the current users liked this movie</p>
            )
        }else{
            return(
                <ul>
                    <p>Liked By:</p>
                    {theProfiles.map(theProfile => (
                        // Return the names of the users taking the id from theProfile.id
                        <li key={theProfile.id}>{users[theProfile.id].name}</li>
                    ))}
                </ul>
            )

        }
    }
}

export default UsersByMovie