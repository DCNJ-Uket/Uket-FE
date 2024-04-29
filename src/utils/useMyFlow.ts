// 노출된 액티비티 타입만 가져와서 사용해요.
import type { TypeActivities } from "./stackflow";

import { useActions } from "@stackflow/react";

export const useMyFlow = () => {
  return useActions<TypeActivities>();
};
