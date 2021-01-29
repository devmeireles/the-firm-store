/* eslint-disable array-callback-return */
import './style.css';
import { Link } from 'react-router-dom';

function ProductList(props) {
    return (
        <div className="ProductList col-12">
            <div className="row">
                {props.items.map((value, index) => {
                    if(index < props.limit){
                        return (
                            <Link
                                to={`produto/${value.id}`}
                                className="ProductListItemLink col-12 col-md-4 mb-4"
                            >
                                <div
                                    className="ProductListItem"
                                    key={index}
                                >
                                    <div className="m-2">
                                        <div className="content">
                                            <div className="image" style={{ backgroundImage: `url(${value.image})` }}>
                                                <div className="price-tag p-1 m-2 px-2">
                                                    <span>R${value.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <h5 className="title">{value.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ProductList;