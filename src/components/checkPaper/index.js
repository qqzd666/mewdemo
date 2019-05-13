import React from "react";
import Tabs from "../topTab";
import "./index.scss";
import http_port from "../../utils/http";
 
import ExamCon from "../examContent/examContent";

class CheckPaper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            topData:[],
            examTypeData:[],
            getQuestionsTypeData:[],
            paramsData:{},
            conData: []
        }
    }
    fetchData= () => {
        http_port.get("/exam/questions/new").then((res) => {
            this.setState({
                conData: res.data
            })
        })
    }
    componentDidMount(){
        http_port.get("/exam/subject").then((res)=>{
            this.setState({
                topData:res.data
            })
        })
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
        this.fetchData();
    }

    TopdataCb = (opt) => {
        let {paramsData} =this.state;
        if (opt){
            paramsData[Object.keys(opt)[0]] = opt[Object.keys(opt)[0]];
            this.setState({
                paramsData
            })
            http_port.get("/exam/questions/condition", paramsData).then((res) => {
                this.setState({
                    conData: res.data
                })
            })
        }else{
            this.fetchData();
        }

    }

    render(){
        var { topData, examTypeData, getQuestionsTypeData, conData} =this.state;
        return (
            <div className="checkPaper_box_s">
                <p className="createTit_s">查看试卷</p>
                <Tabs Topdata={topData} typeData={examTypeData} questionsType={getQuestionsTypeData} TopdataCb={this.TopdataCb}></Tabs>    
                {/* <div className="bg_s"></div> */}
                <ExamCon conDatas={conData}></ExamCon>      
{/* //sdfsdfgsdgsfg */}
            </div>
        )
    }

}

export default CheckPaper;