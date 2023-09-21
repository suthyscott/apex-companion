import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-slate-600 text-white h-[10vh] flex justify-center items-center flex-col">
          <h1 className="text-2xl">

            Welcome to the Apex Companion
          </h1>
            <nav className="flex justify-evenly w-full">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/addTags">Add Your Own Legend Tags</NavLink>
            </nav>
        </div>
    )
}

export default Header
