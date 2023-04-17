    import React,{useState} from 'react';
    import Axios from "axios";
    import './App.css';
    import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
    import Home from './pages/Home';
    import FindUserDetails from './pages/FindUserDetails';
    import MakeManualEntry from './pages/MakeManualEntry';
    import AddNewUser from './pages/AddNewUser';
    import Notice from './pages/Notice';
    import LogsViewer from './pages/LogsViewer';
    import SendNotificationToUsers from './pages/SendNotificationToUsers';
    import LogOut from './pages/LogOut';
    import Sidebar from './components/Sidebar';
    import Toolbar from './components/Logo';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {Button} from 'react-bootstrap/Button';

    

      function App () {
        // const[data,setData]=useState("");
        // const getData=async()=>{
        //   const response=await Axios.get("http://localhost:5000/getData");
        //   setData(response.data);
        // }
        // useEffect(()=>{
        //   getData()
        // },[]);
        const[sidebar, setSidebar] = useState(false);
       
        const toggle = ()=> {setSidebar(!sidebar)
       };
      return (
        <div>   
       <Router>
        <Toolbar openSidebar={toggle}/>
          <Sidebar sidebar={sidebar}>
            <Routes>
              <Route path='/' element={<Home/>} />        
              <Route path='/FindUserDetails' element={<FindUserDetails/>} />
              <Route path='/MakeManualEntry' element={<MakeManualEntry/>} />
              <Route path='/AddNewUser' element={<AddNewUser/>} />
              <Route path='/Notice' element={<Notice/>} />
              <Route path='/LogsViewer' element={<LogsViewer/>}/>
              <Route path='/SendNotificationToUsers' element={<SendNotificationToUsers/>} />
              <Route path='/LogOut' element={<LogOut/>} />
            </Routes>
          </Sidebar>
        </Router>
        </div>
        );
      };
    

export default App;
