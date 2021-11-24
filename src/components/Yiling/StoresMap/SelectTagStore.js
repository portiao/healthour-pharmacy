import React from "react";
import "./selectTagStore.css";



class SelectTagStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SiteArr: [] };
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeSite = this.handleChangeSite.bind(this);
  }

  handleChangeCity(event) {
    this.props.setStoresMapCity(event.target.value);

    if (event.target.value === "縣市") {
      this.setState({ SiteArr: [] });
    } 
  }

  handleChangeSite(event) {
    this.props.setStoresMapSite(event.target.value);
  }

  render() {
    return (
      <>
        <div className="selectAll">
          <label>
            <select
              className="selectClass"
              value={this.props.storesMapCity}
              onChange={this.handleChangeCity}
            >
              <option value="縣市">縣市</option>
              {this.props.inputCityIn.map((v, i) => (
                <option value={v} key={i}>
                  {v}
                </option>
              ))}
            </select>
          </label>

          <label>
            <select
              className="selectClass"
              value={this.props.storesMapSite}
              onChange={this.handleChangeSite}
            >
              <option value="區域">區域</option>
              {this.props.inputSiteIn.map((v, i) => (
                <option value={v} key={i}>
                  {v}
                </option>
              ))}
            </select>
          </label>
        </div>
      </>
    );
  }
}
export default SelectTagStore;
