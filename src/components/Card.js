import React from "react";

function Card(props) { 
    return (
        <div className="card">
            <div className="quote-box">
                <i className="fa fa-quote-left"></i>
                <span className="quotePar">{props.quote}</span>
                <i className="fa fa-quote-right"></i>
            </div>
            <div className="author-box">
                <span className="authorPar">- {props.author}</span>
            </div>
        </div>
    );
};

export default Card;