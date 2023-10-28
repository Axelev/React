import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employess-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Wick', salary: 300, highlight: false, increase: false, key: 1},
                {name: 'Bob Marley', salary: 400, highlight: false, increase: false, key: 2},
                {name: 'Brandon Smith', salary: 1500, highlight: false, increase: false, key: 3},
            ]
        }
        this.maxKey = 4;
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.key !== id)
            }
            
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            key: this.maxKey++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {


        return (
            <div className="app">
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );

    }
}

export default App;