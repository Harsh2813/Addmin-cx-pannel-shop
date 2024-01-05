import React from "react";

const ListContext = React.createContext({
    data: [],
    addData: (data) => {}, //global store banaye default addData pura object/item of array ko add krne ke liy array me aur removeData me id liye specific object ko remove krne ke liye
    removeData: (id) => {},
    updateQuantity: (id, qnt) => {},
});

export default ListContext;