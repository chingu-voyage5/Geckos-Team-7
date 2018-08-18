import React from 'react';
import {connect} from 'react-redux';
//Each pin has a lot of information handed over to it by it's parent
//it also has access to delPin and likePin etc. 
const Pin = () => {
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

export default connect(null,null)(Pin);