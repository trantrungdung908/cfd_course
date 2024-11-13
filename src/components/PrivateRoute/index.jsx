import { MODAL_TYPES } from "@/constants/general";
import PATHS from "@/constants/path";
import { useAuthContext } from "@/context/AuthContext";
import { tokenMethod } from "@/utils/tokenMethod";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { handleStatusModal } = useAuthContext();

  if (tokenMethod.get() === null) {
    handleStatusModal(MODAL_TYPES.login);
    return <Navigate to={PATHS.HOME} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
