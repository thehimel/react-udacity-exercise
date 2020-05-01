import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    const {username, numGamesPlayed } = props.user;
    return (
        <li className='user'>
            <p>Username: {username}</p>
            <p>
                Number of Games Played: {props.showGamesPlayed ? numGamesPlayed : '*'}
                {console.log(props.user)}
            </p>
        </li>
    );
};

User.propTypes = {
    showGamesPlayed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
}

export default User;