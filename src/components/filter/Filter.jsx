import React from 'react';
import "./filter.scss";

const data = [
    {name:"Everyday"},
    {name:"Kada Baracelet"},
    {name:"Occasion"},
    {name:"Tennis Bracelet"},
    {name:"Bangles"},
    {name:"Casual"}
]

const Filter = () => {
  return (
    <div className='filter'>

        {
            data.map((item, index) => {
                return (
                    <div className="filter_item" key={index}>
                        <div className="filter_name">{item.name}</div>
                    </div>
                )
            })
        }
        

    </div>
  )
}

export default Filter