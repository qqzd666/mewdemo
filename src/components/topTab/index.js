import React from "react";
import "./index.scss";
import Select from "../createexam/select";

class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state={
            presonData:[
                "不限","刘于","张菲","王迪","李晓丹"
            ],
            hasHeight:true,
            ind:-1
        }
    }
    changeInd = (index,item) => {
        if (index!==undefined){
           this.setState({
                ind:index
            }) 
        }else{
            this.setState({
                ind: -1
            }) 
        }
        if (item){
            this.props.TopdataCb({subject_id:item.subject_id});
        }else{
            this.props.TopdataCb();
        }
    }
    selectedDatas = (option) => {
            this.props.TopdataCb({ exam_id: option });
    }
    selectedDatas1 = (option) => {
            this.props.TopdataCb({ questions_type_id: option });
    }
    render(){
        let {  ind} =this.state;
        let { Topdata, typeData, questionsType} =this.props;
        return (
            <div className="top_type_s">
                <div className="study_type_s">
                    <div className="type_title_s">
                        课程类型:
                    </div>
                    <div className="tab_all_s">
                        <span className={ind ===-1 ? 'ac_s tab_one_s' : 'tab_one_s'} onClick={() => { this.changeInd() }}>不限</span>
                        {
                            Topdata ? Topdata && Topdata.map((item,index)=>{
                                return(
                                    <span key={item.subject_id} className={ind === index ? 'ac_s tab_one_s' : 'tab_one_s'} onClick={() => { this.changeInd(index,item) }}>{item.subject_text}</span>
                                )
                            }):[]
                        }
                    </div>
                    {/* <div className="open" onClick={this.openIt}>展开</div> */}
                </div>
                <div className="study_owner_s">
                    <div className="type_owner_s">
                        owner:
                    </div>
                </div>
                <div className="study_other_s">
                    <div className="type_other_s">
                        其它选项:
                    </div>
                    <div className="study_source_s">
                        <div className="study_setter_s">
                            <div className="preson1_s">考试类型:</div>
                            <div className="select1_s">
                                <Select placeholder=" " widths="16" optionData={typeData} selectedData={this.selectedDatas} />
                            </div>
                            
                        </div>
                        <div className="study_setter_s">
                            <div className="preson2_s">题目类型:</div>
                            <div className="select2_s">
                                <Select placeholder=" " widths="16" optionData={questionsType} selectedData={this.selectedDatas1}/>
                            </div>
                            
                        </div>
                        {/* <div className="searchBtn_s">
                            <i className="iconfont icon-search_s"></i>
                            <button className="btn_s">查询</button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Tabs;