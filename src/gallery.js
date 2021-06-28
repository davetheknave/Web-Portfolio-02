import React from 'react';


class GalleryImage extends React.Component {
    render(){
        return (
            <a className="gallery-item" href={this.props.link}>
            <div className="gallery-item-thumb">
                <img src={this.props.image} alt={this.props.text}/>
            </div>
            <h4 className="caption">{this.props.text}</h4>
            </a>
        )
    }
}

class Gallery extends React.Component {
    getGallery(){
        var gallery = [];
        for (const entry of this.props.items) {
            gallery.push(<GalleryImage link={entry["link"]} text={entry["name"]} image={entry["image"]}/>);
        }
        return gallery
    }
    render(){
        return (
            <div className="gallery gallery-grid">{this.getGallery()}</div>
        )
    }
}

export default Gallery;