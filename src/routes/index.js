import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'dva/router';

class index extends Component {
    render() {
        const { routes } = this.props;
        const redirect = <Route key="0" exact path="/" component={()=>{
            return <Redirect to="/login" />
        }} />
        return (
            <Switch>
                {
                    routes.map((item,index)=>{
                        return (
                            <Route key={index} path={item.path} component={(apiRoute)=>{
                                if(item.children){
                                    return <item.component {...apiRoute} routes={item.children} />
                                }else{
                                    return <item.component {...apiRoute} />
                                }
                            }} />
                        )
                    }).concat(redirect)
                }
            </Switch>
        );
    }
}

export default index;