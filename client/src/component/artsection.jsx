import React from "react";
import ScreenIcon from "../assets/articonn.png";
import './artsection.css';

const ArtSection =()=>{
    return(
        <div className="section-left-art">
            <div className="art-img-bg">
                <img src={ScreenIcon} alt="art-icon" className="art-icon-img"/>
            </div>
            <div className="left-quote-one">Welcome aboard my friend</div>
            <div className="left-quote-two">just a couple of clicks and we start</div>
        </div>
    )
}
export default ArtSection;