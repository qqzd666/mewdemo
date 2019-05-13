import React from 'react';
import '../common/loginpage.css'
import '../iconfont/iconfont.css'
import http_port from "../utils/http"
import {setCookie} from "../utils/utils"
let userName ='';
let passWord = ''
class index extends React.Component {
  state ={
    name:'',
    pass:''
  }
  render() {
    return (
        <div className='indexpage'>
          <div className='left'>
              八 维 网 站 考 试 系 统
          </div>
          <div className='right'>
              <h3>登 录</h3>
              <div className='userName'>
                <i className="iconfont icon-wode"></i>
                <input placeholder='用户名' ref = 'getName' onInput={this.getName} />
              </div>
              <p className='loginp'>{this.state.name}</p>
              <div className='passWord'>
                <i className="iconfont icon-lock"></i>
                <input placeholder='密码' ref= 'getPass' onInput={this.getPass}/>
              </div>
              <p className='loginp'>{this.state.pass}</p>
              <div className='radio'>
                <input type='radio' className='login-radio'/>
                <p >记住账号</p>
              </div>
              
              <div className='btn' onClick = {this.getInfo}>
                登录
              </div>
          </div>
        </div>
    )
  }
  getPass=()=>{
    passWord =  this.refs.getPass.value;
    
  }
  getName=()=>{
    userName = this.refs.getName.value;
  }
  getInfo =()=>{
    console.log(12)

    if(userName.length === 0){
      this.setState({
        name:'请输入用户名'
      })
    }else if(!/^[a-z]+$/.test(userName)){
      this.setState({
        name:'用户名格式不正确'
      })
    }
    if(passWord.length === 0){
      this.setState({
        pass:'请输入密码'
      })
    }else if(!/^[A-Z][a-z]+[0-9]{4}@.$/.test(passWord)){
      this.setState({
        pass:'密码格式不正确'
      })
    }
    if(/^[a-z]+$/.test(userName) && /^[A-Z][a-z]+[0-9]{4}@.$/.test(passWord)){
      this.setState({
        pass:'',
        name:''
      })

      http_port.post('/user/login', {
        user_name: userName,
        user_pwd: passWord
      }).then(res => {
        setCookie('user_token', res.token, 0.3)
        document.cookie = `user_token=${res.token}`
        this.props.history.push("/list")
      }).catch(err => {
        console.log(err)
      })
    }
  }
};

export default index;