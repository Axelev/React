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
            ],
            term: ''
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

        if (name.length < 3 || salary <= 0) {
            alert('Name or salary is not in correct form!')
        } else {
            const newItem = {
                name,
                salary,
                highlight: false,
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
    }

    onToggleProp = (key, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.key === key) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    render() {
        const {data, term} = this.state;
        const visibleData = this.searchEmp(data,term);


        return (
            <div className="app">
                <AppInfo
                    numberOfEmp={data}/>   
                <div className='search-panel'>
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;