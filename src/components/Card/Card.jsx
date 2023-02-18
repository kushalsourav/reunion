import { Fragment } from "react";
import Grid from "../Grid/Grid";
import "./Card.css";

const Card = ({property, filters, filterText}) => {
  return (
    <Grid>
    {
        property.map((props) => { 
            if(props.location.toLowerCase().indexOf(filterText) === -1) {
                return <Fragment key={props._id}></Fragment>;
            }
            if(props.location.indexOf(filters.location)) {
                return <Fragment key={props.id} ></Fragment>;
            }
            if(String(props.beds).indexOf(filters.bed)) {
              return <Fragment key={props.id} ></Fragment>;
            }
            if(props.type.indexOf(filters.propertyType)) {
            return <Fragment key={props.id} ></Fragment>; 
            } 
            return(
                <div className="card" key={props.id}>
                <img src={props.image} alt="" className="card-image" />
                <div className="card-description">
                    <span className="card-price">{"$"+props.price}<small className="card-small">{" /month"}</small></span>
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-address">{props.address}</p>
                    <div className="">
                        <span className="card-items"><i className="fa fa-bed card-icon" aria-hidden="true"></i>{props.beds}</span>
                        <span className="card-items"><i className="fa fa-bath card-icon" aria-hidden="true"></i>{props.bathrooms}</span>
                    </div>
                </div>
            </div>
            )
        })
    }
    </Grid>
  );
};

export default Card;