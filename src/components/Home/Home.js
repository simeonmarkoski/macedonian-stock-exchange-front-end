import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    render() {

        return (
            <div className={"container mm-4 mt-5"}>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">MBI 10</h5>
                                <p className="card-text">The MBI 10 decreased 303 points or 4.92% since the beginning of 2022, according to trading on a contract for difference (CFD) that tracks this benchmark index from Macedonia.</p>
                                <Link href="#" className="btn btn-primary" to={"/mbi10-companies"}>See Companies</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">BELEX 15</h5>
                                <p className="card-text">The BELEX 15 decreased 1 points or 0.15% since the beginning of 2022, according to trading on a contract for difference (CFD) that tracks this benchmark index from Serbia.</p>
                                <Link href="#" className="btn btn-primary" to={"/belex15-companies"}>See Companies</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title justify-content-center">SBITOP</h5>
                                <p className="card-text">The SBITOP decreased 106 points or 8.42% since the beginning of 2022, according to trading on a contract for difference (CFD) that tracks this benchmark index from Slovenia.</p>
                                <Link href="#" className="btn btn-primary" to={"/sbitop-companies"}>See Chart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;