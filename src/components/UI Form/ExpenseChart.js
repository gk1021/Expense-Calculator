import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import Chart from "./Chart";

const Expensechart = (props) => 
{
    const datapoint=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
]

for(const exp of props.expense){
    console.log(props);
    console.log(exp.date);
    const month=exp.date.getMonth();
    datapoint[month].value+=exp.price;
}
return <Chart datapoint={datapoint}/>
}
export default Expensechart;