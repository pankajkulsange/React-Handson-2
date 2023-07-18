import React, { Component } from "react";
import "./FormComp.css";
class FormComp extends Component {
  state = {
    name: "",
    dept: "",
    rating: "",
    EmpData: [],
  };

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  clickHandle = (e) => {
    e.preventDefault();
    let newObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    };
    this.state.EmpData.push(newObj);
    this.setState({ EmpData: this.state.EmpData });
    this.setState({ name: "", dept: "", rating: "" });
  };
  render() {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form className="form" onSubmit={this.clickHandle}>
          <span className="blue-bg">Name: </span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeHandle}
          />
          <br />
          <span className="blue-bg">Department: </span>
          <input
            type="text"
            name="dept"
            value={this.state.dept}
            onChange={this.changeHandle}
          />
          <br />
          <span className="blue-bg">Rating: </span>
          <input
            type="text"
            name="rating"
            value={this.state.rating}
            onChange={this.changeHandle}
          />
          <br />
          <button type="submit" className="blue-bg">
            Submit
          </button>
        </form>
        <div className="center">
          <div className="container">
            <div className="wrapper">
              {this.state.EmpData.map((item, index) => {
                return (
                  <span className="txt-wrapper" key={index}>
                    Name: {item.name} || Department: {item.dept} || Rating{" "}
                    {item.rating}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormComp;
