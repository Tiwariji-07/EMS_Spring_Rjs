package com.vivek.emp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vivek.emp.Model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
