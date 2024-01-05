import React, {useState} from "react";
import ListContext from "./list-context";

const ListProvider = (props) =>{

    const [data, setData] = useState([]);

    const addDaTatoListHandler = (gotData) => {
        setData((prevData) => {
            const newData = [...prevData, gotData];
            return newData;
        })
    }
    const updateQuantity = (id, newQuantity) => {
        setData((prevData) => {
            return prevData.map(item =>//prev data ke array me per object ke liye dekhe ki agar id match hui same product ki to wo specific object of item ki quantity update kr denge baki items nonChangable hue
                item.id === id ? { ...item, quantity: item.quantity - newQuantity } : item
            );//jo bhi newQuantity aayi  1 2 ya 5 to usko minus kr diye us perticular item ki quantity se
        });
    }
    const removeDataToListHandler = (id) =>{
        setData(data.filter(item => item.id !== id));
    }

    const listContext = {
        data: data,
        addData: addDaTatoListHandler,
        removeData: removeDataToListHandler,
        updateQuantity: updateQuantity,
    }
    return (
        <React.Fragment>
            <ListContext.Provider value={listContext}>
                {props.children}
            </ListContext.Provider>
        </React.Fragment>
    )
}

export default ListProvider;

/* addDataHandler me form se input data leke new array create kiye prev and latest data ka aur set kr diye, updateQuantity alag se fn banana pada taki bina addData ko call kiye hm specific item ki quantity change kr sake agar addData fn ko use krte to fir newArray banta aur state change hota to new list create hoti again fir ye data se MedicineList me hmne sb show kr diya */