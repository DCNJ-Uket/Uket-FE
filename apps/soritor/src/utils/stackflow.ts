import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import PhoneActivity from "@/pages/signup/_components/PhoneActivity";
import NameActivity from "@/pages/signup/_components/NameActivity";
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
    NameActivity,
    PhoneActivity,
    CompleteActivity,
  },
  initialActivity: () => "NameActivity",
});

export type TypeActivities = typeof activities;
