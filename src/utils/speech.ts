export function speakText(text: string) {
  if (typeof window === 'undefined') return;
  if (!window.speechSynthesis) {
    alert('Trình duyệt của bạn không hỗ trợ phát âm.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}
