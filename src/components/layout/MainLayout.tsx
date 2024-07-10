import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const MainLayout = () => {
    return (
        <div>
            <Header style={{backgroundColor: "#fff"}}>
                
            </Header>
            <Content style={{maxWidth: "1280px", margin: "auto"}}>Content</Content>
            <Footer style={{backgroundColor: "#3B116E"}}>Footer</Footer>
        </div>
    );
};

export default MainLayout;