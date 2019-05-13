import React, { Component } from 'react'
import http_port from '../../utils/http'
import '../../common/add-q.css'
let qclassName ='';
let qclassId ='';
export default class addClass extends Component {  
  render() {
    return (
      <div className='addClass-q'>
        <h3 className='tit-q'>添加班级</h3>
        <div className='content-q'>
          <div className='className-q'>
              <p className='add-p-q'>班级名称：</p>
              <input ref ='className' placeholder='输入班级名称' onInput ={this.getClassName}/>
          </div>
          <div className='classId-q'>
              <p className='add-p-q'>班级 ID：</p>
              <input ref ='classID' placeholder='输入班级ID' onInput={this.getClassId}/>
          </div>
        </div>
        <div className='addBtn-q' onClick={this.addClasshome}>提交</div>
      </div>
    )
  }
  getClassName=() =>{
    qclassName =this.refs.className.value;
  }
  getClassId=() =>{
    qclassId =this.refs.classID.value;
  }
  addClasshome(){
    if(qclassName.length>0){
      http_port.post('/manger/grade', {
        grade_name: qclassName,
        room_id: qclassId
      }).then(res=>{
        console.log(res)
      })
    }
    
  }
}
