import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';


const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {key, ...itemList} = item;
        return (
            <EmployeesListItem key={key} {...itemList}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;