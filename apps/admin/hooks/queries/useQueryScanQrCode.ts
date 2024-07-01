import { useQuery } from "@tanstack/react-query";

import { scanQrCode } from "@/api/ticket";

export const useQueryScanQrCode = (token: string) => {
  const { data, error } = useQuery({
    queryKey: ["scan-qr-code", token],
    queryFn: () => scanQrCode(token),
  });

  if (error) {
    throw error;
  }

  return { data } ;
};
