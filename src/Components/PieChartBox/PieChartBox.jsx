import React from 'react'
import { ResponsiveContainer, PieChart, Line, Tooltip } from "recharts";

const data = [
    {name : "Mobile", value:400, color : "#0088fe"},
    {name : "Desktop", value:300, color : "#00c49f"},
    {name : "Laptop", value:300, color : "#ffbb28"},
    {name : "Tablet", value:200, color : "#ff8042"},
]

const PieChartBox = ({data}) => {

 const {name, value, color} = data

  return (
    <div className='pieChartBox'>




    </div>
  )
}

export default PieChartBox