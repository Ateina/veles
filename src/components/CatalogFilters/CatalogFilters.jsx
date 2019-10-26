import React from "react";

import {
  InputFilter,
  CheckBoxFilter
} from "../Filters/Filters";
import MainFilters from "./MainFilters";
import AdditionalFilters from "./AdditionalFilters";

import { ArrayUtility } from "../../utilities/utilities";
import "./styles.scss";

class CatalogFilters extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleFilters: false
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    this.setState(function (prevState) {
      return { toggleFilters: !prevState.toggleFilters };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="filters-pets">
          <MainFilters>
            <InputFilter
              name="name"
              placeholder="Search by name"
              filterPets={this.props.filterPets}
            />
            <CheckBoxFilter
              label="Тип"
              filterName="type"
              filteredValues={ArrayUtility.RemoveDuplicates(
                this.props.pets,
                "type"
              )}
              filterPets={this.props.filterPets}
            />
            <CheckBoxFilter
              label="Пол"
              filterName="sex"
              filteredValues={ArrayUtility.RemoveDuplicates(
                this.props.pets,
                "sex"
              )}
              filterPets={this.props.filterPets}
            />
            <div className="toggle-button">
              <button className="toggle-filters-button" onClick={this.toggleButton}>
                {this.state.toggleFilters ? "Скрыть дополнительные фильтры" : "Показать дополнительные фильтры"}
              </button>
            </div>
          </MainFilters>
          {this.state.toggleFilters && (
            <AdditionalFilters>
              <CheckBoxFilter
                label="Где находится животное"
                filterName="status"
                filteredValues={ArrayUtility.RemoveDuplicates(
                  this.props.pets,
                  "status"
                )}
                filterPets={this.props.filterPets}
              />
              <CheckBoxFilter
                label="Хорошо ладит с:"
                filterName="friendly_with"
                filteredValues={ArrayUtility.RemoveMultiDuplicates(
                  this.props.pets,
                  "friendly_with"
                )}
                filterPets={this.props.filterPets}
              />
              <CheckBoxFilter
                label="Где хочет жить:"
                filterName="preferred_place_to_live"
                filteredValues={ArrayUtility.RemoveMultiDuplicates(
                  this.props.pets,
                  "preferred_place_to_live"
                )}
                filterPets={this.props.filterPets}
              />
            </AdditionalFilters>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default CatalogFilters;
