import {Form, Select} from 'antd';
import 'antd/lib/form/style/index.css'
import 'antd/lib/select/style/index.css'
import React from "react"


const { Option } = Select;

class Demo extends React.Component {
    constructor(props) {
        super()
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    handleChange = (value) => {
        if (value!=="不限"){
            console.log(this.props)
            this.props.selectedData(value);
        }else{
            this.props.selectedData();

        }
        // console.log(this.props.selectedData, value, 897);

    }
    render() {
        let { placeholder, widths,optionData} = this.props
        const { getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: widths+'em'}}>
                <Form.Item
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Select placeholder={placeholder || '指导考试班级'} onChange={this.handleChange} >
                            {
                                optionData?optionData && optionData.map((item,index)=>{
                                    return (
                                        <Option value={item.exam_id || item.questions_type_id} key={index}>{item.exam_name || item.questions_type_text}</Option>
                                    )
                                }):null
                            }
                        </Select>
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);

// ReactDOM.render(<WrappedDemo />, mountNode);
export default WrappedDemo;
