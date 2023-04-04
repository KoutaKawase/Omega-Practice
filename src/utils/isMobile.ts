export function isMobile() {
  if (window.matchMedia('(max-device-width: 640px)').matches) {
    return true;
  }
  return false;
}
