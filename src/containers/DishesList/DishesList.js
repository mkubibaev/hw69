import React, {Component} from 'react';
import {connect} from "react-redux";
import DishesItem from "../../components/DishesItem/DishesItem";
import {getDishesList} from "../../store/actions/dishesActions";
import Loader from "../../components/UI/Loader/Loader";

class DishesList extends Component {

    componentDidMount() {
        this.props.getDishesList();
    }

    render() {
        if (this.props.loading) {
            return <Loader/>;
        }

        return (
            <div className="dishes-menu">
                <h3 className="border-bottom mb-3">Menu</h3>
                <div className="row">
                    {this.props.dishes.map(d => (
                        <div className="col-12 col-sm-6 col-lg-4" key={d.id}>
                            <DishesItem
                                title={d.title}
                                imgUrl={d.imgUrl}
                                price={d.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    loading: state.dishes.loading
});

const mapDispatchToProps = dispatch => ({
    getDishesList: () => dispatch(getDishesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);
