import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../StudentDashBoard/StudentSideBar/SideBar';
import { Grid } from '@chakra-ui/react';


function StudentDashBar() {
  return (
    <Grid templateColumns="250px 1fr" minH="100vh">

        {/* Sidebar */}
        <Sidebar/>

        {/* Main Dashboard Area */}
        < Outlet/>

    </Grid>
  )
}

export default StudentDashBar