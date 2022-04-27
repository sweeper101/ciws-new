// import Link from "next/link";
// import Image from "next/image";
// import { useContext } from "react";
// import AuthContext from "../stores/authContext";

// export default function Navbar() {
//   const { user, login, logout, authReady } = useContext(AuthContext);
//   console.log(user);

//   return (
//     <div className="container">
//       <nav>
//         <img src="/rupee.png" width={50} height={48} />
//         <h1>Gaming Vibes</h1>
//         {authReady && (
//           <ul>
//             <li>
//               <Link href="/">
//                 <a>Home</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/guides">
//                 <a>Resources</a>
//               </Link>
//             </li>
//             {!user && (
//               <li onClick={login} className="btn">
//                 Login/Signup
//               </li>
//             )}
//             {user && (
//               <li onClick={logout} className="btn">
//                 Logout
//               </li>
//             )}
//           </ul>
//         )}
//       </nav>
//       <div className="banner">
//         <img src="/banner.png" width={966} height={276} />
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  //toggle set to false only visible when display properties are
  const { user, login, logout, authReady } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-links_container"></div>
      </div>
      {authReady && (
        <div className="navbar-sign">
          <Link href="/">
            <p>Resources</p>
          </Link>

          <ul>
            {!user && (
              <Link href="/">
                <button onClick={login} type="button">
                  login
                </button>
              </Link>
            )}
            {user && (
              <Link href="/">
                <button onClick={logout} type="button">
                  login
                </button>
              </Link>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
