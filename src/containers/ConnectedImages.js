import React from 'react'
import {connect} from 'react-redux';

import Images from '../components/Images'

const mapStateToProps = (state)=>{
  return {
    items : state.items
  }
}

const ConnectedImages = connect(mapStateToProps)(Images);

export default ConnectedImages;
