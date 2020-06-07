import React from 'react';
import "./styles.css";
import { Button } from 'reactstrap';

const CoverArea = () => {
    return (
        <div className="cover bg-white">
            <div className="row">
                <div className="container-fluid">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <header>
                        <h1 className="headerTitle mb-2"> More than just <br/> shorter links </h1>
                        <p className="description mb-3"> Build your brand's recogition and get detailed <br /> 
                            insights on how your links are performing.
                        </p>
                        <Button className="rounded-pill bg-info text-white"> Get Started </Button>
                    </header>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    
                </div>
            </div>
            </div> 
        </div>
    )
}

export default CoverArea;