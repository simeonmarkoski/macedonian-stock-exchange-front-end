import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StocksService from "../../repository/stocksRepository";
import Company from "../Companies/Company";
import Companies from "../Companies/Companies";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Chart from "../Chart/Chart";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mbi10Companies: [],
            mbi10CompaniesPrices: [],
            mbi10Company: {},
            mbi10CompanyPrices: [],
            belex15Companies: [],
            belex15CompaniesPrices: [],
            belex15Company: {},
            belex15CompanyPrices: [],
            sbitopCompaniesPrices: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>

                            <Route path={"/"} element={
                                <Home />
                            }/>
                            <Route path={"/chart"} element={
                                <Chart prices={
                                    this.state.mbi10CompaniesPrices
                                } dataName={'Price (in denars)'} yValueFormatString={'#,###.## denars'} prefix={'denars'} dataTitle={'MBI10 Prices'} titleText={'MBI10 Prices'}/>
                            }/>
                            <Route path={"/mbi10-companies"} element={
                                <Companies companies={
                                    this.state.mbi10Companies
                                } companiesPrices={
                                    this.state.mbi10CompaniesPrices
                                } fetchCompanies={
                                    this.fetchMBI10Company
                                } fetchCompanyPrices={
                                    this.fetchMBI10CompanyPrices
                                } index={'mbi10'}/>
                            }/>
                            <Route path={"/mbi10-companies/:id"} element={
                                <Company company={
                                    this.state.mbi10Company
                                } companyPrices={
                                    this.state.mbi10CompanyPrices
                                } index={'mbi10'}/>
                            }/>
                            <Route path={"/belex15-companies"} element={
                                <Companies companies={
                                    this.state.belex15Companies
                                } companiesPrices={
                                    this.state.belex15CompaniesPrices
                                } fetchCompanies={
                                    this.fetchBELEX15Company
                                } fetchCompanyPrices={
                                    this.fetchBELEX15CompanyPrices
                                } index={'belex15'}/>
                            }/>
                            <Route path={"/belex15-companies/:id"} element={
                                <Company company={
                                    this.state.belex15Company
                                } companyPrices={
                                    this.state.belex15CompanyPrices
                                } index={'belex15'}/>
                            }/>
                            <Route path={"/sbitop-companies"} element={
                                <Companies companiesPrices={
                                    this.state.sbitopCompaniesPrices
                                } index={'sbitop'}/>
                            }/>

                        </Routes>

                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.fetchData();
        console.log("Sime");
        console.log(this.state.mbi10Companies);
    }

    fetchData = () => {
        this.loadMBI10Companies();
        this.loadMBI10CompaniesPrices();
        this.loadBELEX15Companies();
        this.loadBELEX15CompaniesPrices();
        this.loadSBITOPCompaniesPrices();
    }

    loadMBI10Companies = () => {
        StocksService.fetchMBI10Companies()
            .then((data) => {
                this.setState({
                    mbi10Companies: data.data
                })
            })
    }

    loadMBI10CompaniesPrices = () => {
        StocksService.fetchMBI10CompaniesPrices()
            .then((data) => {
                this.setState({
                    mbi10CompaniesPrices: data.data
                })
            })
    }

    fetchMBI10Company = (id) => {
        StocksService.fetchMBI10Company(id)
            .then((data) => {
                console.log("KAKO SIII");
                this.setState({
                    mbi10Company: data.data
                })
            })
    }

    fetchMBI10CompanyPrices = (id) => {
        StocksService.fetchMBI10CompanyPrices(id)
            .then((data) => {
                this.setState({
                    mbi10CompanyPrices: data.data
                })
            })
    }

    loadBELEX15Companies = () => {
        StocksService.fetchBELEX15Companies()
            .then((data) => {
                this.setState({
                    belex15Companies: data.data
                })
            })
    }

    loadBELEX15CompaniesPrices = () => {
        StocksService.fetchBELEX15CompaniesPrices()
            .then((data) => {
                this.setState({
                    belex15CompaniesPrices: data.data
                })
            })
    }

    fetchBELEX15Company = (id) => {
        StocksService.fetchBELEX15Company(id)
            .then((data) => {
                this.setState({
                    belex15Company: data.data
                })
            })
    }

    fetchBELEX15CompanyPrices = (id) => {
        StocksService.fetchBELEX15CompanyPrices(id)
            .then((data) => {
                this.setState({
                    belex15CompanyPrices: data.data
                })
            })
    }

    loadSBITOPCompaniesPrices = () => {
        StocksService.fetchSBITOPCompaniesPrices()
            .then((data) => {
                this.setState({
                    sbitopCompaniesPrices: data.data
                })
            })
    }
}

export default App;