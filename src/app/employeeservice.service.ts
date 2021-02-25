import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'http://localhost:3000/employeeDetail';

  constructor(private http: HttpClient) { }

  getEmployeeDetails() {
    return this.http.get(this.baseUrl)
  }
  saveEmployeeDetails(data) {
    return this.http.post(this.baseUrl, data)
  }
  updateEmployeeDetails(data) {
    return this.http.put(this.baseUrl + '/' + data.id, data)
  }
  deleteEmployeeById(id) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
