import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import {delMsg} from '../actions/flashMessages'

class FlashMsgs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {msgs, delMsg} = this.props;
        console.log("msgs is", msgs);
        // const messages = msgs.map((msg)=><li key={msg.id}>{msg.text}</li>)
        const messages = msgs.map((msg)=><FlashMsg key={msg.id} msg={msg} delMsg={delMsg}/>)
        return (
            <div>
                    {messages}
            </div>
        )
    }
}

function FlashMsg({msg, delMsg}){
    const handleClick = (e)=>{
        console.log("msg and props", msg, typeof msg.id, delMsg);
        delMsg(msg.id);
    }
    return (
        <div className={classnames('alert', {
            'alert-success': msg.type === 'success',
            'alert-danger': msg.type === 'error'
        })}>
            {msg.text}
            <button className='close'onClick={(msg)=>handleClick(msg)}><span>&times;</span></button>
        </div>
    )
}


const mapStateToProps = (state)=> {
    return {
        msgs:state.flashMsgs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delMsg : (id)=>dispatch(delMsg(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlashMsgs);
//will pass state and dispatch to FlashMsg from here