import {Button} from "rbx";
import Popup from "reactjs-popup";
import React from "react";
import ShoppingCartItem from "./components/ShoppingCartItem";
import firebase from "./shared/firebase";

const db = firebase.database();


const ShoppingCart = ({added, products, inventory}) => {

    const getInfo = () => {
        var addedPro = added.addedProducts;
        var arr = [];
        products.map(product => {
            if (addedPro.hasOwnProperty(product["sku"])) {
                product["shopping-cart"] = addedPro[product["sku"]];
                arr.push(product);
            }
        });
        console.log("shopping cart", arr);
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
                    <Button onClick={() => {
                        console.log(added.addedProducts);
                        Object.entries(added.addedProducts).map(([key, value]) =>
                            {
                                // Object.entries(value).map(([size, buy]) => {
                                    // db.ref("products/" + key).set(products[key][key]);
                                // };
                                console.log("hh", value);
                                Object.keys(value).forEach((size) => {
                                    console.log("test", value[size]);
                                    console.log("local", inventory);
                                    console.log("products/" + key + "/" + size);
                                    db.ref("inventory/" + key + "/" + size).set(inventory[key][size] - value[size])
                                        .then( () => {
                                                console.log("success");
                                                alert("Event is successfully created!");
                                                window.location.reload(false);
                                            }
                                        )
                                    .catch( (error) => {
                                        console.log(error);
                                    });
                                });
                            }
                        )
                    }}> Checkout </Button>
                    <div>
                        {
                            getInfo().map(each =>
                                <ShoppingCartItem product={each} remove={added}> </ShoppingCartItem>)
                        }
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default ShoppingCart;
