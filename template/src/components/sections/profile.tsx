"use client";

import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Image from "next/image";

import { ABOUT_ME } from "@/app/constants/data";

// =============================================
// CUSTOM HOOKS
// =============================================
const useISTTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

// =============================================
// MAIN COMPONENT
// =============================================
const Profile = () => {
  const currentTime = useISTTime();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <section className="px-4 py-2">
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          {/* <img
            src="/flag.svg"
            className="absolute -top-1 -left-2 w-8 h-8 z-10"
            aria-hidden="true"
          /> */}
          <div
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-border cursor-pointer duration-200"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isHovering ? (
              <Image
                src={ABOUT_ME.profileGif}
                alt="Profile GIF"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                unoptimized // Keep GIF animation
              />
            ) : (
              <Image
                src={ABOUT_ME.profileImage}
                alt={ABOUT_ME.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            )}
          </div>
        </div>

        {/* Name & Title */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{ABOUT_ME.name}</h1>
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <MdVerified className="w-5 h-5 cursor-pointer" />
              {showTooltip && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background text-foreground border border-border text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10 shadow-lg">
                  npm verified: human@latest
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
                </div>
              )}
            </div>
          </div>
          <p className="text-base text-muted-foreground font-medium">
            {ABOUT_ME.title}
          </p>
        </div>

        {/* Location & Time */}
        <div className="hidden md:block text-base text-muted-foreground space-y-1 text-right">
          <div className="flex items-center gap-2 justify-end">
            <FaLocationCrosshairs className="w-4 h-4" />
            <span className="font-mono">{ABOUT_ME.location}</span>
          </div>
          <div className="font-mono">{currentTime} IST</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
