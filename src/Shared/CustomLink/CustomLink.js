import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={match ? "actived-link" : "non-active-link"}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
};
export default CustomLink;
