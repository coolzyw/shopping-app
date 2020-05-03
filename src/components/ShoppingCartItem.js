import {Card, Button} from "rbx";
import React, {useEffect, useState} from 'react';


const ShoppingCartItem = ({ product, remove}) => {

    useEffect(function() {
        const id = setInterval(function log() {
            console.log("Count is:", remove.addedProducts);
            console.log(product["shopping-cart"]);
        }, 2000);
        return function() {
            clearInterval(id);
        }
    }, [remove.addedProducts]);



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
                        {
                            Object.entries(product["shopping-cart"]).map(([key, value]) =>
                                // Pretty straightforward - use key for the key and value for the value.
                                // Just to clarify: unlike object destructuring, the parameter names don't matter here.
                                <Button> {key} : {value} </Button>
                            )
                        }
                        <Button onClick={() => {
                            var prev = remove.addedProducts;
                            if (prev[product["sku"]] > 1) {
                                prev[product["sku"]] -= 1;
                            }
                            else {
                                delete prev[product["sku"]];
                            }
                            console.log("after delete", prev);
                            remove.addProducts(prev);
                        }}> Remove </Button>
                    </Card.Header.Title>
                </Card.Content>

            </Card>
    );


};

export default ShoppingCartItem;
