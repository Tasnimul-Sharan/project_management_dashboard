"use client";
import MainDashboard from "@/components/Dashboard/MainDashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import useRedirectHelper from "@/utils/authRedirectHelper";
import React, { useEffect } from "react";

const Dashboard = () => {
useRedirectHelper("/dashboard");
 
  return (
    <div>
      <DefaultLayout>
        <MainDashboard />
      </DefaultLayout>
    </div>
  );
};
export default Dashboard;
