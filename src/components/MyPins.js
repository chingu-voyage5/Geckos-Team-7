import React from 'react';
import {connect} from 'react-redux'

import {Grid} from './grid';


const MyPins = ({pins, userId})=>{
  console.log("In my Pins, pins and userId", pins, userId);
  const filterPins = pins.filter((pin)=>pin.userId===userId)
  console.log("pins after filtering", filterPins);
  return (
    <div>
      <Grid pins={filterPins}/>
    </div>
  ) 
}

const mapStateToProps = (state) => {
  return {
    pins: state.pins.pins,
    userId : state.auth.id
  }
}

export default connect(mapStateToProps, null)(MyPins);