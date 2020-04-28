import {Button} from "rbx";
import Popup from "reactjs-popup";
import React from "react";
import ShoppingCartItem from "./components/ShoppingCartItem";


const ShoppingCart = ({added, products}) => {

    const getInfo = () => {
        var addedPro = added.addedProducts;
        var arr = [];
        products.map(product => {
            if (addedPro.hasOwnProperty(product["sku"])) {
                product["shopping-cart"] = addedPro[product["sku"]];
                arr.push(product);
            }
        });
        return arr;
    };

    return (
        <Popup trigger={<Button> Shopping Cart </Button>} position="bottom center" modal>
            {close => (
                <div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    Shopping Cart
                    {
                        getInfo().map(each =>
                        <ShoppingCartItem key={each.sku} product={each} remove={added}> </ShoppingCartItem>)
                    }
                </div>
            )}
        </Popup>
    );
};

export default ShoppingCart;
