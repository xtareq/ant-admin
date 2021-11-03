import { Card, Form, Input, Checkbox, Button } from "antd";
import { NextPage} from "next";
import Link from "next/link";
import { Redirect } from "next";
import React from "react";
import { useRouter } from "next/router";



const Login: NextPage = () => {
    let router = useRouter();
    const onFinish = (values: any) => {
        console.log('Success:', values);
       router.push("/");
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div style={{height:'100vh', width:'100vw',display:'flex', alignItems:'center',justifyContent:'center',position:'absolute',backgroundColor:'#ececec',overflow:'hidden'}}>
                <Card title="Login Area" bordered={false} style={{ width: 400 }}>
                        <Form
                        name="basic"

                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                            <Link style={{float:'right'}} href="/forgetPassword">Forgot Password?</Link>
                        </Form.Item>

                        <Form.Item >
                            <Button block type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                        </Form>
                </Card>
        </div>
    )
}

export default Login;