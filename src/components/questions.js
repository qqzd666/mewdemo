import React from 'react';
import Ueditor from './umeditor'

import { Select } from "antd"
import http_port from '../utils/http.js'
import './style.css'
import 'antd/dist/antd.css'
class questions extends React.Component {
  constructor() {
    super();
    this.state={
      textdo:'',
      type: [],
      textbox1:'',
      textbox2:'',
      user_id:'',
      questions_type_id: undefined,
      subject_id: undefined,
      exam_id:undefined,
      texttype:[],
      typeData: [], 
      Option : Select.Option
    }
    this.message=this.message.bind(this)
  }
  
  message(event) {
    console.log(event.target.value)
    //存题干
    this.setState({
     textdo: event.target.value
   })
  }
 
   handleProvinceChange = (questions_type_id) => {
     console.log(questions_type_id);
     this.setState({
       questions_type_id
     });
   }
   typeChange = (subject_id) => {
     this.setState({
       subject_id
     })
   }
   texttypeChange = (exam_id) => {
    this.setState({
       exam_id
    })
   }
 
  publish(){
    const {textdo,questions_type_id,subject_id,textbox1,textbox2,exam_id,user_id} =this.state;
    // let random = Math.random().toString(36).substr(2);
    http_port.post('/exam/questions',{
        "questions_type_id": questions_type_id,
        "subject_id": subject_id, //	课程id
        "questions_stem": textdo, //题干
        "exam_id": exam_id, //考试类型id
        "user_id": user_id, //用户id
        "questions_answer": textbox2 //题目答案
    }).then(res => {
      console.log(res)
    })
  }
  ueditor=(e)=>{
    this.setState({
      textbox1: e.blocks[0].text
    })
  }
  ueditor1=(e)=>{
    this.setState({
      textbox2: e.blocks[0].text
    })
  }
  componentDidMount(){
    http_port.get('/exam/getQuestionsType').then(res => {
      this.setState({
        type:res.data
      })
    })
     http_port.get('/exam/subject').then(res => {
    this.setState({
      typeData:res.data
    })
     })
      http_port.get('/user/userInfo').then(res => {
        this.setState({
          user_id: res.data.user_id
        })
      })
      http_port.get('/exam/examType').then(res => {
        this.setState({
         texttype:res.data
        })
      })
  }
  render() {
    const {type,typeData,Option,texttype} =this.state
    return (
          < div className = 'questions_c'>
           <h3 className='h3_c' >添加试题</h3>
           <div className='paper'>
           
           < h3 className = 'h3_c' > 题目信息 </h3>
           < p className = 'h4_c' > 题干: </p>
           <input className='message_c' type='text' value={this.state.InputValue} ref='Input' onChange={this.message} placeholder='请输入题干信息'/>
           < div className='border_c'>
           < h3 className='h3_it_c'> 题目主题 </h3>
            < Ueditor onEditorChange ={this.ueditor}/ >
            </div>
            <p className = 'h4_c' >选择题目类型</p>
            <Select
          defaultValue = '请选择'
          style={{ width: 120 }}
          onChange={this.typeChange}
        >
          {type.map(item => <Option key={item.questions_type_id}>{item.questions_type_text}</Option>)}
        </Select>
         <p className = 'h4_c' >选择考试类型</p>
            <Select
          defaultValue = '请选择'
          style={{ width: 120 }}
          onChange={this.texttypeChange}
        >
          {texttype.map(item => <Option key={item.exam_id}>{item.exam_name}</Option>)}
        </Select>
           <p className = 'h4_c' >选择课程</p>
              <Select
          defaultValue = '请选择'
          style={{ width: 120 }}
          onChange={this.handleProvinceChange}
        >
          {typeData.map(item => <Option key={item.subject_id}>{item.subject_text}</Option>)}
        </Select>
           < div className = 'border_c' >
            <h3 className='h3_c'> 答案信息</h3>
            < Ueditor onEditorChange ={this.ueditor1}/>
            </div>
                
                  < button onClick={()=>this.publish()} className = 'changebtn_c'> 发表 </button>
                 
           </div>
          </div>
    )
  }
 

};

export default questions;