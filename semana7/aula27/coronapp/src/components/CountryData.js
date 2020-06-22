import React, { Component } from "react";
import axios from "axios";

class CountryData extends Component {
  state = {
    countries: [],
    countryConfirmedCases: [],
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
      .get(`https://api.covid19api.com/live/country/${countryName}/status/confirmed/date/2020-05-01T13:13:30Z`)
      .then((response) => {
        this.setState({ countryConfirmedCases: response.data[data.lenght-1]
        });
        console.log(response)
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
            <p>Casos Confirmados: {this.state.countryConfirmedCases}</p>
        </div>
      </div>
    );
  }
}

export default CountryData;
