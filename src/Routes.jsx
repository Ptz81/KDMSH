import { Suspense } from "react";
import Loader from './components/Loader/Loader.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { SharedLayout } from './components/sharedLayout/sharedLayout.jsx';
import { Home } from './components/pages/Home.jsx';
import { About } from './components/pages/About/About.jsx'
import { Mission } from './components/pages/Mission.jsx'
import { Team } from './components/pages/Team.jsx'
import { Reviews } from './components/pages/Reviews.jsx'
import { Departments } from './components/Departments/Departments.jsx'
import { DepartmentDetails } from './components/Departments/DepartmentDetails.jsx'
import { Bands } from './components/Bands/Bands.jsx'
import { BandDetails } from './components/Bands/BandDetails.jsx'
import { Contacts } from './components/pages/Contacts/Contacts.jsx'
import { School } from './components/pages/School.jsx'

export const WebRoutes = () => {
  return (
     <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
  <Route path="school" element={<School />} />
  <Route path="management" element={<Mission />} />
  <Route path="team/:currentPage" element={<Team />} />
  <Route path="reviews" element={<Reviews />} />


        <Route path="departments" element={<Departments />} />
          <Route path="departments/:id" element={<DepartmentDetails />} />
          <Route path="bands" element={<Bands />} />
          <Route path="bands/:id" element={<BandDetails />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
     </Routes>
     </Suspense>
  );
};
