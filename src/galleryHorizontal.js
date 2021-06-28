import React from 'react';


class GalleryHImage extends React.Component {
    render(){
        return (
            <a className="gallery-item" href={this.props.link}>
            <div className="gallery-item-thumb">
                <img src={this.props.image} alt={this.props.title}/>
            </div>
            <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>

            </div>
            </a>
        )
    }
}

class GalleryHorizontal extends React.Component {
    getGallery(){
        var gallery = [];
        for (const entry of this.props.items) {
            gallery.push(<GalleryHImage link={entry["link"]} title={entry["name"]} image={entry["image"]} text={entry["text"]}/>);
        }
        return gallery
    }
    render(){
        return (
            <div className="gallery gallery-horizontal">{this.getGallery()}</div>
        )
    }
}

export default GalleryHorizontal;