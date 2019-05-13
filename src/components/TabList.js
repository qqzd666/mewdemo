import React, { Component } from 'react';
import { Link,Redirect } from 'dva/router';
import RouteView from '../routes';
import {getCookie} from '../utils/utils'

import '../common/tab.css';
import "antd/dist/antd.css";

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider} = Layout;

class TabList extends Component {
    render() {
        if(getCookie('user_token')){
            return (
                <Layout>
                    <Header>北京八维研修学院</Header>
                    <Layout>
                        <Sider width={200} style={{background:'#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />试题管理</span>}>
                                    <Menu.Item key="1"><Link to="/list/add">添加试题</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/list/type">试题分类</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/list/look">查看试题</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />用户管理</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />班级管理</span>}>
                                    <Menu.Item key="9"><Link to="/list/classdetail">班级详情</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to="/list/addclass">添加班级</Link></Menu.Item>
                                    <Menu.Item key="11"><Link to="/list/allclass">全部班级</Link></Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="notification" />学生管理</span>}>
                                    <Menu.Item key="13">option10</Menu.Item>
                                    <Menu.Item key="14">option10</Menu.Item>
                                    <Menu.Item key="15">option11</Menu.Item>
                                    <Menu.Item key="16">option12</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="17"><Link to="/list/exam">考试管理</Link></Menu.Item>
                                <Menu.Item key="18"><Link to="/list/grade">成绩统计</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 280,
                            }}
                            >
                                {
                                    <RouteView routes={this.props.routes} />
                                }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            );
        }else{
            return <Redirect to='/'></Redirect>
        }
        
    }
}

export default TabList;