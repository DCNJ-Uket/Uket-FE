import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import TimeActivity from "@/pages/buy-ticket/_components/TimeActivity";
import DateActivity from "@/pages/buy-ticket/_components/DateActivity";
import CompleteActivity from "@/pages/buy-ticket/_components/CompleteActivity";

import "@stackflow/plugin-basic-ui/index.css";

export const { Stack, activities } = stackflow({
  transitionDuration: 500,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    DateActivity,
    TimeActivity,
    CompleteActivity,
  },
  initialActivity: () => "DateActivity",
});

export type TypeActivities = typeof activities;
