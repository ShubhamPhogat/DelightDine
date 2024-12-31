import React from "react";
import DbLeftSection from "../components/DbLeftSection";
import DbRightSection from "../components/DbRightSection";
// import DbHeader from "../components/DbHeader";

const Dashboard = () => {
  return (
    <div className="flex  h-screen w-screen bg-primary">
      <DbLeftSection />
      {/* <DbHeader /> */}
      <DbRightSection />
    </div>
  );
};

export default Dashboard;
