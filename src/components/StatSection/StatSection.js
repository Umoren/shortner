import React from 'react';
import './styles.css';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import icon1 from "../../assets/images/icon-brand-recognition.svg"
import icon2 from "../../assets/images/icon-detailed-records.svg";
import icon3 from "../../assets/images/icon-fully-customizable.svg";

const StatSection = () => {
    return (
        <div className="adv-stat">
            <div className="container">
                <div className="text-align ">
                    <h3 className="headerTitle"> Advanced Statistics </h3>
                    <p className="description text-center headerDescription"> 
                        Track how your links are performing accros the web with our advanced
                        statistics dashboard.
                    </p>
                </div>
                <div class="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <Card className="shadow "> 
                            <CardImg className="icon"  src={icon1} alt="Recognition" />
                            <CardTitle className="title"> Brand Recogition </CardTitle>
                            <CardBody>    
                                <CardText className="description"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Sapiente ducimus ipsa esse sed voluptates
                                    repudiandae ipsum ab consequatur, repellat commodi 
                                    dolore autem eius repellendus ut optio voluptatem, 
                                    laborum cupiditate adipisci!
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12" style={{marginTop: 40}}>
                        <Card className="shadow advCard"> 
                        <CardImg className="icon"  src={icon2} alt="detailed records" />
                            <CardTitle className="title"> Brand Recogition </CardTitle>
                            <CardBody>    
                                <CardText className="description"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Sapiente ducimus ipsa esse sed voluptates
                                    repudiandae ipsum ab consequatur, repellat commodi 
                                    dolore autem eius repellendus ut optio voluptatem, 
                                    laborum cupiditate adipisci!
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12" style={{marginTop: 80}}>
                        <Card className="shadow "> 
                        <CardImg className="icon"  src={icon3} alt="Fully customizable" />
                            <CardTitle className="title"> Brand Recogition </CardTitle>
                            <CardBody>    
                                <CardText className="description"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Sapiente ducimus ipsa esse sed voluptates
                                    repudiandae ipsum ab consequatur, repellat commodi 
                                    dolore autem eius repellendus ut optio voluptatem, 
                                    laborum cupiditate adipisci!
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatSection;