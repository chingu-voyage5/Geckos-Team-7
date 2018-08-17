import React from 'react';
import {connect} from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:"", url:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    if (e.target.name=="Title")
      this.state.title = e.target.value;
    else if (e.target.name==="Link")
      this.state.url = e.target.value;
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.title, this.state.url);
    //should submit here and set state for redux and all
    //also need to make checks
    console.log("props in handleSubmit of login", this.props)
  }
  render() {
    return (
      <form>
        <label>
          Title:
          <input onChange={this.handleChange}
          type="text"
          name="Title"
          placeholder="Title"
          required
          />
        </label>
        <label>
          Image Link
          <input onChange={this.handleChange}
          type="url"
          name="Link"
          placeholder="Image Link"
          required
          />
        </label>
        <button onClick={this.handleSubmit} disabled={this.state.isLoading}>Add</button>
      </form>
    )

  }
}

function mapStateToProps(state) {
  return {
    user : state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email,password)=>{
      dispatch(login({email,password}))
    }
  }
}

export default connect(null, null)(Form);
