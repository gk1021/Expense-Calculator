import "./FormFront.css";
import React, { useState } from 'react';
function FormFront(props)
{
    const [flag,changeFlag] = useState(0);
    const [title,setTitle]=useState();
    const [amount,setAmount]=useState();
    const [date,setDate]=useState();

    function canceled(event){
        changeFlag(0)
    }

    function newExp(event){
        changeFlag(1);
    }

    function submitted(event){
        event.preventDefault();
        const lis={
            id: Math.random(),
            title :title,
            date :new Date(date),
            price :amount,
        }
        props.onDataArrival(lis);
        setTitle('');
        setAmount('');
        setDate('');
        
    }
    function titleChanged(event){
        setTitle(event.target.value);
        
    }
    function amountChanged(event){
        setAmount(event.target.value);
       
    }
    function dateChanged(event){
        setDate(event.target.value);
       
    }
    if (flag==0){
        
        return <div className="mainForm1">
            <button className="newButton" onClick={newExp}>Add New Expense</button> 
        </div>

    }
    else{
    return <div> 
    <div className="mainForm">
        <form>
            <div className="title">
            <label className="title-label">Title</label>
            <input type="text" value={title} onChange={titleChanged}/>
            </div>
            <div className="amount">
            <label className="amount-label">Amount</label>
            <input type="number" value={amount} onChange={amountChanged}/>
            
            <label className="date-label">Date</label>
            <input type="date" value={date} onChange={dateChanged}/>
            </div>
            <br/><br/><br/>
            
            <div className="buttons">
                <button className="cancel" onClick={canceled}>Cancel</button>
                <button className="submit" onClick={submitted}>Add Expense</button>
            </div>

        </form>
    </div>
    </div>
}
}

export default FormFront;