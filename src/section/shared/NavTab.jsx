import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
NavTab.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};
const styles = {
  "font-weight": "inherit",
  "letter-spacing": "inherit",
  "line-height": "inherit",
  "font-size": "inherit",
  color: "inherit",
};
function NavTab({ children, to, ...props }) {
  return (
    <li style={styles} className="nav__item">
      <Link {...props} style={styles} to={to}>
        {children}
      </Link>
    </li>
  );
}

export default NavTab;
