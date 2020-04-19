import React, {useState} from 'react';
import {Button} from 'rbx';
import Item from './Item/Item';



const ItemList = ({products}) => {
    return (
        <ul>
            {products.map(product =>
                <Item key={product.sku} title={product.title}> </Item>
            )}
        </ul>
    );
};

export default ItemList;
