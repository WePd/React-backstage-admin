import React, { useEffect } from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { useDispatch } from "react-redux"
import { LoginAction } from "../../store/actionCreateors"

import "./style.scss"

export default function Login() {
	const dispatch = useDispatch()

	const onFinish = (value) => {
		const { mobile, password } = value
		dispatch(LoginAction({ mobile, password }))
	}

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
				autoComplete="off"
				className="loginForm"
				onFinish={onFinish}
			>
				<Form.Item
					label="电话"
					name="mobile"
					initialValue='13800000002'
					rules={[
						{
							required: true,
							message: "请正确输入电话"
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
					initialValue='123456'
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
