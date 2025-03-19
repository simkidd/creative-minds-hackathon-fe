import { DownloadIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Import } from "iconsax-react";

// Define the BeforeInstallPromptEvent type
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false); // Track closing animation

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  const handleCloseClick = () => {
    setIsClosing(true); // Start closing animation
    setTimeout(() => {
      setIsVisible(false); // Hide the prompt after animation
      setIsClosing(false); // Reset animation state
    }, 300); // Match the duration of the CSS transition
  };

  if (!deferredPrompt || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Desktop Install Prompt */}
      <div
        className={`hidden md:block fixed bottom-4 right-4 w-[380px] z-50 transition-transform duration-300 ease-in-out ${
          isClosing ? "translate-x-[120%]" : "translate-x-0"
        }`}
      >
        <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-primary/40 via-primary/40 to-primary/40">
          <div className="bg-[rgba(255,255,255,0.92)] rounded-xl p-3">
            {/* Close Button */}
            <button
              onClick={handleCloseClick}
              className="absolute -top-2 -left-2 p-1 text-white hover:text-gray-200 focus:outline-none rounded-full bg-gradient-to-r from-primary/40 via-primary/40 to-primary/40 bg-[#969696] cursor-pointer"
            >
              <XIcon size={16} />
            </button>

            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 p-2 bg-primary/20 rounded-lg text-primary">
                <Import />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-black text-sm">
                  Install edufree4all
                </h4>
                <p className="text-xs text-gray-600">
                  Quick access to resources
                </p>
              </div>

              {/* Install Button */}
              <button
                onClick={handleInstallClick}
                className="flex-shrink-0 bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium transform transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              >
                Install
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Install Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleInstallClick}
            className="md:hidden fixed right-4 bottom-[calc(1rem+64px)] z-50 cursor-pointer"
          >
            <div className="bg-primary text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
              <DownloadIcon />
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">Install edufree4all</TooltipContent>
      </Tooltip>

      {/* Close Button for Mobile */}
      <button
        onClick={handleCloseClick}
        className="md:hidden fixed right-0 bottom-[calc(1rem+100px)] z-50 p-2 text-gray-600 hover:text-gray-200 focus:outline-none cursor-pointer"
      >
        <XIcon />
      </button>
    </>
  );
}
