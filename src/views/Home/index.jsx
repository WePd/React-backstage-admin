import React, { useState, useEffect } from "react"
import { Layout, Menu, Breadcrumb, Button } from "antd"
import { Link, Outlet } from "react-router-dom"
import { ProfileAction } from '../../store/actionCreateors'
import { useDispatch } from 'react-redux'
import routes from "../../router"
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
	AppstoreAddOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined
} from "@ant-design/icons"

import "./style.scss"

const { Header, Content, Sider } = Layout

export default function Home() {

	const [collapsed, setCollapsed] = useState(false)
	const dispatch = useDispatch()
	const toggle = () => {
		setCollapsed(() => !collapsed);
	};
	useEffect(() => {
		// dispatch(ProfileAction())
	})

	function itemRender(route, params, routes, paths) {
		console.log(route, paths);
		const last = routes.indexOf(route) === routes.length - 1;
		return last ? (
			<span>{route.breadcrumbName}</span>
		) : (
			<Link to={paths.join('/')}>{route.breadcrumbName}</Link>
		);
	}
	return (
		<Layout className="layout">
			<Header className="header">
				<div className="logo">
					<p>后台管理系统</p>
				</div>
				<Link to="/login">
					<LoginOutlined className="login" />
				</Link>
			</Header>
			<Layout>
				<Sider width={200} trigger={null} collapsible collapsed={collapsed} className="sider">
					<div className="coll">
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: toggle,
						})}
					</div>
					<Menu
						mode="inline"
						defaultSelectedKeys={["1"]}
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
					<Breadcrumb style={{ margin: "16px 0" }} itemRender={itemRender} routes={routes} separator=">">
					</Breadcrumb>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
							backgroundColor: '#fff'
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}
