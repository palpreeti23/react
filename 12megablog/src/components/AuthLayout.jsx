import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate} from  "react-router-dom"
import { login } from "../store/authSlice";

export default function Protected({children, authentication = true}){

    const authStatus = useSelector(state =>state.auth.status)
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
    
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication)
        {
            navigate('/')
        }
        setLoader(false)
    },[authStatus, navigate, authentication])

    return loader ? <h2>"loading..."</h2> : <>{children}</>
}

