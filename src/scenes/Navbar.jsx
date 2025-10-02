import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuIcon from "../assets/menu-icon.svg";
import closeMenuIcon from "../assets/close-icon.svg";
const Link = ({ page, selectedPage, setSelectedPage, isMobile }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-highlights"
          : isMobile
          ? "text-background"
          : ""
      } hover:text-highlights transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-background";
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold text-white">HE</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-openSans text-sm font-semibold ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-primary p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu" src={menuIcon} className="w-6 h-6" />
          </button>
        )}

        {/* MOBILE NAV */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-primary w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeMenuIcon} />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl ">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMobile={true}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMobile={true}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMobile={true}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMobile={true}
              />
              <Link
                page="Contact"
                isMobile={true}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
