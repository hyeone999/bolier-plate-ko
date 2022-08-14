import React, { useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

    useEffect(()=> {
        axios.get('/api/hello')//서버에게 해당 주소로 get 하라고 get request를 서버에 보냄,
            .then(response => console.log(response.data))//서버에서 돌아오는 response를 console창에 출력
    }, [])
              

      const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert("로그아웃 실패")
                }
            })
      }

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>

        </div>
    )
}

export default withRouter(LandingPage)