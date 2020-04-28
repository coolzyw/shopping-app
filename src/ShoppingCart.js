import {Button} from "rbx";
import Popup from "reactjs-popup";
import React from "react";
import ShoppingCartItem from "./components/ShoppingCartItem";


const ShoppingCart = ({added, products}) => {

    const getInfo = () => {
        var arr = [];
        products.map(product => {
            if (added.hasOwnProperty(product["sku"])) {
                product["shopping-cart"] = added[product["sku"]];
                arr.push(product);
            }
        });
        return arr;
    };

    return (
        <Popup trigger={<Button> Shopping Cart </Button>} position="top left" modal>
            {close => (
                <div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    Shopping Cart
                    {
                        getInfo().map(each =>
                        <ShoppingCartItem product={each}> </ShoppingCartItem>)
                    }
                </div>
            )}
        </Popup>
    );
};

export default ShoppingCart;
