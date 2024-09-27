import { Grid } from '@chakra-ui/react';
import Sidebar from '../TeachersDashBoard/TeachersSideBar/SideBar';
import { Outlet } from 'react-router-dom';

function DashBoardBar() {
  return (
    <Grid templateColumns="250px 1fr" minH="100vh">

      {/* Sidebar */}
      <Sidebar/>

      {/* Main Dashboard Area */}
      < Outlet/>

    </Grid>
  );
}

export default DashBoardBar;
