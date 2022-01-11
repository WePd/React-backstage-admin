import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
	LoginOutlined
} from "@ant-design/icons"

import "./style.scss"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default function Home() {
	return (
		<Layout>
			<Header className="header">
				<div className="logo">
					<p>后台管理系统</p>
				</div>
				<Link to="/login">
					<LoginOutlined className="login" />
				</Link>
			</Header>
			<Layout>
				<Sider width={200} className="site-layout-background">
					<Menu
						mode="inline"
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						style={{ height: "100%", borderRight: 0 }}
					>
						<SubMenu key="sub1" icon={<UserOutlined />} title="企业管理">
							<Menu.Item key="1">option1</Menu.Item>
							<Menu.Item key="2">option2</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" icon={<LaptopOutlined />} title="员工管理">
							<Menu.Item key="5">option5</Menu.Item>
							<Menu.Item key="6">option6</Menu.Item>
							<Menu.Item key="7">option7</Menu.Item>
							<Menu.Item key="8">option8</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub3"
							icon={<NotificationOutlined />}
							title="权限管理"
						>
							<Menu.Item key="9">option9</Menu.Item>
							<Menu.Item key="10">option10</Menu.Item>
							<Menu.Item key="11">option11</Menu.Item>
							<Menu.Item key="12">option12</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout style={{ padding: "0 24px 24px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
							backgroundColor: "#fff"
						}}
					>
						Content
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}
