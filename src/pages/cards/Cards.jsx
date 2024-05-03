import React from 'react'
import "./cards.scss";

const data = [
    {link:"https://jewelbox.co.in/wp-content/uploads/2023/12/WBR0112-3.jpg",name:"Heartbeat Diamond Bracelet",price:"₹17,967"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/02/WBG0100-1.jpg",name:"Cool Waves Diamond Bangle",price:"₹148,849"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2023/12/WBR0114-3.jpg",name:"Evil Eye Diamond Bracelet",price:"₹33,049"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/02/WBR0171-front-1.jpg",name:"Hearts All The Way Diamond Bracelet",price:"₹241,188"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2023/12/WBR0138-2.jpg",name:"Waves of Harmony Diamond Bracelet",price:"₹146,669"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/02/WBR0235-1-2.jpg",name:"Awesome Blossom Bracelet",price:"₹89,355"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/02/WBG0117-2-2.jpg",name:"Ornate Mesh Bangle",price:"₹118,472"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/02/WBG0111-frontYG-1-1.jpg",name:"Love and Light Bangle",price:"₹66,664"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/01/WBR0156-3-1.jpg",name:"Round and Baguette Everyday Bracelet",price:"₹38,814"},
    {link:"https://jewelbox.co.in/wp-content/uploads/2024/01/WBR0201-1-1.jpg",name:"Trinity Love Diamond Bracelet",price:"₹377,469"},

]

const Cards = () => {
  return (
    <div className='cards'>

        {
            data.map((item,index)=>(
                <div className="card_main">
                    <img src={item.link} alt="" />
                    <div className="card_heading">
                        <p>{item.name}</p>
                    </div>
                    <div className="card_main_buy_button">
                        <p>{item.price}</p>
                        <button>Buy Now</button>
                    </div>

                </div>
            ))
        }
        
    </div>
  )
}

export default Cards