import React from 'react'
import {Card, Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
 
export default class RichText extends React.Component{
    state = {
        showRichText: false,
        editorContent: '',
        editorState: ''
    }
    handleClearContent = () => {  //清空文本
        this.setState({
            editorState: ''
        })
    }
    handleGetText = () => {    //获取文本内容
        this.setState({
            showRichText: true
        })
    }
    onEditorStateChange = (editorState) => {   //编辑器的状态
        this.setState({
            editorState
        })
    }
    onEditorChange = (editorContent) => {   //编辑器内容的状态
        this.setState({
            editorContent
        })
    }
    render(){
        const { editorState } = this.state;
        return (
            <div>
               
                <Card >
                    <Editor 
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.props.onEditorChange}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                    />
                </Card>
                <Modal 
                   
                    visible={this.state.showRichText}
                    onCancel={() =>{
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}>
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        )
    }
}　
