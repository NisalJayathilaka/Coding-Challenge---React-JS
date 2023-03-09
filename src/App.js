import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import ListAllUser from './component/ListAllUser';
import UserDetails from './component/UserDetails';

function App() {
  return (
   <Fragment>
     <Router>
        <Routes>
          <Route path="/Coding-Challenge---React-JS" element={<ListAllUser />} />
          <Route path="/Coding-Challenge---React-JS/userDetails" element={<UserDetails />} />
        </Routes>
      </Router>
   </Fragment>
  );
}

export default App;
