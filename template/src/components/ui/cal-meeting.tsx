"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { USER_NAMES } from "@/app/constants/data";
import { SiGooglemeet } from "react-icons/si";

export default function Meeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("init", { origin: "https://cal.com" }); // Required for popup
      cal("ui", {
        theme: "auto",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          body: {
            background: "transparent",
          },
          branding: {
            brandColor: "#000000",
          },
        },
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={`${USER_NAMES.calUsername}/30min`}
      data-cal-config='{"layout":"month_view"}'
      className="btn w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
    >
      <SiGooglemeet className="w-4 h-4" />
      Schedule a Meeting
    </button>
  );
}
