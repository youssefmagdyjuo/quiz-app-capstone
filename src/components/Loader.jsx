import React from 'react'
import { BeatLoader } from "react-spinners";
export default function Loader() {
    return (
        <div
        style={{height:'100vh',position:'absolute',top:'0',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <BeatLoader 
        color="#1E9D75" 
        size={30}
        />
        </div>
    )
}
