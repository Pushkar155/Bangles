import React from 'react'
import "./footer.scss"
// import { BorderRight } from '@mui/icons-material'
// import { BorderRight } from '@mui/icons-material'
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_filter1">
            <div className="footer_filter_left">
                <h6>SORT BY</h6>
                <p>Popularity</p>
            </div>
            <div className="footer_filter_right">
                <SwapVertRoundedIcon className='icon2'/>
            </div>

        </div>
        <div className="footer_filter">
            <div className="footer_filter_left">
                <h6>FILTER</h6>
                <p>Applied <span>0</span> </p>
            </div>
            <div className="footer_filter_right">
                <FilterAltRoundedIcon className='icon2'/>
            </div>
        </div>

    </div>
  )
}

export default Footer