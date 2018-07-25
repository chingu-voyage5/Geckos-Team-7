import React , {Component} from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';

class Wall extends Component{
    constructor(props){
        super(props);
        this.state = {pinnedItems:[]}
        this.getCurrentPins = this.getCurrentPins.bind(this);
    }
    componentDidMount() {
        axios.get('/api/pins/current').then(({ data: pinnedItems }) => {
            this.setState({pinnedItems});
          });

       
    }
    getPinnedItems() {
        let images = this.state.pinnedItems.map((ele,i)=> {
            return (<div className="grid-item" key={i}>
            <img src={ele.sourceUrl} alt={ele.image}/>
            <figcaption>{ele.image}</figcaption>
            </div>);
        })
       
        
         return images;

    }
    render(){
        return(
            <div>{this.getCurrentPins}</div>
        )
    }
}
        
    
        
    


export default Wall;

