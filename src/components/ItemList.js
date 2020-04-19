import React, {useState} from 'react';
import Item from './Item/Item';



const ItemList = ({products}) => {
    return (
        <React.Fragment>
            {products.map(product =>
                <Item key={product.sku} product={product} >
                </Item>
            )}
        </React.Fragment>
    );
};

export default ItemList;
