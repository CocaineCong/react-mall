import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, DatePicker } from 'antd';
import "../../assets/styles/timelineDetailCreate.scss"
import MdEditor from "react-markdown-editor-lite";

type RequiredMark = boolean | 'optional';

const TimelineDetailCreate: React.FC = () => {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
    const [content,setContent]=useState('')
    const [open, setOpen] = useState(false);
    
    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };
    
    const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    
    const handleEditorChange = (text: string) => {
        setContent(text)
    }
    
    
    return (
        <div className="timelineDetailCreateBox">
            <div className="timelineDetailCreateContent">
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ requiredMarkValue: requiredMark }}
                    onValuesChange={onRequiredTypeChange}
                    requiredMark={requiredMark}
                >
        
                    <Form.Item label="标题" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
    
                    <Form.Item label="时间">
                        <DatePicker />
                    </Form.Item>
        
                    <Form.Item
                        label="简述"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
    
                    <Form.Item>
                        <h1>具体事情</h1>
                        {/*@ts-ignore*/}
                        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
                    </Form.Item>
    
                    <Form.Item>
                        {/*<Button type="primary">提交</Button>*/}
                        
                        <Button
                            type="primary"
                            onClick={() => {
                                setOpen(true);
                            }}
                        >
                            提交
                        </Button>
                        
                        <CollectionCreateForm
                            open={open}
                            onCreate={onCreate}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                    </Form.Item>
    
                </Form>
            </div>
        </div>
    );
};

export default TimelineDetailCreate;