import {Button, Dropdown} from "rbx";
import React, {useState} from "react";

const buttonColor = selected => (
    selected ? 'success' : null
);

const size = {O: 'XS', 1: 'S', 2:'M', 3:'ML', 4:'L', 5:'XL', 6:'XXL'};

const Preference = ({state}) => {
    console.log(state);
    return (
        <div>
            Size:
            <Button.Group>
                {
                    Object.values(size)
                        .map(value =>
                            <Button key={value}
                                    color={ buttonColor(value === state.size) }
                                    onClick={ () => state.setSize(value) } >
                                { value }
                            </Button>
                        )
                }
            </Button.Group>
        </div>
    )
};

export default Preference;
