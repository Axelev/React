import './app-info.css';

const AppInfo = ({numberOfEmp}) => {


    return (
        <div className="app-info">
            <h1>Employees in Axelson Company</h1>
            <h2>Total ammount of employees: {numberOfEmp.length}</h2> 
            <h2>Can be awarded by premie: {numberOfEmp.filter(item => item.increase).length}</h2>          
        </div>
    )
}

export default AppInfo;