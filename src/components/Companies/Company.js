import React from 'react';
import {Link} from 'react-router-dom';
import Chart from "../Chart/Chart";

class Company extends React.Component {

    render() {

        console.log("Nichi");
        console.log(this.props.company)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>

                    <div className={"container w-50"} style={{ display: "-webkit-inline-box"}}>
                    <h1>{ this.props.company.name || this.props.company.name_of_security }</h1>
                        { this.props.index === "mbi10" ? (<img src={`/images/${this.props.company.hash}.png`}/>) : ""}
                    </div>

                    <div className={"container w-25"}>
                    <ul className="list-group mrg-top">

                        { this.props.company.symbol ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Symbol
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.symbol }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.address ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Address
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.address }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.city ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                City
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.city }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.country_alpha2 ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Country Alpha2
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.country_alpha2 }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.email ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Email
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.email }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.website ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Website
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.website }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.phone_number ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Phone Number
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.phone_number }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.fax_number ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Fax Number
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.fax_number }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.category ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Category
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.category }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.market ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Market
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.market }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.trading_method ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Trading Method
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.trading_method }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.registry_number ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Registry Number
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.registry_number }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.isin ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                ISIN
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.isin }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.cfi ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                CFI
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.cfi }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.sector_code ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Sector Code
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.sector_code }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.sector_name ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Sector Name
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.sector_name }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.number_of_shares_in_outstanding ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Number Of Shares In Outstanding
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.number_of_shares_in_outstanding }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.number_of_shares_in_trading ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Number Of Shares In Trading
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.number_of_shares_in_trading }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.currency ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Currency
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.currency }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.statistical_overview_of_ownership_structure ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Statidtical Overivew Of Ownership Structure
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.statistical_overview_of_ownership_structure }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.website ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Website
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.website }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.full_name ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Full Name
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.full_name }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.legal_status ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Legal Status
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.legal_status }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.date_of_establishment ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Date Of Establishment
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.date_of_establishment }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.number_of_the_decision_of_entry_in_the_court_register ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Number Of The Decision Of Entry In The Court Register
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.number_of_the_decision_of_entry_in_the_court_register }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.tax_identification_number ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Tax Identification Number
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.tax_identification_number }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.identification_number ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Identification Number
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.identification_number }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.activity_code ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Activity Code
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.activity_code }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.name_and_surname_of_the_director ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Name And Surname Of The Director
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.name_and_surname_of_the_director }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.name_and_surname_of_the_contact_person ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Name And Surname Of The Contact Person
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.name_and_surname_of_the_contact_person }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.phone ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Phone
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.phone }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.fax ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Fax
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.fax }</span>
                            </li>
                        ) : ('')}

                        { this.props.company.name_of_corporate_agent ? (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Name Of Corporate Agent
                                <span className="badge badge-primary badge-pill toBlue">{ this.props.company.name_of_corporate_agent }</span>
                            </li>
                        ) : ('')}
                    </ul>
                </div>


                    { this.props.index === "mbi10" ? (
                        <Chart prices={
                            this.props.companyPrices
                        } dataName={'Price (in denars)'} yValueFormatString={'#,###.## denars'}
                               prefix={'denars'} dataTitle={`${this.props.company.name || this.props.company.name_of_security} Prices`} titleText={`${this.props.company.name || this.props.company.name_of_security} Prices`}/>
                    ) : this.props.index === "belex15" ? (
                        <Chart prices={
                            this.props.companyPrices
                        } dataName={'Price (in euros)'} yValueFormatString={'#,###.## euros'}
                               prefix={'euros'} dataTitle={`${this.props.company.name || this.props.company.name_of_security} Prices`} titleText={`${this.props.company.name || this.props.company.name_of_security} Prices`}/>
                    ) : (
                        <Chart prices={
                            this.props.companyPrices
                        } dataName={'Price (in euros)'} yValueFormatString={'#,###.## euros'}
                               prefix={'euros'} dataTitle={`${this.props.company.name || this.props.company.name_of_security} Prices`} titleText={`${this.props.company.name || this.props.company.name_of_security} Prices`}/>
                    )}

                </div>
            </div>
        )
    }

}

export default Company;