import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const MOBILE_DEVICE_MAX_WIDTH = 1024;
const MOBILE_DEVICE_REGEX =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

interface DeviceState {
  width: number;
  isMobileDevice: boolean;
}

function detectMobileDevice() {
  if (typeof navigator === "undefined") return false;

  const uaData = navigator as Navigator & { userAgentData?: { mobile?: boolean } };
  if (typeof uaData.userAgentData?.mobile === "boolean") {
    return uaData.userAgentData.mobile;
  }

  if (MOBILE_DEVICE_REGEX.test(navigator.userAgent)) {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  return false;
}

function getDeviceState(): DeviceState {
  if (typeof window === "undefined") {
    return { width: 1280, isMobileDevice: false };
  }

  return {
    width: window.innerWidth,
    isMobileDevice: detectMobileDevice(),
  };
}

export default function useDeviceProfile() {
  const [state, setState] = useState<DeviceState>(getDeviceState);

  useEffect(() => {
    const sync = () => setState(getDeviceState());

    sync();
    window.addEventListener("resize", sync);
    window.addEventListener("orientationchange", sync);

    return () => {
      window.removeEventListener("resize", sync);
      window.removeEventListener("orientationchange", sync);
    };
  }, []);

  const isMobileViewport = state.width <= MOBILE_BREAKPOINT;
  const preferMobileUI =
    isMobileViewport || (state.isMobileDevice && state.width <= MOBILE_DEVICE_MAX_WIDTH);

  return {
    width: state.width,
    isMobileViewport,
    isMobileDevice: state.isMobileDevice,
    preferMobileUI,
  };
}
