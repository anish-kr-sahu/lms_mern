import React from 'react'
import logo from "../assets/logo.jpg"
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import {setUserData} from "../redux/userSlice"

import axios from "axios"
import { serverUrl } from '../App';
import { toast } from 'react-toastify';
function Nav() {
    const {userData} = useSelector(state=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // handlelogin
    const handleLoginOut = async()=>{
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout",{withCredentials:true});
            dispatch(setUserData(null));
            console.log(result.data);
            toast.success("Logout successfully");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.msg);
        }
    }
  return (
    <div>
      <div className='w-[100%] h-[70px] fixed top-0 px-[20px] py=-[10px] flex items-center justify-between bg-[#00000047] z-10'>
        <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'>
            <img src={logo} alt="logo" className='w-[60px] rounded-[5px] border-2 border-white' />
        </div>
        <div className='w-[30%] lg:flex items-center justify-center gap-4'>
            {!userData && <IoPersonCircle className='w-[50px] h-[50px] fill-[black] cursor-pointer' />}
            {userData && <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-[black] border-white cursor-pointer'>
            {userData?.name.slice(0,1).toUpperCase()}
            </div>}
            {userData?.role === "educator" && <div className='px-[20px] py-[10px] border-2 border-white text-white bg-[black] rounded-[10px] text-[18px] font-light cursor-pointer'>Dashboard</div>}
            {!userData ?<span className='px-[20px] py-[10px] border-2 border-white text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5]' onClick={() => navigate("/login")}>Login</span>:
            <span className='px-[20px] py-[10px] border-2 bg-white text-black rounded-[10px] text-[18px] shadow-sm cursor-pointer 'onClick={handleLoginOut}>Logout</span>}
        </div>
      </div>
    </div>
  )
}

export default Nav
