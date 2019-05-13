import React, { Component } from 'react'
import http_port from '../../utils/http'
import '../../common/allclass-q.css'
export default class allClass extends Component {
    state ={
        allClassData:[]
    }
    
    componentDidMount(){
        this.getAll();
    }
    getAll(){
        http_port.get('/manger/room').then(res =>{
            this.setState({
                allClassData :res.data
            },function(){
                console.log(this.state.allClassData)
            })
            
        })
    }
    render() {
        
        return (
            <div className='allpage-q'>
                {
                    this.state.allClassData.map((i,index) =>{
                        return <p key={index}>{i.room_text}</p>
                    })
                }
            </div>
        )
    }
}
