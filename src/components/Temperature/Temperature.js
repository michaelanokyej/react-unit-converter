import React, { Component } from "react";
import Nav from "../NavBar/NavBar";

class Temperature extends Component {
  state = {
    teacherInput: 0,
    studentInput: 0,
    results: "invalid",
    converetedResult: 0,
    teacherUnit: "",
    studentUnit: "",
  };

  handleConversion = () => {
    let convertedValue = 0;
    if (this.state.teacherUnit === "kelvin") {
      if (this.state.studentUnit === "celsius") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}-273.15`) * 10) / 10;
      } else if (this.state.studentUnit === "fahrenheit") {
        convertedValue =
          Math.round(
            eval(`(${this.state.teacherInput}-273.15) * 9/5 + 32`) * 10
          ) / 10;
      } else if (this.state.studentUnit === "rankine") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*1.8`) * 10) / 10;
      }
    } else if (this.state.teacherUnit === "celsius") {
      if (this.state.studentUnit === "kelvin") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}+273.15`) * 10) / 10;
      } else if (this.state.studentUnit === "fahrenheit") {
        convertedValue =
          Math.round(eval(`(${this.state.teacherInput}* 9/5) + 32`) * 10) /
          10;
      } else if (this.state.studentUnit === "rankine") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}* 9/5 + 491.67`) * 10) /
          10;
      }
    } else if (this.state.teacherUnit === "fahrenheit") {
      if (this.state.studentUnit === "kelvin") {
        convertedValue =
          Math.round(
            eval(`(${this.state.teacherInput}-32) * 5/9 + 273.15`) * 10
          ) / 10;
      } else if (this.state.studentUnit === "celsius") {
        convertedValue =
          Math.round(eval(`(${this.state.teacherInput}-32) * 5/9`) * 10) /
          10;
      } else if (this.state.studentUnit === "rankine") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}+459.67`) * 10) /
          10;
      }
    } else if (this.state.teacherUnit === "rankine") {
      if (this.state.studentUnit === "kelvin") {
        convertedValue =
          Math.round(
            eval(`${this.state.teacherInput}*5/9`) * 10
          ) / 10;
      } else if (this.state.studentUnit === "celsius") {
        convertedValue =
          Math.round(eval(`(${this.state.teacherInput}- 491.67) * 5/9`) * 10) /
          10;
      } else if (this.state.studentUnit === "fahrenheit") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}-459.67`) * 10) /
          10;
      }
    }
    
    const results =
      convertedValue === this.state.studentInput ? "Correct" : "Incorrect";
    this.setState({ results,  converetedResult: convertedValue});
  };

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="main-body">
          <h1>Temperature Conversion</h1>
          <div className="mainOptionDiv">
            <div>
              <label htmlFor="teacher-input">Teacher's Input</label>
              <input
                type="number"
                placeholder="38"
                name="teacher-input"
                onChange={(e) =>
                  this.setState({ teacherInput: Number(e.target.value) })
                }
              />
              <select
                onChange={(e) => this.setState({ teacherUnit: e.target.value })}
              >
                <option value="">Choose One</option>
                <option value="kelvin">Kelvin</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="rankine">Rankine</option>
              </select>
            </div>
            <div>
              <label htmlFor="student-input">Student's Input</label>
              <input
                type="number"
                placeholder="500"
                name="student-input"
                onChange={(e) =>
                  this.setState({ studentInput: Number(e.target.value) })
                }
              />
              <select
                onChange={(e) => this.setState({ studentUnit: e.target.value })}
              >
                <option value="">Choose One</option>
                <option value="kelvin">Kelvin</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="rankine">Rankine</option>
              </select>
            </div>
            
          </div>
          <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.handleConversion();
                }}
              >
                Convert
              </button>
            </div>
          <div>
            <div><p>Output : {this.state.results === "invalid" ? null : this.state.results}</p></div>
            <div>Correct Ans : {this.state.converetedResult}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Temperature;
