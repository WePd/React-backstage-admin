import React, { useEffect } from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { useDispatch } from "react-redux"
import { LoginAction } from "../../store/actionCreateors"

import "./style.scss"

export default function Login() {
	const dispatch = useDispatch()
	const onFinish = values => {
		console.log("Success:", values)
	}

	const onFinishFailed = errorInfo => {
		console.log("Failed:", errorInfo)
	}
	useEffect(() => {
		dispatch(LoginAction({ mobile: 138000000002, password: 123456 }))
	}, [dispatch])

	return (
		<div className="login-page">
			<Form
				name="basic"
				labelCol={{
					span: 8
				}}
				wrapperCol={{
					span: 16
				}}
				initialValues={{
					remember: true
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				className="loginForm"
			>
				<Form.Item
					label="用户名"
					name="username"
					rules={[
						{
							required: true,
							message: "请正确输入用户名"
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="密码"
					name="password"
					rules={[
						{
							required: true,
							message: "请输入密码"
						}
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{
						offset: 8,
						span: 16
					}}
				>
					<Checkbox>记住密码</Checkbox>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16
					}}
				>
					<Button type="primary" htmlType="submit">
						登录
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
