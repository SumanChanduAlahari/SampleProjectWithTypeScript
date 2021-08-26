export class EmployeeAttendence {
    private employeeId: string;
    private entryDate: string;
    private loginTime: string;
    private logoutTime: string;
    constructor(employeeAttendence: any){
        this.employeeId = employeeAttendence.employeeId;
        this.entryDate = employeeAttendence.loginDate;
        this.loginTime = employeeAttendence.loginTime;
        this.logoutTime = employeeAttendence.logoutTime;
    }
}