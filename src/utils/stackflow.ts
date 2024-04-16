import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import UnivActivity from "@/pages/signup/_components/UnivActivity";
import PhoneActivity from "@/pages/signup/_components/PhoneActivity";
import NameActivity from "@/pages/signup/_components/NameActivity";
import MainActivity from "@/pages/signup/_components/MainActivity";
import MailAuthActivity from "@/pages/signup/_components/MailAuthActivity";
import MailActivity from "@/pages/signup/_components/MailActivity";
import LoginActivity from "@/pages/signup/_components/LoginActivity";
import ChooseActivity from "@/pages/signup/_components/ChooseActivity";

import "@stackflow/plugin-basic-ui/index.css";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MainActivity,
    LoginActivity,
    ChooseActivity,
    NameActivity,
    PhoneActivity,
    UnivActivity,
    MailActivity,
    MailAuthActivity,
  },
  initialActivity: () => "ChooseActivity",
});
