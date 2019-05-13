import React, { Component } from 'react'
import { Pagination } from 'antd';
import axios from "axios"
import 'antd/lib/pagination/style/index.css';
import './index.css';

export default class Divpage extends Component {
  constructor() {
    super()
    this.state = {
      pageData:[] ,
      len: 0
    }
  }
  componentDidMount(pageNum = 1, pageTiao = 5) {
    axios.get('http://localhost:3000/getData?pageNum='+ pageNum + '&pageTiao='+ pageTiao).then(res => {
      console.log(res)
      this.setState({
        pageData: res.data.pageData,
        len: res.data.len
      })
    })
  }
  onChange = (pageNumber, pageTiao = 5) => {
    console.log(pageNumber, pageTiao)
    axios.get('http://localhost:3000/getData?pageNum=' + pageNumber + '&pageTiao=' + pageTiao).then(res => {
      this.setState({
        pageData: res.data.pageData,
        len: res.data.len
      })
    })
  }
  render() {
    let {
      pageData,
      len
    } = this.state
  
    return (
      <div className="page">
        <ul className="title">
          <li>班级名称</li>
          <li>学习课程</li>
          <li>阶段</li>
          <li>班级人数</li>
          <li>任课讲师</li>
          <li>班主任老师</li>
          <li>操作</li>
        </ul>
        <div className="content">
        {
          pageData.map((item, index) => {
            return (
              <div className="every" key={index}>
                <div>{item.name}</div>
                <div>{item.lesson}</div>
                <div>{item.grade}</div>
                <div>{item.class_person}</div>
                <div>{item.study_teacher}</div>
                <div>{item.work_teacher}</div>
                <div className="btn">
                  <p>详情</p>
                  <p>编辑</p>
                  <p>删除</p>
                </div>
              </div>
            )
          })
        }
        </div>
        <div className="bottom">
          <div>
            <Pagination showQuickJumper defaultCurrent={1} total={len} pageSize="5" onChange={(num) => {this.onChange(num)}} />
          </div>
        </div>
      </div>
    )
  }
}