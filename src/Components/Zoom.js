import React from 'react';
import "../Styles/Zoom.css"

class Zoom extends React.Component {
    render() {
        return (
            <div className='view'>
                <img className='zoomed-image' src={this.props.display.baseimageurl} alt='zoomed closer'></img>
                <div className='known-info'>
                    <h1>Catalogued Information</h1>
                    <p>{this.props.display.fileid ? "File ID: " + this.props.display.fileid : null}</p>
                    <p>{this.props.display.imageid ? "Image ID: " + this.props.display.imageid : null}</p>
                    <p>{this.props.display.date ? "Date: " + this.props.display.date : null}</p>
                    <p>{this.props.display.caption ? "Provided Caption: " + this.props.display.caption : null}</p>
                    <p>{this.props.display.technique ? "Technique / Format: " + this.props.display.technique : null}</p>
                    <p>{this.props.display.lastupdate ? "Last Updated: " + this.props.display.lastupdate : null}</p>
                    <p>{this.props.display.copyright ? "Copyright Claimed By: " + this.props.display.copyright : null}</p>
                    <p>{this.props.display.renditionnumber ? "Rendition Number: " + this.props.display.renditionnumber : null}</p>
                </div>
                <button className="button-x-close" onClick={() => { this.props.turnOff() }}>x</button>
            </div>
        )
    }
}

export default Zoom;