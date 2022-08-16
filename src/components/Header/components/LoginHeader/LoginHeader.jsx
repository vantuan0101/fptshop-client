import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";

const checkTypeUser = (user) => {
  if (!user) {
    return "/login";
  }
  return user.type_user === "admin" ? "/accounts/admin" : "/accounts/user";
};

const LoginHeader = ({ className }) => {
  const { user } = useSelector((state) => state.user);
  const path = checkTypeUser(user);
  return (
    <>
      {/* check user already has on redux , no ->  login */}
      <Link to={path} className={className}>
        <FcBusinessman />
        <span>
          {user?.phone
            ? `${user?.last_name} ${user?.first_name}`
            : "Tài khoản của tôi"}
        </span>
      </Link>
    </>
  );
};

export default LoginHeader;
