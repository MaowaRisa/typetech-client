import { Layout } from 'antd';
import Navbar from './Navbar';
import AppFooter from './AppFooter';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Content } = Layout;

const MainLayout = () => {
    return (
        <div style={{minWidth: "375px"}}>
            <Header style={{backgroundColor: "#fff"}}>
                <Navbar></Navbar>
            </Header>
            <Content style={{maxWidth: "1280px", minHeight: "71vh", margin: "auto"}}>
                <Outlet></Outlet>
            </Content>
            <Footer style={{backgroundColor: "#2E1065", color:"White"}}>
                <AppFooter></AppFooter>
            </Footer>
        </div>
    );
};

export default MainLayout;