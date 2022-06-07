import { NavLink } from "react-router-dom";

import "./sidebar.css";

function Sidebar(props) {
  return (
    <>
      <div className="sidebar">
        {props.categories &&
          props.categories.map((category, key) => {
            return (
              <NavLink
                className="link"
                key={key}
                to={`/products/${category.key}`}
              >
                {" "}
                {category.name}{" "}
              </NavLink>
            );
          })}
      </div>
    </>
  );
}

export default Sidebar;
