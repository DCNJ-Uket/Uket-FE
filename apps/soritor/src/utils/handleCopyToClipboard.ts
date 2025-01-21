import { toast } from "@uket/ui/components/ui/sonner";

export const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("클립보드에 복사되었습니다.");
  } catch (e) {
    toast.error("클립보드에 복사에 실패했습니다.");
  }
};
