import React from 'react';
import profilePicture from "../../../static/assets/images/bio/about-image.png";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture +") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">bio owo</div>
        </div>
    )
}