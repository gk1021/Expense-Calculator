import ExpDate from "./ExpDate";
import "./Expitem.css";

function ExpItem(props){
    const expDate=props.date;
    const expItem=props.title;
    const expAmount=props.price;
    return (<div className="main">
        <ExpDate date={expDate}></ExpDate>
        <div className="name">
            {expItem}
        </div>
        <div className="price">
            {expAmount}
        </div>
    </div>)
}

export default ExpItem;