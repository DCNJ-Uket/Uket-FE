import { useLocation } from "react-router-dom";
import { useState } from "react";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken, setCookie } from "@/utils/handleCookie";

import { Path, useNavigate } from "@/router";

interface RedirectAndModalPath {
  path?: Path;
  onCustomClick?: () => void;
}

export const useControlRedirect = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const handleOpenModalOrRedirect = ({
    path,
    onCustomClick,
  }: RedirectAndModalPath) => {
    const isAuthenticated =
      !!getAccessToken() && !!getRefreshToken("refreshToken");
    if (!isAuthenticated) {
      setOpen(true);
    } else {
      setOpen(false);
      if (path) navigate({ pathname: path });
      if (onCustomClick) onCustomClick();
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleRedirectToLogin = () => {
    handleCloseModal();
    setCookie('login_redirect_url', pathname + search)
    navigate("/login");
  };

  return {
    isModalOpen: open,
    handleOpenModalOrRedirect,
    handleCloseModal,
    handleRedirectToLogin,
  };
};
