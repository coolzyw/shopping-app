import {Card, Button} from "rbx";
import React from "react";
import {buttonColor} from "../ItemList";

var divStyle = {
    width: '30%',
    float: 'left',
    height: '50%'
};

const Item = ({ product, state, add}) => {

    return (
        <div style={divStyle} color={ buttonColor(state.selected.includes(product))}
             onClick={ () => state.toggle(product) }>
            <Card>
                <Card.Image>
                    <img src={require(`../../static/${product.sku}_1.jpg`)} alt="Smiley face" />
                </Card.Image>

                <Card.Header>
                    {product.title}
                </Card.Header>
                <Card.Content>
                    {product.description}
                    <Card.Header.Title>
                        {product.price}
                    </Card.Header.Title>
                    <Button key={product.sku} onClick={()=> {
                        var prev = add.addedProducts;
                        if (prev.hasOwnProperty(product["sku"]) && prev[product["sku"]] != NaN) {
                            prev[product["sku"]] += 1;
                        }
                        else {
                            prev[product["sku"]] = 1;

                        }
                        console.log(prev);
                        add.addProducts(prev);
                    }}>
                        Add
                    </Button>
                </Card.Content>

            </Card>
            <br/>
        </div>
    );


};

export default Item;
