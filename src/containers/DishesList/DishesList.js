import React, {Component} from 'react';
import axios from '../../axios-dishes';
import DishesItem from "../../components/DishesItem/DishesItem";

class DishesList extends Component {
    state = {
        dishes: [],
        loading: true
    };

    componentDidMount() {
        axios.get('dishes.json').then(response => {
            if (!response.data) return;

            const fetchedDishes = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id: key
                }
            });

            this.setState({dishes: fetchedDishes});
        }).finally(() => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <div className="dishes-menu">
                <h3 className="border-bottom mb-3">Menu</h3>
                <div className="row">
                    {this.state.dishes.map(d => (
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

export default DishesList;
