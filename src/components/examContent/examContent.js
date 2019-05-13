import React from "react";
import "./examConetent.scss";

class ExamCon extends React.Component{
    constructor(props){
        super()
        this.state={
            conData:[],
            isShows:true
        }
    }
    componentWillReceiveProps(){
        this.setState({
            isShows: true
        })
    }
    loadMore = () => {
        this.setState({
            isShows:false
        })
    }
    render(){
        let {isShows } = this.state;
        let { conDatas} = this.props;
        let  newData=[];
      
        if (isShows){
            newData = conDatas.slice(0, 5)
        }else{
            newData = conDatas
        }
        
        return (
            <div className="Content_All_s">
                <div className="Content_s">
                    {
                        newData ? newData && newData.map((item, index) => {
                            return (
                                <div className="con_one_s" key={index}>
                                    <div className="topic_s">
                                        <b>{item.questions_stem}</b>
                                    </div>
                                    <div className="con_type_s">
                                        <div className="one_s">{item.questions_type_text}</div>
                                        <div className="one_s">{item.subject_text}</div>
                                        <div className="one_s">{item.exam_name}</div>
                                    </div>
                                    <div className="user_s">
                                        <div className="user_img_s"></div>
                                        <div className="userName_issue_s">
                                            <span className="userName_s">{item.user_name}</span>
                                            <span className="issue_s">发布</span>
                                        </div>
                                        {/* <div className="user_time_s">
                                    2019-3-13
                                </div> */}
                                    </div>
                                </div>
                            )
                        }) : []
                    }
                </div>
                <div className={isShows ? 'load_more_s' :'load_more_s isShow'} onClick={this.loadMore}>加载更多…</div>
            </div>
           )
    }
}
export default ExamCon;