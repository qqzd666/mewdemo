import React from "react"
import WrappedTimeRelatedForm from "./comTime";
import http_port from "../../utils/http";

import Select from "./select";

class createExam extends React.Component {
    constructor(props){
        super(props)
        this.state={
            examTypeData:[],
            getQuestionsTypeData:[]
        }
    }
    componentDidMount() {
        http_port.get("/exam/examType").then((res) => {
            this.setState({
                examTypeData: res.data
            })
        })
        http_port.get("/exam/getQuestionsType").then((res) => {
            this.setState({
                getQuestionsTypeData: res.data
            })
        })
    }
    render() {
        let { examTypeData, getQuestionsTypeData} = this.state;
        return (
            <div className="right_s">
                <p className="createTit">创建试卷</p>
                <div className="content_s">
                    <div className="form_s">
                        <div className="examName_s">
                            <div className="exams_name_s">试卷名称:</div>
                            <input type="text" className="inpName_s" placeholder="请输入试卷名称" />
                        </div>
                        <div className="examTime_s">
                            <div className="exams_time_s">考试时间:</div>
                            <WrappedTimeRelatedForm />
                        </div>
                        <div className="examExam_length_s">
                            <div className="examExam_len_s">设置题量:</div>
                            <input type="text" className="inpExam_len" />
                        </div>
                        <div className="examTime_s">
                            <div className="exams_time_s">选择课程:</div>
                            <Select optionData={examTypeData}/>
                        </div>
                        <div className="examTime_s">
                            <div className="exams_time_s">考试类型:</div>
                            <Select optionData={getQuestionsTypeData}/>
                        </div>
                    </div>
                </div>
                <div className="btn_reset_create">
                    <button className="reset_s">重置</button>
                    <button className="create_s">生成</button>
                </div>
            </div>
        )
    }
};
export default createExam;