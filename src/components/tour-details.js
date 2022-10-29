import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TourDetails from './section-components/tour-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const TourDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tour Details"  />
        <TourDetails />
        <Subscribe />
        <Footer />
    </div>
}

export default TourDetailsPage

