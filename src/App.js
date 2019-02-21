import React, {Component} from 'react';
import DishesList from "./containers/DishesList/DishesList";
import Cart from "./containers/Cart/Cart";

class App extends Component {
    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <DishesList/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Cart/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
