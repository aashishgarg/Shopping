import React from 'react';
import './components/common/Loader.css';
import Sidebar from './components/common/sidebar/Sidebar';
import './assets/scripts/index.js'
import PageContainer from "./components/common/PageContainer";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <Sidebar/>
            <PageContainer/>
        </Router>
    )
}

export default App;
