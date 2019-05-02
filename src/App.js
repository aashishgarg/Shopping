import React from 'react';
import './components/common/Loader.css';
import Sidebar from './components/common/sidebar/Sidebar';
import PageContainer from "./components/common/PageContainer";
import './assets/scripts/index.js'

function App() {
    return (
        <div>
            <Sidebar/>
            <PageContainer/>
        </div>
    )
}

export default App;
