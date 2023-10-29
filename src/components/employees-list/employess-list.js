import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {key, ...itemList} = item;
        return (
            <EmployeesListItem 
            key={key} 
            {...itemList}
            onDelete = {() => onDelete(key)}
            onToggleProp = {(e) => onToggleProp(key, e.currentTarget.getAttribute("data-toggle"))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;