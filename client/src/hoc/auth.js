import axios from "axios";
import React, { useEffect } from "react";
import dispatch, { useDispatch } from 'react-redux'
import { auth } from "../_actions/user_action";

export default function(SpecificComponent, option, adminRoute = null) {

    // null  => 아무나 출입이 가능한 page
    // true  => login한 유저만 출입이 가능한 page
    // false => login한 유저는 출입 불가능한 page

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response);

            // 로그인하지 않은 상태
            if(!response.payload.isAuth) {
                if(option) {
                    props.history.push('/login')
                }
            } else {
                // 로그인한 상태
                if(adminRoute && !response.payload.isAdmin) {
                    props.history.push('/')
                } else {
                    if(option === false) 
                    props.history.push('/')
                }
            }
          })
        }, [])

        return (
            <SpecificComponent />
        )
    

    }

    return AuthenticationCheck
}