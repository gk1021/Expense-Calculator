import ExpItem from "./ExpItem";

function AllExpenes(props){
    
    
    return (
        <div>
        {props.data.map(exp => <ExpItem title={exp.title} date={exp.date} price={exp.price} /> )}
        </div>
    );
}
export default AllExpenes;