import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ userLoggedIn, setUserLoggedIn }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    // startTransition(() => {
    navigate(path);
    // });
  };
  return (
    <div
      style={{
        backgroundColor: "navy",
        display: "flex",
        alignItems: "center",
        // gap:'10rem',
        height: "100px",
        position:'fixed',
        top:0,
        left:0,
        right:0,
        zIndex:100,
        color: "white",
      }}
    >
      This is the Main App Header
      {userLoggedIn ? (
        <>
          {" "}
          {/* <button
            style={{ padding: ".5rem", marginLeft: "2rem" }}
            onClick={() => handleNavigation("/subapp")}
          >
            Navigate to Sub APp
          </button> */}
          <button
            style={{ padding: ".5rem", marginLeft: "2rem" }}
            onClick={() => handleNavigation("/subapp-2")}
          >
            Navigate to Second Sub APp
          </button>
          <button
            style={{ padding: ".5rem", marginLeft: "6rem" }}
            onClick={() => {
              setUserLoggedIn(false);
              handleNavigation("/");
            }}
          >
            Logout
          </button>{" "}
        </>
      ) : (
        <button
          style={{ padding: ".5rem", marginLeft: "2rem" }}
          onClick={() => setUserLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
