import React from "react";
import { Info, Send, MapPin, Camera } from "lucide-react";

export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "information", label: "Information", icon: <Info size={18} /> },
    { id: "tour-plan", label: "Tour Plan", icon: <Send size={18} /> },
    { id: "location", label: "Location", icon: <MapPin size={18} /> },
    { id: "gallery", label: "Gallery", icon: <Camera size={18} /> },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-gray-100 rounded-lg overflow-hidden mb-6 sm:mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2 sm:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 md:py-5 
              text-sm sm:text-base md:text-lg font-medium sm:font-semibold transition-all rounded-md
              ${
                activeTab === tab.id
                  ? "text-orange-600 bg-orange-50 shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
          >
            {/* Adjust icon size dynamically */}
            <span className="flex items-center justify-center">
              {React.cloneElement(tab.icon, {
                size: 16, // base size
                className:
                  "sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] transition-all",
              })}
            </span>
            <span className="text-[12px] sm:text-[14px] md:text-[16px]">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
