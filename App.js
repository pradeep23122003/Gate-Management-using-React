import React,{Component} from 'react';
import "./Dashboard.css"
import {BrowserRouter ,Route,Switch,Link} from "react-router-dom";
import{useNavigate} from "react-router-dom";
import Form from './form';
import In01form from './in01form';
import  In02table  from './in02table';
import Attform from './att_form';
import Sample from './sample';
import Autocomplete from './autocomplete';
import Pass_form from './pass_form';
import Student_Details from './Student_Details';
const autocomplete_options = ["option1","option2","option3"];
function Car(){
    
   
return (
<div>
   <BrowserRouter>
      <Switch>
         <React.Fragment>

            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                
               {/* <!-- Sidebar --> */}
               <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                  {/* <!-- Sidebar - Brand --> */}
                  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                     <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                     </div>
                     <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                  </a>
                  {/* <!-- Divider --> */}
                  <hr className="sidebar-divider my-0"/>
                  {/* <!-- Nav Item - Dashboard --> */}
                  <li className="nav-item active">
                     <a className="nav-link" href="index.html">
                     <i className="fas fa-fw fa-tachometer-alt"></i>
                     <span>Dashboard</span></a>
                  </li>
                  {/* <!-- Divider --> */}
                  <hr className="sidebar-divider"/>
                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading">
                     Interface
                  </div>
                  {/* <!-- Nav Item - Pages Collapse Menu --> */}
                  {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                  <li className="nav-item">
                     <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities"> 
                     <i className="fas fa-fw fa-wrench"></i>
                     <span>Utilities</span>
                     </a>
                     <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                           <h6 className="collapse-header">Custom Utilities:</h6>
                           <Link className='collapse-item' to="/Form" element={<Form/>}>Form</Link>
                           <Link className='collapse-item' to="/In01form" element={<In01form/>}>Invoice01 & 02</Link>
                           {/* <Link className='collapse-item' to="/In02table" element={<In02table/>}>DataTable</Link> */}
                           <Link className='collapse-item' to="/att_form" element={<Attform/>}>UmarBro Form</Link>
                           <Link className='collapse-item' to="/Sample" element={<Sample/>}>Sample</Link>                          
                            <Link className='collapse-item' to="/Autocomplete" element={<Autocomplete/>}>Autocomplete</Link>
                            <Link className='collapse-item' to="/Pass_form" element={<Pass_form/>}>Password-Management</Link>
                            <Link className='collapse-item' to="/Student_Details" element={<Student_Details/>}>Student_Details</Link>

                           <a className="collapse-item" href="utilities-other.html">Other</a>
                        </div>
                     </div>
                  </li>
                  {/* <!-- Divider --> */}
                  <hr className="sidebar-divider"/>
                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading">
                     Addons
                  </div>
                  {/* <!-- Nav Item - Pages Collapse Menu --> */}
                  <li className="nav-item">
                     <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                     <i className="fas fa-fw fa-folder"></i>
                     <span>Pages</span>
                     </a>
                     <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                           <h6 className="collapse-header">Login Screens:</h6>
                           <a className="collapse-item" href="login.html">Login</a>
                           <a className="collapse-item" href="register.html">Register</a>
                           <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                           <div className="collapse-divider"></div>
                           <h6 className="collapse-header">Other Pages:</h6>
                           <a className="collapse-item" href="404.html">404 Page</a>
                           <a className="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                     </div>
                  </li>
                  {/* <!-- Nav Item - Charts --> */}
                  <li className="nav-item">
                     <a className="nav-link" href="charts.html">
                     <i className="fas fa-fw fa-chart-area"></i>
                     <span>Charts</span></a>
                  </li>
                  {/* <!-- Nav Item - Tables --> */}
                  <li className="nav-item">
                     <a className="nav-link" href="tables.html">
                     <i className="fas fa-fw fa-table"></i>
                     <span>Tables</span></a>
                  </li>
                  {/* <!-- Divider --> */}
                  <hr className="sidebar-divider d-none d-md-block"/>
                  {/* <!-- Sidebar Toggler (Sidebar) --> */}
                  <div className="text-center d-none d-md-inline">
                     <button className="rounded-circle border-0" id="sidebarToggle"></button>
                  </div>
                  {/* <!-- Sidebar Message --> */}
                  <div className="sidebar-card d-none d-lg-flex">
                     <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                     <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                     <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                  </div>
               </ul>
               {/* <!-- End of Sidebar --> */}
               <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
  {/* <!-- Topbar --> */}
  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

{/* <!-- Sidebar Toggle (Topbar) --> */}
<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars"></i>
</button>

{/* <!-- Topbar Search --> */}
<form
    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div className="input-group">
        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
            aria-label="Search" id="search" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
            <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
            </button>
        </div>
    </div>
</form>
<div class="navbar-nav ml-auto">
        <button type="button" class="btn btn-outline-primary px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        </div>
{/* <!-- Topbar Navbar --> */}
<ul className="navbar-nav ml-end">

    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
    <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
        </a>
        {/* <!-- Dropdown - Messages --> */}
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small"
                        placeholder="Search for..." aria-label="Search"
                        aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </li>

    {/* <!-- Nav Item - Alerts --> */}
    <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bell fa-fw"></i>
            {/* <!-- Counter - Alerts --> */}
            <span className="badge badge-danger badge-counter">3+</span>
        </a>
        {/* <!-- Dropdown - Alerts --> */}
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">
                Alerts Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                    <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                    </div>
                </div>
                <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                    <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                    </div>
                </div>
                <div>
                    <div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                    <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                </div>
                <div>
                    <div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                </div>
            </a>
            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
        </div>
    </li>

    {/* <!-- Nav Item - Messages --> */}
    <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-envelope fa-fw"></i>
            {/* <!-- Counter - Messages --> */}
            <span className="badge badge-danger badge-counter">7</span>
        </a>
        {/* <!-- Dropdown - Messages --> */}
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">
                Message Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                        alt="..."/>
                    <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.</div>
                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/undraw_profile_2.svg"
                        alt="..."/>
                    <div className="status-indicator"></div>
                </div>
                <div>
                    <div className="text-truncate">I have the photos that you ordered last month, how
                        would you like them sent to you?</div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/undraw_profile_3.svg"
                        alt="..."/>
                    <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                    <div className="text-truncate">Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!</div>
                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                        alt="..."/>
                    <div className="status-indicator bg-success"></div>
                </div>
                <div>
                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they aren't good...</div>
                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
            </a>
            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
        </div>
    </li>

    <div className="topbar-divider d-none d-sm-block"></div>

    {/* <!-- Nav Item - User Information --> */}
    <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
            <img className="img-profile rounded-circle"
                src="img/undraw_profile.svg"/>
        </a>
        {/* <!-- Dropdown - User Information --> */}
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
            </a>
            <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
            </a>
            <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </a>
        </div>
    </li>

</ul>

</nav>

<div id="content">
<div id="content">
                     {/* <!-- End of Topbar --> */}
                     {/* <!-- Begin Page Content --> */}
                     <div className="container-fluid">
                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                           <h1 className="h3 mb-0 text-gray-800">
                           </h1>
                           <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                              className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                              
                        </div>
                     </div>

               {/* <!-- Content Wrapper --> */}
               <div id="content-wrapper" className="d-flex flex-column">
            
                  {/* <!-- Main Content --> */}
                 
               
                     <Route exact path='/Form'>
                        <Form/>
                     </Route>
                     <Route exact path='/In01form'>
                        <In01form/>
                     </Route>
                     <Route exact path='/In02table'>
                        <In02table/>
                     </Route>
                     <Route exact path='/att_form'>
                    <Attform/>
                     </Route>
                     <Route exact path='/Sample'>
                    <Sample/>
                     </Route>
                     <Route exact path='/Autocomplete'>
                     <Autocomplete/>
                     </Route>
                     <Route exact path='/pass_form'>
                        <Pass_form/>
                     </Route>
                     <Route exact path='/Student_Details'>
                        <Student_Details/>

                     </Route>
                  </div>
               </div>
            </div>
       
       </div></div>  
       </React.Fragment>
      </Switch>
   </BrowserRouter>
   
</div>
)}
export default Car;