"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeAttendence = void 0;
var EmployeeAttendence = /** @class */ (function () {
    function EmployeeAttendence(employeeAttendence) {
        this.employeeId = employeeAttendence.employeeId;
        this.entryDate = employeeAttendence.loginDate;
        this.loginTime = employeeAttendence.loginTime;
        this.logoutTime = employeeAttendence.logoutTime;
    }
    return EmployeeAttendence;
}());
exports.EmployeeAttendence = EmployeeAttendence;
