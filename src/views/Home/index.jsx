import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link, Outlet } from "react-router-dom"

import {
	HomeOutlined,
	LoginOutlined,
	ApartmentOutlined,
	UserOutlined,
	ClusterOutlined,
	LockOutlined,
	ProfileOutlined,
	TagOutlined,
	PayCircleOutlined,
	AppstoreAddOutlined
} from "@ant-design/icons"

import "./style.scss"

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
						defaultSelectedKeys={["2"]}
						theme="dark"
						style={{ height: "100%", borderRight: 0 }}
					>
						<Menu.Item key="1" icon={<HomeOutlined />}><Link to='/home/dashBoard'>首页</Link></Menu.Item>
						<Menu.Item key="2" icon={<ApartmentOutlined />}><Link to='/home/departments'>组织架构</Link></Menu.Item>
						<Menu.Item key="3" icon={<UserOutlined />}><Link to='/home/employees'>员工</Link></Menu.Item>
						<Menu.Item key="4" icon={<ClusterOutlined />}><Link to='/home/setting'>公司设置</Link></Menu.Item>
						<Menu.Item key="5" icon={<LockOutlined />}><Link to="/home/permissions">权限设置</Link></Menu.Item>
						<Menu.Item key="6" icon={<ProfileOutlined />}><Link to='/home/socialSecuritys'>社保</Link></Menu.Item>
						<Menu.Item key="7" icon={<TagOutlined />}><Link to='attendances'>考勤</Link></Menu.Item>
						<Menu.Item key="8" icon={<PayCircleOutlined />}><Link to='/home/salarys'>工资</Link></Menu.Item>
						<Menu.Item key="9" icon={<AppstoreAddOutlined />}><Link to='/home/accraditation'>审批</Link></Menu.Item>
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
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}
