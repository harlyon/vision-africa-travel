import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import GolfDetails from './golf-details';
import Footer from '../global-components/footer-v2';

const GolfTourPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Golf Tour"  />
        <GolfDetails />
        <Footer />
    </div>
}

export default GolfTourPage