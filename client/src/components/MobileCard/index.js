import { connect } from "react-redux";

import { addItem, removeItem } from "../../redux/actions";
import './mobilecard.css';

const MobileCard = (props) => {

    const product = props.product;

    return (
            <div className='mobile_card'>
                <div className="name_details">
                    <h4> <strong>{product.name.slice(0, 58)}</strong></h4>
                    <div className="img_des">
                <img src={product.imageURL} alt={product.name} />
                <div className="des_price">
                    <p className="description">{product.description}</p>
                    <div>
                        <button className="button" onClick={() => { props.addItem(props.product) }} >Buy Now @ Rs.{product.price}</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addItem: (item) => dispatch(addItem(item)),
      removeItem: (item) => dispatch(removeItem(item)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MobileCard);