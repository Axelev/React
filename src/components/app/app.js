import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employess-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'John Wick', salary: 300, increase: false},
        {name: 'Bob Marley', salary: 400, increase: false},
        {name: 'Brandon Smith', salary: 1500, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;