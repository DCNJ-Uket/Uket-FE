import { AxiosError } from "axios";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { toast } from "@ui/components/ui/use-toast";

import { defineError } from "@/utils/handleError";

import { scanQrCode } from "@/api/ticket";

export const useScan = () => {
  const handleQRScan = async (detectedCodes: IDetectedBarcode[]) => {
    const { rawValue: qrcodeToken } = detectedCodes[0];

    try {
      const { userName, msg } = await scanQrCode(qrcodeToken);
      toast({
        title: `예매자: ${userName}`,
        description: msg,
      });
    } catch (err) {
      const { errorMessage } = defineError(err as AxiosError);

      toast({
        title: errorMessage,
        variant: "destructive",
      });
    }
  };

  return { handleQRScan };
};
