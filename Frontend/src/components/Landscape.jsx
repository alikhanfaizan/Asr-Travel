import React, { useState } from "react";
import Information from "./Information";
import TourPlan from "./TourPlan";
import Location from "./Location";
import GalleryTab from "./Gallery";
import Tabs from "./Tabs";
import BookingForm from "./BookingForm";

export default function LandscapeLayout() {
  const [activeTab, setActiveTab] = useState("information");

  const renderContent = () => {
    switch (activeTab) {
      case "information":
        return <Information />;
      case "tour-plan":
        return <TourPlan />;
      case "location":
        return <Location />;
      case "gallery":
        return <GalleryTab />;
      default:
        return <Information />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fefefe] px-6 lg:px-40 py-10">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">{renderContent()}</div>
        <div className="lg:col-span-1">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
