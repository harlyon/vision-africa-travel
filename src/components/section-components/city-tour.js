import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import CityDetails from './city-details';
import Subscribe from './subscribe';
import Footer from '../global-components/footer-v2';

const CityTourPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="City Tour"  />
        <CityDetails />
        <Footer />
    </div>
}

export default CityTourPage