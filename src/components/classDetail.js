import React, { Component } from 'react';
import http from '../utils/http'

class classDetail extends Component {
    render() {
        return (
            <div className="class-detail">
                classdetail
            </div>
        );
    }

    componentDidMount(){
        http.post('/manger/student',{
            student_id:'123',
            student_name:'巧轻震动',
            student_pwd:'Qqzd123/'
        }).then((res)=>{
            console.log(res)
        })
    }
}

export default classDetail;