"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { USER_NAMES } from "@/app/constants/data";

const Banner = () => {
  const { resolvedTheme } = useTheme();
  const colorScheme =
    resolvedTheme === "light" || resolvedTheme === "dark"
      ? resolvedTheme
      : "dark";

  const customTheme = {
    light: ["#fafafa", "#a0a0a0", "#666666", "#333333", "#000000"],
    dark: ["#1a1a1a", "#555555", "#999999", "#cccccc", "#ffffff"],
  };

  return (
    <section className="w-full p-2 sm:p-4 relative group flex justify-center">
      <div className="w-full [&_svg]:w-full! [&_svg]:h-auto!">
        <GitHubCalendar
          username={USER_NAMES.githubUsername}
          blockSize={10}
          blockMargin={4}
          colorScheme={colorScheme}
          theme={customTheme}
          fontSize={12}
          hideColorLegend
          hideMonthLabels={true}
          hideTotalCount={true}
        />
      </div>
    </section>
  );
};

export default Banner;
