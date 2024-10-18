// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from "react";import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import { Provider } from "react-redux";
// // import store from "./redux/store";
// // import Navbar from "./components/Navbar";
// // import HomePage from "./pages/HomePage";
// // import TopRatedPage from "./pages/TopRatedPage";
// // import UpcomingPage from "./pages/UpcomingPage";
// // import SingleMoviePage from "./pages/SingleMoviePage";

// // const App = () => {
// //   return (
// //     <Provider store={store}>
// //       <Router>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/top-rated" element={<TopRatedPage />} />
// //           <Route path="/upcoming" element={<UpcomingPage />} />
// //           <Route path="/movie/:id" element={<SingleMoviePage />} />
// //         </Routes>
// //       </Router>
// //     </Provider>
// //   );
// // };

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import TopRatedPage from "./pages/TopRatedPage";
// import UpcomingPage from "./pages/UpcomingPage";
// import SingleMoviePage from "./pages/SingleMoviePage";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="bg-gray-900 min-h-screen text-white">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/top-rated" element={<TopRatedPage />} />
//             <Route path="/upcoming" element={<UpcomingPage />} />
//             <Route path="/movie/:id" element={<SingleMoviePage />} />
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
       <div className="dark bg-black min-h-screen"> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />} />
        </Routes>
      </Router>
      </div>
    </Provider>
  );
};

export default App;
