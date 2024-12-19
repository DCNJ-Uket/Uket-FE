export const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 복사되었습니다!");
  } catch (e) {
    alert("복사에 실패했습니다.");
  }
};
