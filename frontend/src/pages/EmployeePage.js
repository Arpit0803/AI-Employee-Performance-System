import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeePage() {

  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState("");
  const [performanceScore, setPerformanceScore] = useState("");
  const [experience, setExperience] = useState("");

  const [searchDepartment, setSearchDepartment] = useState("");

  const token = localStorage.getItem("token");

  // GET EMPLOYEES
  const fetchEmployees = async () => {

    try {

      const response = await axios.get(
        "https://ai-employee-backend-q5jw.onrender.com/api/employees",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // ADD EMPLOYEE
  const addEmployee = async () => {

    try {

      await axios.post(
        "https://ai-employee-backend-q5jw.onrender.com/api/employees",
        {
          name,
          email,
          department,
          skills: skills.split(","),
          performanceScore,
          experience
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Employee Added");

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }

  };

  // SEARCH EMPLOYEE
  const searchEmployee = async () => {

    try {

      const response = await axios.get(
        `https://ai-employee-backend-q5jw.onrender.com/api/employees/search?department=${searchDepartment}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // AI RECOMMENDATION
  const getRecommendation = async (employeeId) => {

    try {

      const response = await axios.post(
        "https://ai-employee-backend-q5jw.onrender.com/api/ai/recommend",
        {
          employeeId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(response.data.recommendation);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    if (token) {
      fetchEmployees();
    }

  }, []);

  return (

    <div className="card">

      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        onChange={(e) => setDepartment(e.target.value)}
      />

      <input
        type="text"
        placeholder="Skills comma separated"
        onChange={(e) => setSkills(e.target.value)}
      />

      <input
        type="number"
        placeholder="Performance Score"
        onChange={(e) => setPerformanceScore(e.target.value)}
      />

      <input
        type="number"
        placeholder="Experience"
        onChange={(e) => setExperience(e.target.value)}
      />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      <hr />

      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Department"
        onChange={(e) => setSearchDepartment(e.target.value)}
      />

      <button onClick={searchEmployee}>
        Search
      </button>

      <hr />

      <h2>Employee List</h2>

      {

        employees.map((emp) => (

          <div className="employee-card" key={emp._id}>

            <h3>{emp.name}</h3>

            <p>Email: {emp.email}</p>

            <p>Department: {emp.department}</p>

            <p>Skills: {emp.skills.join(", ")}</p>

            <p>Score: {emp.performanceScore}</p>

            <p>Experience: {emp.experience} years</p>

            <button
              onClick={() => getRecommendation(emp._id)}
            >
              Get AI Recommendation
            </button>

          </div>

        ))

      }

    </div>

  );

}

export default EmployeePage;