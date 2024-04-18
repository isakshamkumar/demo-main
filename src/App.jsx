import React, { Suspense, useEffect, useState } from "react";
//@ts-ignore
// import {Profile} from '@genflowly/genflowly-react-assets'
import "./App.css";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import {
  BrowserRouter,
  Route,
  Routes,
  // useNavigate,
  // useParams,
  // useLocation,
} from "react-router-dom";
//@ts-ignore
// const ChildApp = React.lazy(() => import("subAppOne/Landing"));
// import FirstSubApp from 'subAppOne/Landing'
// import SecondSubApp from 'subAppTwo/Shell'
const SecondSubApp = React.lazy(() => import("subAppTwo/Shell"));
// const ChildAppContact= React.lazy(()=>import("subAppOne/Contact"))
// import {ChildApp} from 'subAppOne/MicroApp'
function App() {
  // const navigate = useNavigate();
  // const navigate = useNavigate();
  // const pathname = useLocation();
  // console.log(pathname, "pathnae");
  // console.log((useParams()),'paramssss');
  // useEffect(() => {
  //   // console.log(path);
  // }, [pathname]);
  // console.log(useLocation(),'location');
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // const onRouteChange = (path) => {
  //   console.log("route changed", path);
  //   // navigate(path);
  //   // console.log(pathname.pathname,'pathname');
  //   navigate(path);
  // };
  return (
    <BrowserRouter>
  
    <div style={{ height: "100vh", width: "100%" }}>
      <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ paddingRight: "10rem" }}>
            <Suspense fallback={<div>Loading....</div>}>
            <SecondSubApp />

            </Suspense>
          </div>
          }
        />
        {/* <Route
          path="/subapp/*"
          element={
            <Suspense
              fallback={
                <div style={{ color: "white" }}> Loading Sub App...</div>
              }
            >
              <FirstSubApp
                onRouteChange={onRouteChange}
                heading={"Props from PArent"}
              />
            </Suspense>
          }
        /> */}
        <Route
          path="/subapp-2"
          element={
            // <Suspense
            //   fallback={
            //     <div style={{ color: "white" }}> Loading Sub App...</div>
            //   }
            // >
            <div style={{ paddingRight: "10rem" }}>
              <Suspense fallback={<div>Loading....</div>}>
              <SecondSubApp />

              </Suspense>
            </div>
            // onRouteChange={onRouteChange}
            // heading={"Props from PArent"}
            // </Suspense>
          }
        />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
