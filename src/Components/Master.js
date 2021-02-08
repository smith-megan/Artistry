import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home'
import Art from '../Art'

class Master extends React.Component {
    render() {
        return (
            <div>
                <Router basename={`${process.env.PUBLIC_URL}/`}>
                    <Route exact path='/' component={Home} />
                    <Route path='/gallery' exact component={Art} />
                </Router>
            </div >
        )
    }
}
export default Master;