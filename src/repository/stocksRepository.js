import axios from '../custom-axios/axios';

const StocksService = {
    fetchMBI10Companies: () => {
        return axios.get("/mbi10-companies");
    },
    fetchMBI10CompaniesPrices: () => {
        return axios.get("/mbi10-companies/prices");
    },
    fetchMBI10Company: (id) => {
        console.log("VLEZE OVDE");
        return axios.get(`/mbi10-companies/${id}`);
    },
    fetchMBI10CompanyPrices: (id) => {
        return axios.get(`/mbi10-companies/${id}/prices`);
    },
    fetchBELEX15Companies: () => {
        return axios.get("/belex15-companies");
    },
    fetchBELEX15CompaniesPrices: () => {
        return axios.get("/belex15-companies/prices");
    },
    fetchBELEX15Company: (id) => {
        return axios.get(`/belex15-companies/${id}`)
    },
    fetchBELEX15CompanyPrices: (id) => {
        return axios.get(`/belex15-companies/${id}/prices`);
    },
    fetchSBITOPCompaniesPrices: () => {
        return axios.get("/sbitop-companies/prices");
    }
}

export default StocksService;