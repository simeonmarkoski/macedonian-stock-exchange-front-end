import React from 'react';
import {Link} from 'react-router-dom';
import Chart from "../Chart/Chart";

class Companies extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Rade");
        console.log(this.props.companies);
        console.log(this.props.companiesPrices);

        return (
            <div className="container mm-4 mt-5 d-flex justify-content-center">
                <div className="row w-100">
                    { this.props.index === "mbi10" ? (
                        <Chart prices={
                            this.props.companiesPrices
                        } dataName={'Price (in denars)'} yValueFormatString={'#,###.## denars'}
                               prefix={'denars'} dataTitle={'MBI10 Prices'} titleText={'MBI10 Prices'}/>
                    ) : this.props.index === "belex15" ? (
                        <Chart prices={
                            this.props.companiesPrices
                        } dataName={'Price (in euros)'} yValueFormatString={'#,###.## euros'}
                               prefix={'euros'} dataTitle={'BELEX15 Prices'} titleText={'BELEX15 Prices'}/>
                    ) : (
                        <Chart prices={
                            this.props.companiesPrices
                        } dataName={'Price (in euros)'} yValueFormatString={'#,###.## euros'}
                               prefix={'euros'} dataTitle={'SBITOP Prices'} titleText={'SBITOP Prices'}/>
                    )}


                    <ul className="list-group mrg-top">
                        {this.props.companies?.map((company) =>
                            <Link onClick={() => {
                                this.props.fetchCompanies(company.id);
                                this.props.fetchCompanyPrices(company.id);
                            } } to={window.location.pathname + "/" + company.id} style={{ textDecoration: "none" }}>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    {company.name || company.name_of_security}
                                    <span className="badge badge-primary badge-pill toBlue">{company.symbol}</span>
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        )
    }

}

export default Companies;