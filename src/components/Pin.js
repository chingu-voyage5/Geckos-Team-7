import React from 'react';
import {connect} from 'react-redux';

import '../css/style.css';
//Each pin has a lot of information handed over to it by it's parent
//it also has access to delPin and likePin etc. 
import {removePin, likePin, unlikePin} from '../actions/pinActions';
class Pin extends React.Component {
  constructor (props) {
    super(props);
    //localized states.
    //can use this from store but using this so that instant like effect
    const liked = (this.props.auth.loggedIn!==false && 
      this.props.pin.likes.indexOf(this.props.auth.id)!==-1);
    this.state = {
      liked: liked,
      nLikes:this.props.pin.likes.length
    }
  }
  
  render() {
    //PROPS has all properties passed by a) parent
    //b.) mapStateToProps c.) mapDispatchToProps
    const {id, title, likes, url, userId} = this.props.pin;

    //following two items change only when a person logs in or logs out
    //so good to keep them as props
    const likeDisabled = !this.props.auth.loggedIn;
    //del button is only visible if loggedIn user is the one who created the pin
    const delVisible = this.props.auth.id === userId;
    //console.log("some props passed down to pin are:", props);
    const delButton = 'Del';
    const likesButton = 'Like';
      const unLikeButton = (
      <button className='btn btn-primary'
        onClick={()=>{
          //user has liked this pin. CLicking it should trigger an unLike
          //Local states + asynch + store states.
          this.setState({liked:false, nLikes:this.state.nLikes-1})
          this.props.unlikePin(id, this.props.auth.id);//asynch + store
        }}
        disabled={likeDisabled}>{likesButton}
      </button>
    );
    const likeButton = (
      <button className='btn'
        onClick={()=>{
          //user has not liked this pin. Clicking it should trigger a like
          //Local states + asynch + store states.
          this.setState({liked:true, nLikes:this.state.nLikes+1})
          this.props.likePin(id, this.props.auth.id);//asynch + store
        }}
        disabled={likeDisabled}>{likesButton}
      </button>
    );

    return (
      <div className='card'>
        <div className='card-body'>
          <h4 className='class-header'>{title}</h4>
          <img src={url} alt=''/>
          <ul className='card-footer'>
              <li>
                {delVisible && <button className='btn' onClick={()=> {
                  console.log(id);
                  this.props.removePin(id)}}>{delButton}</button>}
              </li>
              <li>
                  {this.state.liked?unLikeButton:likeButton}
              </li>
              <li>
                  <span>{this.state.nLikes}</span>
                  {/* Below line is slower because it updates 
                  state when likes update in server is successful
                  That's why using a local state for Pin*/}
                  {/* <span>{likes.length}</span> */}
              </li>
          </ul>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state)=> {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,{removePin, likePin, unlikePin})(Pin);