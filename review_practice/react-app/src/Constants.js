const MOBILE_WIDTH = 800;

export const isMobile = () => window.matchMedia(`screen and (max-width: ${MOBILE_WIDTH}px)`).matches;
