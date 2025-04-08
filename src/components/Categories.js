import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All products",
        },
        {
          key: "chairs",
          name: "Chairs",
        },
        {
          key: "tables",
          name: "Tables",
        },

        {
          key: "shelves",
          name: "Shelves",
        },
        {
          key: "storage",
          name: "Storage",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
