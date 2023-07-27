"use client";

import { LoginUser } from "@/app/types";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Usermenu from "./Usermenu";

interface NavBarProp {
  currentUser?: LoginUser | null 
}

const Navbar = ({ currentUser }: NavBarProp) => {
  return (
    <header className="w-full fixed bg-white shadow-sm z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Searchbar />
            <Usermenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
