import {Card} from "rbx";
import React from "react";


const Item = ({ product }) => {
    return (
        <ul>
            <Card>
                <Card.Image>
                </Card.Image>
                <Card.Header>
                    {product.title}
                    <Card.Header.Title>
                        {product.price}
                    </Card.Header.Title>

                </Card.Header>
                <Card.Content>
                    {product.description}
                </Card.Content>
            </Card>
            <br/>
        </ul>
    );


};

export default Item;
