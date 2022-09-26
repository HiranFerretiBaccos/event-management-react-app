import React from 'react';
//Components
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';
import GridLayout from './Components/GridLayout/GridLayout';
//Pages
import Home from './Pages/Home/Home';
import Events from './Pages/Events/Events';
import Table from './Pages/Table/Table';
import Chart from './Pages/Chart/Chart';
//Router: @latest - Última versão tira o "exact" e insere o element={}, além de permitir self closing Tag.
import { Routes, Route, Link } from 'react-router-dom';
//React Icons
import { IconContext } from "react-icons";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { AiFillHome, AiFillQuestionCircle, AiOutlineMail, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsTable, BsFillBarChartFill, BsClipboardData, BsBuilding } from "react-icons/bs";
import { BiRegistered } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoIosContacts } from "react-icons/io";

function App() {
  return (
    <>
      <GridLayout>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Header>
            <div Style='display: flex; justify-content: space-between;'>
              <img src='./images/logoHeader2.jpg' alt='backgroundHtmlCss' className='logosHeader' Style='margin: 1.2rem 0 1rem 2.2rem;' />
              <img src='./images/logoHeader1.jpg' alt='backgroundReact' className='logosHeader' Style='margin: 1rem 2rem 0 0;' />
            </div>
          </Header>

          <Sidebar>
            <ProSidebar>
              <Menu Style='margin-top: 2rem;'>
                <MenuItem className='iconsSidebar' icon={<AiFillHome />}>
                  <Link to="/" Style='text-decoration: none'>Home</Link>
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<BsClipboardData />}>
                  <Link to="/events" Style='text-decoration: none'>Events</Link>
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<BsTable />}>
                  <Link to="/table" Style='text-decoration: none'>Table</Link>
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<BsFillBarChartFill />}>
                  <Link to="/chart" Style='text-decoration: none'>Chart</Link>
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<BiRegistered />}>
                  Register
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<BsBuilding />}>
                  Company
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<GoLocation />}>
                  Location
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<AiFillQuestionCircle />}>
                  About Us
                </MenuItem>
                <MenuItem className='iconsSidebar' icon={<IoIosContacts />}>
                  Contact
                </MenuItem>
              </Menu>
            </ProSidebar>
          </Sidebar>

          <Content>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/events' element={<Events />} />
              <Route path='/table' element={<Table />} />
              <Route path='/chart' element={<Chart />} />
            </Routes>
          </Content>

          <Footer className='iconsFooter' >
            <AiOutlineMail />
            <AiFillLinkedin />
            <AiFillInstagram />
          </Footer>
        </IconContext.Provider>
      </GridLayout>
    </>
  )
}

export default App; 