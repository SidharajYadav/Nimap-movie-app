// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // const Navbar = () => {
// // //   return (
// // //     <nav>
// // //       <h1>Movie App</h1>
// // //       <ul>
// // //         <li>
// // //           <Link to="/">Home</Link>
// // //         </li>
// // //         <li>
// // //           <Link to="/top-rated">Top Rated</Link>
// // //         </li>
// // //         <li>
// // //           <Link to="/upcoming">Upcoming Movies</Link>
// // //         </li>
// // //       </ul>
// // //       <input type="text" placeholder="Search movies..." />
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // // components/Navbar.js
// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-gray-800 text-white p-4">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <Link to="/" className="text-xl font-bold">
// //           MovieApp
// //         </Link>
// //         <div className="space-x-4">
// //           <Link to="/" className="hover:text-gray-400">Home</Link>
// //           <Link to="/top-rated" className="hover:text-gray-400">Top Rated</Link>
// //           <Link to="/upcoming" className="hover:text-gray-400">Upcoming</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">MovieDB</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Search Movie"
//             className="px-4 py-2 rounded-l-lg"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
//             Search
//           </button>
//         </div>
//         <ul className="flex space-x-6 text-white">
//           <li>
//             <Link to="/">Popular</Link>
//           </li>
//           <li>
//             <Link to="/top-rated">Top Rated</Link>
//           </li>
//           <li>
//             <Link to="/upcoming">Upcoming</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <nav className={`bg-gray-800 p-4 ${darkMode ? "dark" : ""}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-xl font-bold">MovieDb</h1>
//         <div className="flex space-x-4">
//           <Link to="/" className="text-gray-300 hover:text-white">
//             Popular
//           </Link>
//           <Link to="/top-rated" className="text-gray-300 hover:text-white">
//             Top Rated
//           </Link>
//           <Link to="/upcoming" className="text-gray-300 hover:text-white">
//             Upcoming
//           </Link>
//         </div>
//         <div className="flex space-x-2">
//           <input
//             type="text"
//             placeholder="Movie Name"
//             className="p-2 rounded-md"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             Search
//           </button>
//         </div>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="ml-4 bg-gray-700 text-white p-2 rounded-md"
//         >
//           Toggle Dark Mode
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {

//   return (
//     <nav className={`bg-white border-gray-200 dark:bg-gray-900`}>
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//         {/* Left Side: Logo and Website Name */}
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           {/* <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Logo"
//           /> */}
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-64">
//             MovieDb
//           </span>
//         </a>

//         {/* Right Side: Navigation Links and Search Box */}

//             <Link
//               to="/"
//               className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ml-64"
//             >
//               Popular
//             </Link>
//             <Link
//               to="/top-rated"
//               className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               Top Rated
//             </Link>
//             <Link
//               to="/upcoming"
//               className="text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               Upcoming
//             </Link>

//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                 Search
//               </button>

//           </div>

//           {/* Search Box and Button */}

//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState('/');

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img src="https://your-logo.png" alt="Logo" class="h-8" />
          <h1 class="text-white text-xl font-bold">MovieDb</h1>
        </div>
        <div class="flex space-x-4">
          <a href="/" class="text-gray-300 hover:text-white">
            Popular
          </a>
          <a href="/top-rated" class="text-gray-300 hover:text-white">
            Top Rated
          </a>
          <a href="/upcoming" class="text-gray-300 hover:text-white">
            Upcoming
          </a>
        </div>
        <div class="flex space-x-2">
          <input type="text" class="p-2 rounded-md" placeholder="Movie Name" />
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>
        <button class="ml-4 bg-gray-700 text-white p-2 rounded-md">
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
