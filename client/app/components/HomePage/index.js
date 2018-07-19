// import React from 'react';
// import Masonry from 'react-masonry-component';
// import './grid.css';



// const masonryOptions = {
//     transitionDuration: 0
// };

// const imagesLoadedOptions = { 
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//  }

// class Gallery extends React.Component {
//     constructor(props){
//         super(props);
//         //later this will be an empty array , img fed in by backend via fetch
//         this.state={elements:[
//             {src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"},
//             {src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"},
//             {src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"},
//             {src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"},
//             {src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"},
            
//         ]}
//         this.onPinned = this.onPinned.bind(this)
//     }
//     onPinned(e){
//         const { history } = this.props;
//         history.push("/my-wall")
//     }

//     //get the img from the backend and render it on screen
//     render() {
//         var that = this;
//         const childElements = this.state.elements.map(function(element,index){
//             return (
//                  <div key={index} className='grid-item' onClick={that.onPinned}>
//                      <img src={element.src} />
//                  </div>
//              );
//          });
//          return (
//             <Masonry
//             className={'.grid'} // default ''
//             elementType={'div'} // default 'div'
//             options={masonryOptions} // default {}
//             imagesLoadedOptions={imagesLoadedOptions}
//             disableImagesLoaded={false} // default false
//             updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//         >
//         <div className="grid-sizer"> {childElements}</div>
       
        
            
//         </Masonry>
//         );
        
        

        
        
    
        
//     }
// }
 
// export default Gallery

import React from 'react';
import Masonry from 'masonry-layout';

import projects from './links.json';
import './grid.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {items: []}
    }
    componentDidMount() {
        //this.setState({items:projects});
        //this.createGrid();
        /*
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
        setTimeout(function() {
            console.log("Masonry layout", msnry);
            msnry.layout();
        },5000)
        */
       var elem = document.querySelector('.grid');
        
        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
       //msnry.layout();
       setTimeout(function() {
           /*
        var elem = document.querySelector('.grid');
        
        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
        */
        console.log("Masonry layout", msnry);
        msnry.layout();
    },2000);//doing this so that all images would have loaded in 5 seconds
    //better way would be to do msnry.layout() after each image loads
    //This would not work great if there were a lot of images
    }
    createGrid() {
        console.log(Masonry);
        console.log(projects);
        let items = projects.map((ele,i)=> {
            return (<div className="grid-item" key={i}>
            <img src={ele.img} alt="image"/>
            </div>);
        })
        console.log("items is", items);
        
        
        
        return items;

    }
    render() {
        
        return (
            <div className="grid">
                <div className="grid-sizer"></div>
                {this.createGrid()}
            </div>
        )
    }
}

export default Gallery;
