import React, {useEffect, useState} from 'react';
import Item from './Item/Item';
import {Button} from 'rbx';
import ShoppingCart from "../ShoppingCart";
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

const size = {1: 'S', 2:'M', 3:'L', 4:'XL'};

const buttonColor = selected => (
    selected ? 'success' : null
);

const SizeSelector = ({ state }) => (
    <Button.Group hasAddons>
        { Object.values(size)
            .map(value =>
                <Button key={value}
                        color={ buttonColor(value === state.size) }
                        onClick={ () => {
                            console.log("HHHHHHHHH");
                            state.setSize(value) }}
                >
                    { value }
                </Button>
            )
        }
    </Button.Group>
);

const useSelection = () => {
    const [selected, setSelected] = useState([]);
    const toggle = (x) => {
        setSelected(selected.includes(x) ? selected.filter(y => y !== x) : [x].concat(selected))
    };
    return [ selected, toggle ];
};

const ItemList = ({products, inventory}) => {
    const [size, setSize] = useState('');
    const [selected, toggle] = useSelection();
    const [addedProducts, addProducts] = useState({});

    const filterProducts = () => {
      var arr = [];
      Object.values(products).map(each => {
        if (inventory.hasOwnProperty(each['sku'])) {
          var current = each;
          current["size"] = inventory[each['sku']];
          arr.push(current);
        }
      });
      return arr;
    };

    const selectedProducts = filterProducts().filter(product => {
        if (product["size"][size] > 0){
            return true;
        }
        else {
            return false;
        }
    });

    return (
        <React.Fragment>
            <ShoppingCart products={addedProducts} />
            <SizeSelector state={ { size, setSize } } />
            <Button.Group>
                { selectedProducts.map(product =>
                    <Item key={product.sku} product={product}
                          state={ { selected, toggle } }
                            add={{addedProducts, addProducts}}>
                    </Item>)
                }
            </Button.Group>
        </React.Fragment>
    );
};

export {ItemList, buttonColor, size};
