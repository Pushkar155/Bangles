import React,{useState} from 'react'
import "./navbar.scss"

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

import jwelbox from "../../assets/image/jwelbox.png";


const Navbar = () => {
    const [open,setOpen] = useState(false);
    const handleham = ()=>{
        setOpen(!open);
    }
  return (
    <div className='navbar'>
        <div className="navbar_top">
            <img src={jwelbox} alt="" />
            <div className="navbar_icons">
                <FavoriteBorderRoundedIcon className='icon1' />
                <PermIdentityIcon className='icon1' />
                <WorkOutlinedIcon className='icon1' />
            </div>
            <div className="navbar_ham">
                {open ? <MenuOutlinedIcon onClick={handleham} /> : <MenuOpenOutlinedIcon onClick={handleham} />}
                {/* <MenuOutlinedIcon/> */}
            </div>

        </div>
        <div className="navbar_bottom">

            <div className="navbar_search">
                <SearchRoundedIcon className='icon' />
                <input type='search' placeholder="Search products..." />
            </div>

        </div>

    </div>
  )
}

export default Navbar