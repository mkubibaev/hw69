import React, {Component} from 'react';
import DishesList from "./containers/ProductList/ProductList";
import Cart from "./containers/Cart/Cart";

class App extends Component {
    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <DishesList/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <Cart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
