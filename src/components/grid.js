import React from 'react';
import Masonry from 'masonry-layout';

import projects from '../links.json';
import '../css/style.css';

import Pin from './Pin';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {items: []}
    }
    componentDidMount() {
        
       var elem = document.querySelector('.grid');
        
        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
       //msnry.layout();
       setTimeout(function() {
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

export {Grid};
