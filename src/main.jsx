import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

// HomeLanding
import AboutPage from './HomeLanding/AboutPage';
import HomePage from './HomeLanding/HomePage';
import AcademicsPage from './HomeLanding/AcademicsPage';
import AdmissionPage from './HomeLanding/AdmissionPage';
import ContactPage from './HomeLanding/ContactPage';

// Admin Dashboard
import Dashboard from '../src/AdminDashBoard/Dashboard';
import  DashBoardHome from './AdminDashBoard/DashBoardHome';
import Profile from '../src/AdminDashBoard/Profile';
import TeachersAndStaff from '../src/AdminDashBoard/TeachersAndStaff';
import ResultEntry from '../src/AdminDashBoard/ResultEntry';
import TokensAndPins from '../src/AdminDashBoard/TokensAndPins';
import AdminLogin from '../src/AdminDashBoard/AdminLogin';

// TeachersAndStaff Dashboard
import StaffDashBar from '../src/TeachersDashBoard/DashBoardBar';
import TeachersHome from '../src/TeachersDashBoard/TeachersHome';
import ProfileS from '../src/TeachersDashBoard/ProfileStaff';
import Students from '../src/TeachersDashBoard/Students';
import ResultEntryStaff from '../src/TeachersDashBoard/ResultEntry';
import StaffLogin from '../src/TeachersDashBoard/StaffLogin';


// Student DashBoard
import StudDashBar from '../src/StudentDashBoard/StudentDashBar';
import StudentProfile from '../src/StudentDashBoard/StudentProfile';
import StudentResult from '../src/StudentDashBoard/StudentResult';
import StudentLogin from '../src/StudentDashBoard/StudentLogin';

// forgetPassword
import ForgetPassword from '../src/components/ForgetPassword';

// Other pages here:

// Attendance page
import Attendance from '../src/OtherPages/Attendance';
import AddStudentForm from '../src/OtherPages/AddStudentForm';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        
        <Routes>
        
          {/* attendance */}
          <Route path="/attendance" element={< Attendance />} />

          {/* attendance */}
          <Route path="/addstudentform" element={< AddStudentForm />} />


          {/* Student DashBoard Route */}
          <Route path="/student" element={< StudDashBar />} >

            {/* children Links */}
            <Route path="/student/studprof" element={<StudentProfile/>} />
            <Route path="/student/studres" element={< StudentResult/>} />
          </Route>
          <Route path="/student/login" element={< StudentLogin />} />
          <Route path="/frget" element={<  ForgetPassword />} />
          
            

          {/* TeachersAndStaff DashBoard Route */}
          <Route path="/staff" element={<StaffDashBar />} >

            {/* children Links */}
            <Route path="/staff/home" element={<TeachersHome/>} />
            <Route path="/staff/profile" element={<ProfileS/>} />
            <Route path="/staff/students" element={<Students/>} />
            <Route path="/staff/result" element={<ResultEntryStaff/>} />
          </Route>
          <Route path="/staff/login" element={< StaffLogin />} />
            



          {/* Admin Dashboard Route */}
          <Route path="/admin" element={<Dashboard />} > 

            {/* Children Links */}
            <Route path="/admin/home" element={<DashBoardHome/>} />
            <Route path="/admin/profile" element={<Profile/>} />
            <Route path="/admin/teachers" element={<TeachersAndStaff/>} />
            <Route path="/admin/result" element={<ResultEntry/>} />
            <Route path="/admin/tokens" element={<TokensAndPins/>} />
          </Route>
          <Route path="/admin/login" element={< AdminLogin />} />
            

          {/* HomeLanding Route */}
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
