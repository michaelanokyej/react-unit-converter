import React, { Component } from "react";
import Nav from "../NavBar/NavBar";

class Volume extends Component {
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
    if (this.state.teacherUnit === "liters") {
      if (this.state.studentUnit === "tablespoons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*67.628`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-inches") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*61.024`) * 10) / 10;
      } else if (this.state.studentUnit === "cups") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*4.167`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-feet") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/28.317`) * 10) / 10;
      } else if (this.state.studentUnit === "gallons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/3.785`) * 10) / 10;
      }
    } else if (this.state.teacherUnit === "tablespoons") {
      if (this.state.studentUnit === "liters") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/67.628`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-inches") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/1.108`) * 10) / 10;
      } else if (this.state.studentUnit === "cups") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/16.231`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-feet") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/1915`) * 10) / 10;
      } else if (this.state.studentUnit === "gallons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/256`) * 10) / 10;
      }
    } else if (this.state.teacherUnit === "cubic-inches") {
      if (this.state.studentUnit === "liters") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/61.024`) * 10) / 10;
      } else if (this.state.studentUnit === "tablespoons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*3.325`) * 10) / 10;
      } else if (this.state.studentUnit === "cups") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/14.646`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-feet") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/1728`) * 10) / 10;
      } else if (this.state.studentUnit === "gallons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/231`) * 10) / 10;
      }
    } else if (this.state.teacherUnit === "cups") {
      if (this.state.studentUnit === "liters") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/4.167`) * 10) / 10;
      } else if (this.state.studentUnit === "tablespoons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*16.231`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-inches") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*14.646`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-feet") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/118`) * 10) / 10;
      } else if (this.state.studentUnit === "gallons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/15.773`) * 10) / 10;
      }
    } else if (this.state.teacherUnit === "cubic-feet") {
      if (this.state.studentUnit === "liters") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*28.317`) * 10) / 10;
      } else if (this.state.studentUnit === "tablespoons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*1915`) * 10) / 10;
      } else if (this.state.studentUnit === "cups") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*118`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-inches") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*1728`) * 10) / 10;
      } else if (this.state.studentUnit === "gallons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*7.481`) * 10) / 10;
      }
    } else if (this.state.teacherUnit === "gallon") {
      if (this.state.studentUnit === "liters") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*3.785`) * 10) / 10;
      } else if (this.state.studentUnit === "tablespoons") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*768`) * 10) / 10;
      } else if (this.state.studentUnit === "cups") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}*15.773`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-feet") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/7.481`) * 10) / 10;
      } else if (this.state.studentUnit === "cubic-inches") {
        convertedValue =
          Math.round(eval(`${this.state.teacherInput}/231`) * 10) / 10;
      }
    }

    const results =
      convertedValue === this.state.studentInput ? "Correct" : "Incorrect";
    this.setState({ results, converetedResult: convertedValue });
  };

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="main-body">
          <h1>Volume Conversion</h1>
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
                <option value="liters">liters</option>
                <option value="tablespoons">tablespoons</option>
                <option value="cubic-inches">cubic-inches</option>
                <option value="cups">cups</option>
                <option value="cubic-feet">cubic-feet</option>
                <option value="gallons">gallons</option>
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
                <option value="">Choose One</option>
                <option value="liters">liters</option>
                <option value="tablespoons">tablespoons</option>
                <option value="cubic-inches">cubic-inches</option>
                <option value="cups">cups</option>
                <option value="cubic-feet">cubic-feet</option>
                <option value="gallons">gallons</option>
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
            <div>
              <p>
                Output :{" "}
                {this.state.results === "invalid" ? null : this.state.results}
              </p>
            </div>
            <div>Correct Ans : {this.state.converetedResult}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Volume;
