import {Card} from "rbx";
import React from "react";


const ShoppingCartItem = ({ product }) => {

    return (
            <Card className="shopping-cart">
                <Card.Image>
                    <img src={require(`../static/${product.sku}_1.jpg`)} alt="Smiley face" />
                </Card.Image>
                <Card.Header>
                    {product.title}
                </Card.Header>
                <Card.Content>
                    <Card.Header.Title>
                        price: {product.price}
                        <br/>
                        quantity: {product["shopping-cart"]}
                    </Card.Header.Title>
                </Card.Content>

            </Card>
    );


};

export default ShoppingCartItem;
