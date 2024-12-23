export const handleCopyClipBoard = async (
  text: string,
  toast: (message: { title: string }) => void,
) => {
  try {
    await navigator.clipboard.writeText(text);
    toast({
      title: "클립보드에 복사되었습니다!",
    });
  } catch (e) {
    toast({
      title: "클립보드에 복사에 실패했습니다!",
    });
  }
};
