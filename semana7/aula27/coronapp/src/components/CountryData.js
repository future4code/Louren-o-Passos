import React, { Component } from "react";
import axios from "axios";

class CountryData extends Component {
  state = {
    countries: [],
    countryInformation: "",
    globalInformation:""
  };
  componentDidMount = () => {
    axios.get("https://api.covid19api.com/summary").then((response) => {
      this.setState({ countries: response.data.Countries });
      console.log(this.state.countries)
    });
  };

//   fetchGlobalData = () => {
//       axios.get("https://api.covid19api.com/summary")
//       .then
//   }

  fetchCountryData = (event) => {
    const countryName = event.target.value;
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        this.setState({ countryInformation: response.data.Countries});
        console.log(this.state.countryInformation);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <select onChange={this.fetchCountryData}>
          <option value="" />
          {this.state.countries.map((country) => {
            return <option value={country.Country}>{country.Country}</option>;
          })}
        </select>
        <div>
            
        </div>
      </div>
    );
  }
}

export default CountryData;
