import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import UserTypeActivity from "@/pages/signup/_components/UserTypeActivity";
import UnivActivity from "@/pages/signup/_components/UnivActivity";
import PhoneActivity from "@/pages/signup/_components/PhoneActivity";
import NameActivity from "@/pages/signup/_components/NameActivity";
import MailAuthActivity from "@/pages/signup/_components/MailAuthActivity";
import MailActivity from "@/pages/signup/_components/MailActivity";
import CompleteActivity from "@/pages/signup/_components/CompleteActivity";

import "@stackflow/plugin-basic-ui/index.css";

export const { Stack, useFlow, activities } = stackflow({
  transitionDuration: 500,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    UserTypeActivity,
    NameActivity,
    PhoneActivity,
    UnivActivity,
    MailActivity,
    MailAuthActivity,
    CompleteActivity,
  },
  initialActivity: () => "UserTypeActivity",
});

export type TypeActivities = typeof activities;
