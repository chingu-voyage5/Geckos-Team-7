import React from 'react';
const Card = () => {
    return (
        <div>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg' alt="image"/>
            <ul>
                <li>
                    <button>Del</button>
                </li>
                <li>
                    <button>Like</button>
                </li>
                <li>
                    <span>N</span>
                </li>
            </ul>
        </div>
    )
}

export default Card;