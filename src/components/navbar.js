import '../styles/navbar.css';
import React from 'react';
import {BrowserRouter as  Router,Routes, Route, Link} from 'react-router-dom';
import SignUp from './signup';
import H from './home';
import LogIn from './login';
import About from './about';
import AdminDashboard from './dashboards/AdminDashboard/AdminDashboard';
import Users from './dashboards/AdminDashboard/components/users';
import Reports from './dashboards/AdminDashboard/components/reports';
import Settings from './dashboards/AdminDashboard/components/settings';
import EmployeeDashboard from './dashboards/EmployeeDashboard/EmployeeDashboard';
import Tasks from './dashboards/EmployeeDashboard/components/task';
import Profile from './dashboards/EmployeeDashboard/components/Profile';
import Settings1 from './dashboards/EmployeeDashboard/components/settings';
import HRDashboard from './dashboards/HRDashboard/HRDashboard';
import Employees from './dashboards/HRDashboard/components/employees';
import Profile1 from './dashboards/HRDashboard/components/Profile';
import Settings2 from './dashboards/HRDashboard/components/settings';
import TeamLeaderDashboard from './dashboards/TeamLeadDashboard/TeamLeadDashboard';
import Profile2 from './dashboards/TeamLeadDashboard/components/Profile';
import Settings3 from './dashboards/TeamLeadDashboard/components/settings';
import Projects from './dashboards/TeamLeadDashboard/components/projects';
import Contact from './contact';
function Home(params)
{
    return(
        <H/>
    )
}
function Ab(params)
{
    return(
        <About/>
    )
}
function Login(params)
{
    return(
        <LogIn/>
    )
}
function Signup(params)
{
    return(
        <SignUp/>
    )
}
function Navbar(params)
{
    return(
        <Router>
            <nav>
                <ul className='ul'>
                    <div className='li1'>
                        <Link to="/" className='nav-title'>WorkCrew</Link>
                    </div>
                    <li className='li'>
                        <Link to = "/" className='link'>Home</Link>
                    </li>
                    <li className='li'>
                        <Link to = "/about" className='link'>About Us</Link>
                    </li>
                    <li className='li'>
                        <Link to = "/contact" className='link'>Contact</Link>
                    </li>
                    {/* <li className='li'>
                        <Link to = "/login" className='link'>Login</Link>
                    </li> */}
                    <li className='li'>
                        <Link to = "/signup" className='link'>Signup</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path = '/'element = {<Home/>}/>
                <Route exact path = '/about' element = {<Ab/>}/>
                <Route exact path = '/contact' element = {<Contact/>}/>
                <Route className='si' exact path = '/login' element = {<Login/>}/>
                <Route exact path = '/signup' element = {<Signup/>}/>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-dashboard/users" element={<Users />} />
                <Route path="/admin-dashboard/reports" element={<Reports />} />
                <Route path="/admin-dashboard/settings" element={<Settings />} />
                <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                <Route path="/employee-dashboard/tasks" element={<Tasks />} />
                <Route path="/employee-dashboard/profile" element={<Profile />} />
                <Route path="/employee-dashboard/settings" element={<Settings1 />} />
                <Route path="/hr-dashboard" element={<HRDashboard />} />
                <Route path="/hr-dashboard/employees" element={<Employees />} />
                <Route path="/hr-dashboard/profile" element={<Profile1 />} />
                <Route path="/hr-dashboard/settings" element={<Settings2 />} />
                <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
                <Route path="/team-leader-dashboard/projects" element={<Projects />} />
                <Route path="/team-leader-dashboard/profile" element={<Profile2 />} />
                <Route path="/team-leader-dashboard/settings" element={<Settings3 />} />
            </Routes>
        </Router>
    )
}
export default Navbar;
