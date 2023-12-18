import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import UserPage from './pages/user/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';
import AddUser from './pages/user/AddUser';
import Admin from './pages/Admin/Admin';
import Country from './pages/Country/Country';
import Province from './pages/Province/Province';
import Category from './pages/Category/Category';
import SubCategory from './pages/SubCategory/SubCategory';
import Designation from './pages/Designations/Designations';
import Occupation from './pages/Occupation/Occupation';
import Position from './pages/Position/Position';
import Specialities from './pages/Specialities/Specialtites';
import CapacityBuilding from './pages/CapacityBuilding/CapacityBuilding';
import AssemblyTypes from './pages/AssemblyTypes/AssemblyTypes';
import PoliticalParty from './pages/PoliticalParty/PoliticalParty';
import PartyAlliances from './pages/PartyAlliances/PartyAlliances';
import Castes from './pages/Castes/Castes';
import LegislativeInterests from './pages/LegislativeInterests/LegislativeInterests';
import Employer from './pages/Employers/Employers';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        {
          path: 'user',
          // element: <UserPage />,
          children: [
            { path: 'users', element: <UserPage /> },
            { path: 'add-user', element: <AddUser /> },
            // { path: 'card', element: <UserPage /> },
          ],
        },
        {
          path: 'venue',
          // element: <Venue />,
          // children: [
          //   { path: 'settings', element: <UserPage /> },
          //   { path: 'profile', element: <UserPage /> },
          //   { path: 'card', element: <UserPage /> },
          // ],
        },
        {
          path: 'admin',
          children: [
            { path: 'admin-management', element: <Admin /> },
            { path: 'manage-countries', element: <Country /> },
            { path: 'provinces', element: <Province /> },
            { path: 'categories', element: <Category /> },
            { path: 'subcategories', element: <SubCategory /> },
            { path: 'designations', element: <Designation /> },
            { path: 'occupations', element: <Occupation /> },
            { path: 'positions', element: <Position /> },
            { path: 'specialities', element: <Specialities /> },
            { path: 'capacity-building', element: <CapacityBuilding /> },
            { path: 'assembly-types', element: <AssemblyTypes /> },
            { path: 'political-party', element: <PoliticalParty /> },
            { path: 'party-alliances', element: <PartyAlliances />},
            { path: 'castes', element: <Castes />},
            { path: 'employer', element: <Employer />},
            { path: 'legislative-interests', element: <LegislativeInterests />}
          ],
        },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
