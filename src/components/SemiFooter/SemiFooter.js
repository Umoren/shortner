import React from 'react';
import './styles.css'
import { Button } from 'reactstrap';

const SemiFooter = () => {
    return (
        <div className=" semi-footer">
            <div className="text-align">
                <h3> Boost your links today </h3>
                <Button className="rounded-pill bg-info text-white"> Get Started </Button>
            </div>
        </div>
    )
}

export default SemiFooter;