import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Topnav';
import About from './Components/Pages/About';
import Contacts from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import TopNav from './Components/Topnav';
import Footer from './Components/Footer';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      {/* Top Navigation */}
      <TopNav />
      
      <Layout>
        {/* Sidebar (Navbar) */}
        <Navbar />

        {/* Main Content Area */}
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                
              </Routes>
            </div>
          </Content>
        <Footer/>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;