import { ApiService } from "./apiService";
import { Employee } from "./employee";
import { EmployeeAttendence } from "./employeeAttendence";
import * as _ from 'lodash';

var api = new ApiService();
api.getEmployeeDetails(101, (employee: Employee) =>{
    api.getEmployeeAttendence(101, (employeeAttendence: EmployeeAttendence[]) =>{
        let filteredAttendence = _.take(employeeAttendence, 5);
        employee.employeeAttendence = filteredAttendence;
        console.log(employee);
    });
    
});
