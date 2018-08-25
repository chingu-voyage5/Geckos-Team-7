import React from 'react';
import {connect} from 'react-redux'

import {ConnectedGrid} from './grid';
import Pin from './Pin';
// import {loadPins} from '../actions/pinActions';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   //the asynch call to load pins is made in componentDidMount
  //   this.props.loadPins();
  // }
  render() {
    return (
      <div>
        <ConnectedGrid/>
        {/* <Pin/> */}
      </div>
    )
      
  }
    
}
export default DashBoard;//loading data in App
// export default connect(null, {loadPins})(DashBoard);