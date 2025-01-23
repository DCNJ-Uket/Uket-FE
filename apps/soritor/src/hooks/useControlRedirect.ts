import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@uket/util/token";

import { Path, useNavigate } from "@/router";

interface RedirectAndModalPath {
  path?: Path;
  onCustomClick?: () => void;
}

export const useControlRedirect = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpenModalOrRedirect = ({
    path,
    onCustomClick,
  }: RedirectAndModalPath) => {
    const isAuthenticated =
      !!ACCESS_TOKEN.get() && !!REFRESH_TOKEN.get("refreshToken");
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
    navigate("/login");
  };

  return {
    isModalOpen: open,
    handleOpenModalOrRedirect,
    handleCloseModal,
    handleRedirectToLogin,
  };
};
