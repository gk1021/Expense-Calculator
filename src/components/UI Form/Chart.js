import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    
    const datavalue= props.datapoint.map(dataval => dataval.value);
    console.log(datavalue);
    const maxValue=Math.max(...datavalue);
    console.log(props.datapoint);
    return <div className="chart">
        {props.datapoint.map((dp) => (
            <ChartBar
            key={dp.key}
            value={dp.value}
            maxValue={maxValue}
            label={dp.label}
            />
        ))}
    </div>
}

export default Chart;