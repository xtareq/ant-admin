import { Component, ComponentProps, createElement, ReactChild, ReactElement, useState } from "react";

import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function AppLayout({ children }:any) {

    let [collapsed, setCollapsed]= useState(false)

    const toggle = ()=>{
        setCollapsed(!collapsed)
    }

    return (
        <Layout>
          <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                <img src="/antlogo1.svg" alt="" width="50" />
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: '0 16px' }}>
              {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '100vh',
              }}
            >
               <main>{children}</main>
            </Content>
          </Layout>
        </Layout>
    )

  }