import React, { createElement, useState } from "react";

import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { Avatar, Button, Divider, Dropdown, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
  } from '@ant-design/icons';
import AppSidebar from "./AppSidebar";
import menu from "antd/lib/menu";

const { Header, Sider, Content } = Layout;

const AccountMenu = (
    <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Account
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Settings
      </a>
    </Menu.Item>
    <Divider style={{margin:'0'}}/>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
       Logout
      </a>
    </Menu.Item>
  </Menu>
)


export default function AppLayout({ children }:any) {

    let [collapsed, setCollapsed]= useState(true)

    const toggle = ()=>{
        setCollapsed(!collapsed)
    }

    return (
        <Layout>
          <Sider theme="dark" trigger={null} collapsible collapsed={collapsed}>
            <div className="" style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px 0'}}>
                <img src="/logo.png" alt="" height="30"  />
                {!collapsed && <h3 style={{color:'#9900FF',fontSize:'25px',margin:'0px 2px'}}>Admin</h3>}
                
            </div>
           
            {/* Menu Area */}
             <AppSidebar/>
           {/* /Menu Area */}
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding:'0 15px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100%'}}>
              {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle
                })}
                  <Dropdown overlay={AccountMenu} placement="bottomRight" arrow>
                    <Button type="default" style={{padding:'15px 16px',display:'flex',justifyContent:"center",alignItems:'center'}}>
                      <Avatar size="small"  src="https://joeschmoe.io/api/v1/random" />
                      <span style={{fontWeight:'bold',margin:'0 5px'}}>Hande Ercel</span>
                      <DownOutlined/>
                    </Button>
                  </Dropdown>
              </div>
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