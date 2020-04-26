import {Button} from "rbx";
import Popup from "reactjs-popup";
import React from "react";


const ShoppingCart = (host) => {
    return (
       // <Popup trigger={<Button> Shopping Cart </Button>} position="bottom center" modal closeOnDocumentClick>
           // <div> shopping cart </div>

        //</Popup>

        <Popup trigger={<Button> Shopping Cart </Button>} position="top left" modal>
            {close => (
                <div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    Shopping Cart
                </div>
            )}
        </Popup>



    );
};

export default ShoppingCart;
