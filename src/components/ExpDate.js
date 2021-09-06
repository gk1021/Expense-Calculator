import "./ExpDate.css";

function ExpDate(props){
    console.log(props);
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day= props.date.getUTCDate();
    return (
        <div className="DateMain">
            <div className="DateDay">{day}</div>
            <div className="DateMon">{month}</div>
            <div className="DateYear">{year}</div>
        </div>
    );
}
export default ExpDate;