import AllExpenes from "./components/AllExpenes";
import ExpensesFilter from "./components/Expensefilter";
import FormFront from "./components/UI Form/FormFront";
import { useState } from "react";
import ExpenseChart from "./components/UI Form/ExpenseChart";
function App() {
  let year = '2022';
  const data_dummy=[
    {
      id: 1,
    title :'Car Insurance',
    date : new Date(2021,1,3),
    price :249,
    },
    {
      id : 2,
      title :'Car Insurance2',
      date : new Date(2021,12,22),
      price :509,
      },
    ];

const [data,addExpense] = useState(data_dummy);
const [filtered_data,newFilters] = useState(data.filter((exp1) => { return exp1.date.getFullYear().toString()==year}));

const newExpenseData = (newExpense) =>
{
  year=newExpense.date.getFullYear();
  
  addExpense((prevExpenses) => { return [newExpense,...data]; });
  
  
};

const changedYear = (year) =>
{
  console.log("before");
  console.log(data);
  newFilters(data.filter((exp1) => { return exp1.date.getFullYear().toString()==year}));

}

if(filtered_data.length==0){
  return (
    <div>
      <FormFront onDataArrival={newExpenseData} ></FormFront>
      <ExpensesFilter onChanged={changedYear}></ExpensesFilter>
      <h2 align="center">No data to Display</h2>
      </div> );
}
  return (
    <div>
      <FormFront onDataArrival={newExpenseData} ></FormFront>
      <ExpensesFilter onChanged={changedYear}></ExpensesFilter>
      <ExpenseChart expense={filtered_data}></ExpenseChart>
      <AllExpenes data={filtered_data}></AllExpenes>
     
    </div>
  );
}

export default App;
