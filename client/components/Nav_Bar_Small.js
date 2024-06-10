import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";

//  class Nav_Bar_Small extends React.Component {
//     render() {
//         const [hover, setHover] = useState(false);
//         return (
//             <div>
//             <ul>
//                 <li>
//                     <a href='/games-home' role="button" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>Games</a>
//                     <ul>
//                         <li className={hover ? "show" : "hide"}>
//                             <a href='games-home/char-a-pillar'>Char-A-Pillar</a>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//         )
//     }
// }

// const Nav_Bar_Small = () => {
//     const [hover, setHover] = useState(false);
//     return (
//         <div>
//         <ul>
//             <li>
//                 <a href='/games-home' role="button" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>Games</a>
//                 <ul>
//                     <li className={hover ? "show" : "hide"}>
//                         <a href='games-home/char-a-pillar'>Char-A-Pillar</a>
//                     </li>
//                 </ul>
//             </li>
//         </ul>
//     </div>
//     )
// }

const Nav_Bar_Small = () => {
    const [dropdown, setDropdown] = useState(false);
    const [hover, setHover] = useState(false);
    return (
        <div>
        <ul className="nav-list" onPointerLeave={() => setDropdown((prev) => prev=false)}>
            <li>
                <img src="assets/nav/nav_asset.png" className="nav-btn-small" onClick={() => setDropdown((prev) => !prev)} />
                    <ul className="dropdown">
                        <li className={dropdown ? "show" : "hide"}>
                            <a href='/'><img src="assets/nav/home_btn.jpg" className="nav-text"/></a>
                        </li>
                        <li className={dropdown ? "show" : "hide"}>
                            <a href='/generator-home' className="nav-text"><img src="assets/nav/generate_btn.jpg" className="nav-text"/></a>
                        </li>
                        <li className={dropdown ? "show" : "hide"}>
                            <a href='/form-home' className="nav-text"><img src="assets/nav/contribute_btn.jpg" className="nav-text"/></a>
                        </li>
                        <li className={dropdown ? "show" : "hide"}>
                            <a href='/games-home' className="nav-text"><img src="assets/nav/games_btn.jpg" className="nav-text"/></a>
                        </li>
                    </ul>
            </li>
        </ul>
    </div>
    )
}

// const Nav_Bar_Small = () => {
//     const [dropdown, setDropdown] = useState(false);
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <a href='/games-home' role="button" onClick={() => setDropdown((prev) => !prev)}>Games</a>
//                     <ul>
//                         <li className={dropdown ? "show" : "hide"}>
//                             <a href='games-home/char-a-pillar'>Char-A-Pillar</a>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     )
// }

export default Nav_Bar_Small;