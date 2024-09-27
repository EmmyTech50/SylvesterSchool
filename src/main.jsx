import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import AboutPage from './HomeLanding/AboutPage'
import HomePage from './HomeLanding/HomePage'
import AcademicsPage from './HomeLanding/AcademicsPage'
import AdmissionPage from './HomeLanding/AdmissionPage'
import ContactPage from './HomeLanding/ContactPage'

// School Dashboard
import Dashboard from '../src/AdminDashBoard/Dashboard';
import  DashBoardHome from './AdminDashBoard/DashBoardHome';
import Profile from '../src/AdminDashBoard/Profile';
import TeachersAndStaff from '../src/AdminDashBoard/TeachersAndStaff';
import ResultEntry from '../src/AdminDashBoard/ResultEntry';
import TokensAndPins from '../src/AdminDashBoard/TokensAndPins';

// TeachersAndStaff Dashboard
import DashBoardBar from '../src/TeachersDashBoard/DashBoardBar';
import  TeachersHome from '../src/TeachersDashBoard/TeachersHome';
import ProfileS from '../src/TeachersDashBoard/ProfileStaff';
import Teachers from '../src/TeachersDashBoard/TeachersStaff';
import ResultEntryStaff from '../src/TeachersDashBoard/ResultEntry';
import TokensPinStaff from '../src/TeachersDashBoard/TokensPin';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        
        <Routes>
          {/* TeachersAndStaff Route */}
          <Route path="/staff" element={<DashBoardBar />} >

            {/* children Links */}
            <Route path="/staff/home" element={<TeachersHome/>} />
            <Route path="/staff/profile" element={<ProfileS/>} />
            <Route path="/staff/teachers" element={<Teachers/>} />
            <Route path="/staff/result" element={<ResultEntryStaff/>} />
            <Route path="/staff/tokens" element={<TokensPinStaff/>} />

          </Route>


          {/* Admin Dashboard Home */}
          <Route path="/admin" element={<Dashboard />} > 

            {/* Children Links */}
            <Route path="/admin/home" element={<DashBoardHome/>} />
            <Route path="/admin/profile" element={<Profile/>} />
            <Route path="/admin/teachers" element={<TeachersAndStaff/>} />
            <Route path="/admin/result" element={<ResultEntry/>} />
            <Route path="/admin/tokens" element={<TokensAndPins/>} />
            
          </Route>

          {/* Home page Links */}
          <Route path="/" element={<HomePage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
