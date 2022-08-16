import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchApiCatelogy } from "../../app/apiCatelogySlice";
import AboutDesktop from "./components/AboutDesktop";
import FormSearch from "./components/Form/FormSearch";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import LogoHeader from "./components/Logo";
import LogoutHeader from "./components/LogoutHeader/LogoutHeader";
import SideBar from "./components/SideBar";
import style from "./header.module.scss";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiCatelogy());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const categoryList = useSelector(
    (state) => state.apiCatelogy.categoryList.data
  );
  const handleClickMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      {isMenu ? (
        <div
          className={clsx(style.model)}
          style={{ left: isMenu ? 0 : "-100%" }}
          onClick={handleClickMenu}
        ></div>
      ) : null}

      <header>
        <div className={clsx(style.fTop)}>
          <LogoHeader handleClickMenu={handleClickMenu} />
          <FormSearch />
          <AboutDesktop />
        </div>

        <ul
          className={clsx(style.fBottom)}
          style={{ left: isMenu ? 0 : "-100%" }}
        >
          <div className={clsx(style.fMenuBar)}>
            <Link to="/" className={clsx(style.fLogoMenu)}>
              <i></i>
            </Link>
            <div onClick={() => setIsMenu(!isMenu)}>X</div>
          </div>
          <LoginHeader className={clsx(style.fOpenLogin)} />
          <LogoutHeader className={clsx(style.fOpenLogout)} />
          {categoryList?.map((item, index) => (
            <SideBar item={item} key={item.id} />
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
