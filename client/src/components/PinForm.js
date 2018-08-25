import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from './TextFieldGroup';
import validateNewPin from '../validations/pins';
import {createPin} from '../actions/pinActions';
import {addMsg} from '../actions/flashMessages';
//Pinning form will be here! It needs authentication. Can see form only if authorized
class PinForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title:"", url:"", isLoading:false, errors:{}};
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(e) {
        this.setState({[e.target.name]:e.target.value})
      }
      isValid() {
          const {errors, isValid} = validateNewPin({sourceUrl:this.state.url, image:this.state.title});
          //those are the variable names in backend: validation, route api and model
          //in component, using type='text' for url so that
          //default behavior or html5 for url doesn't kick in.
          if (!isValid) {
              console.log('need to verify stuff');
              this.setState({errors})
          }
          return isValid;
      }
      onSubmit(e) {
        e.preventDefault();
        //FE validate
        //submit. Uses thunk
        //handle backend response
        console.log("props in handleSubmit of login", this.props)
        if(this.isValid()) {
            console.log("valid input");
            this.setState({errors:{}, isLoading: true});
            this.props.createPin({image:this.state.title, sourceUrl:this.state.url}).then(
                (res)=>{console.log("element created");
                //this res doesn't have pincreated details
                console.log("props inside create Pin", this.props);
                this.props.addMsg({
                    type: 'success',
                    text: "Pin created"
                });
                this.context.router.history.push('/');
                ////Should trigger addPin action
                ////to add pin to the store state.
            },
                (err)=>{console.log("this functions will execute to display error: ",err);
                //In case of creating pin this error whould occur only when some server error
                //or maybe if json token is wrong in setAuthheader. 
                //or in localStorage and page gets refreshed then setAuthHeader takes from there
                //in local storage but setAuthHeader is right, pin will be created.
                //genrally it will be 401 error
                this.setState({errors:{submit:"Un-authorised to create Pin. Please re-login"}, isLoading:false})}
            )
        }
      }
      render() {
          const {title, url, errors, isLoading} = this.state;
        return (
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <form onSubmit={this.onSubmit}>
                    <h1>Pin Image</h1>
                        <TextFieldGroup
                        field="title"
                        label="Title"
                        value={title}
                        error={errors.title}
                        onChange={this.onChange}
                        type='text'
                        />

                        <TextFieldGroup
                        field="url"
                        label="Image Url"
                        value={url}
                        error={errors.url}
                        onChange={this.onChange}
                        type='text'
                        />
                        <div className="form-group has-error">
                            {/*Message displayed after response from server*/}
                            <span className="help-block has-error">{errors.submit}</span>
                        </div>
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>Add</button>
                </form>
              </div>
            </div>
        )
    
      }
}

PinForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, {createPin, addMsg})(PinForm);

