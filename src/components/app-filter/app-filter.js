import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    
    
    render(){
        return (
            <div className="btn-group">
                <button className="btn btn-light"
                        type="button">
                            All employees
                </button>
                <button className="btn btn-outline-light"
                        type="button">
                            To be upgraded
                </button>
                <button className="btn btn-outline-light"
                        type="button">
                            Salary higher than 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;