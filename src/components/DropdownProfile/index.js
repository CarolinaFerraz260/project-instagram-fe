// import {
//   Dropdown,
//   ButtonDropDown,
//   ProfileIcon,
//   ContainerLinksMenu,
//   LinksMenu,
// } from "./styles";
import { useNavigate } from "react-router-dom";

import IconProfile from "../../assets/profile.svg";
import useAuth from "../../hooks/useAuth";
import "./index.css";

const DropdownProfile = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  function logout() {
    localStorage.removeItem('token')
    setAuth({});
    navigate("/")
  }

  return (
    <>
      {/* <Dropdown>
        <ButtonDropDown>
          <ProfileIcon src={IconProfile} />
        </ButtonDropDown>
        <ContainerLinksMenu>
          <LinksMenu to="/profile">Profile</LinksMenu>
          <LinksMenu to="/settings">Settings</LinksMenu>
          <LinksMenu to="/login">Logout</LinksMenu>
        </ContainerLinksMenu>
      </Dropdown> */}
      <div className="dropdown">
        <button className="dropButton">
          <img src={IconProfile}></img>
        </button>
        <div className="dropdown-content">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/" onClick={logout}>Logout</a>
        </div>
      </div>
    </>
  );
}
export default DropdownProfile;
