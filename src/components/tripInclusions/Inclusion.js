import React from 'react';
import '../tripInclusions/Inclusion.css';
import { GiMeal }  from 'react-icons/gi';
import { FaTruck }  from 'react-icons/fa';
import { BiBuildingHouse }  from 'react-icons/bi';


const Inclusion = ({details}) => {

return (
    <div>
        <div class="col-md-12">
            <div class="section-title text-center">
                <div class="title-border">
                        <h1>Trip <span>Inclusions</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br/> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        <p>{details.inclusions}</p>
                        <p>{details.meals}</p>
                        <p>{details.accommodation}</p>
                        <p>{details.transport}</p>

                </div>
            </div>
        </div>
        <div className="row" >
            <div class="col-md-4 col-sm-6">
                <div class="include-item">
                    <div class="include-icon">
                        <GiMeal/>
                    </div>
                    <div class="include-text">
                        <h4>Meals</h4>
                        <p>{details.meals}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="include-item">
                    <div class="include-icon">
                        <FaTruck/>
                    </div>
                    <div class="include-text">
                        <h4>Transport</h4>
                        <p>{details.transport}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 hidden-sm">
                <div class="include-item">
                    <div class="include-icon">
                        <BiBuildingHouse/>
                    </div>
                    <div class="include-text">
                        <h4>Accommodation</h4>
                        <p>{details.accommodation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Inclusion;