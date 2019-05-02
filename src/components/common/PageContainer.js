import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Routing from "../../Routing";

class PageContainer extends Component {
    render() {
        return (
            <div className="page-container">
                <Header/>
                <main className='main-content bgc-grey-100'>
                    <div id='mainContent'>
                        <Routing/>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default PageContainer;
