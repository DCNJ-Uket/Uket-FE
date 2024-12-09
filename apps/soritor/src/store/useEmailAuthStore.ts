import { create } from "zustand";

import { EmailAuthResponse } from "@/types/emailType";

interface EmailAuthState {
  emailAuthInfo: Pick<EmailAuthResponse, "email" | "expiration"> | null;
}

interface EmailAuthAction {
  setEmailAuthInfo: (emailAuthInfo: EmailAuthState["emailAuthInfo"]) => void;
  getEmailAuthInfo: () => EmailAuthState["emailAuthInfo"];
}

export const useEmailAuthStore = create<EmailAuthState & EmailAuthAction>(
  (set, get) => ({
    emailAuthInfo: null,
    setEmailAuthInfo: emailAuthInfo => set({ emailAuthInfo }),
    getEmailAuthInfo: () => get().emailAuthInfo,
  }),
);
