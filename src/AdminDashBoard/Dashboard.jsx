import { Grid } from '@chakra-ui/react';
import Sidebar from '../AdminDashBoard/leftSide/SideBar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <Grid templateColumns="250px 1fr" minH="100vh">

      {/* Sidebar */}
      <Sidebar/>

      {/* Main Dashboard Area */}
      < Outlet/>

    </Grid>
  );
}

export default Dashboard;
