"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var request = __importStar(require("request"));
var employee_1 = require("./employee");
var employeeAttendence_1 = require("./employeeAttendence");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var ApiService = /** @class */ (function () {
    function ApiService() {
        this.getEmployeeDetails = function (employeeId, callBackFunction) {
            request.get('http://localhost:8081/hospitalManagement/admin/employee/id?employeeId=' + employeeId, OPTIONS, function (error, response, body) { var employee = new employee_1.Employee(body); callBackFunction(employee); });
        };
        this.getEmployeeAttendence = function (employeeId, callBackFunction) {
            request.get('http://localhost:8081/hospitalManagement/admin/employeePresence/id?employeeId=' + employeeId, OPTIONS, function (error, response, body) { callBackFunction(body.map(function (employeeAttendence) { return new employeeAttendence_1.EmployeeAttendence(employeeAttendence); })); });
        };
    }
    return ApiService;
}());
exports.ApiService = ApiService;
