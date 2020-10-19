import { useSelector } from "react-redux";

import { IApplicationState } from "../store/modules/rootReducer";

const Footer = () => {
  const { data } = useSelector((state: IApplicationState) => state.todos);

  return <div id="footer">{data.length}</div>;
};

export default Footer;
