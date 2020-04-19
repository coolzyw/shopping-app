import {Card} from "rbx";
import React from "react";

var divStyle = {
    width: '30%',
    float: 'left',
    margin: '10px',
    height: '70%'
};

const Item = ({ product }) => {
    return (
        <div style={divStyle}>
            <Card>
                <Card.Image>
                    <img src={require(`../../static/${product.sku}_1.jpg`)} alt="Smiley face" />
                </Card.Image>

                <Card.Header>
                    {product.title}
                    {product.description}
                    <Card.Header.Title>
                        {product.price}
                    </Card.Header.Title>
                </Card.Header>

            </Card>
            <br/>
        </div>
    );


};

export default Item;
