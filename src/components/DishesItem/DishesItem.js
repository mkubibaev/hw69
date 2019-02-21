import React from 'react';

const DishesItem = props => {
    return (
        <div className="card mb-3">
            <img src={props.imgUrl} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price} KGS</p>
                <button className="btn btn-info">Add to cart</button>
            </div>
        </div>
    );
};

export default DishesItem;
