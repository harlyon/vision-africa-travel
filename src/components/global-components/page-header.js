import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (
             <div className="breadcrumb-area jarallax" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/1.png)'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-12">
				        <div className="breadcrumb-inner">
				          <h1 className="page-title">{ HeaderTitle }</h1>
				          <ul className="page-list">
				            <li><Link to="/">Home</Link></li>
				            <li>{ Subheader }</li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>


        )
    }
}


export default Page_header