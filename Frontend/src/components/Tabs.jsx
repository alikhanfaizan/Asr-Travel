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
    <div className="p-4 bg-gray-100 rounded-lg overflow-hidden mb-8">
      <div className="grid grid-cols-4 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 py-5 text-md font-semibold transition-all 
              ${
                activeTab === tab.id
                  ? " text-orange-600"
                  : "text-gray-600 hover:text-black"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
