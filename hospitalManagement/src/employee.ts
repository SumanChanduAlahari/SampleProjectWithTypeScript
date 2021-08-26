import { EmployeeAttendence } from "./employeeAttendence";
import { Person } from "./person";

export class Employee extends Person {
    private employeeId: number;
    private employeeType: String;
    private salary: number;
    private department: string;
    employeeAttendence?: EmployeeAttendence[];
    constructor(employeeResponse: any){
        super(employeeResponse.employeename, employeeResponse.age, employeeResponse.phoneNo, employeeResponse.gender, employeeResponse.address);
        this.employeeId = employeeResponse.employeeId;
        this.employeeType = employeeResponse.employeeType;
        this.salary = employeeResponse.salary;
        this.department = employeeResponse.department;
    }
} 