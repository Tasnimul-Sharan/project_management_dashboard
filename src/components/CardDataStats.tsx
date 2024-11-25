import React, { ReactNode } from "react";

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;         
  value: string | number;
  subLabel?: string; 
}

export interface ProgressStepProps {
  title: string;         
  progress: number;      
  total: number;         
  color: string;     
}

export interface ActivityItemProps {
  title: string;         
  description: string;   
  time: string;          
  type: string;         
}



export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, subLabel }) => (
  <div className="bg-white p-6 rounded-lg flex justify-between items-center dark:border-strokedark dark:bg-boxdark">
    <div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-xl font-bold">{value}</p>
      {subLabel && <p className="text-gray-600">{subLabel}</p>}
    </div>

    <div className="text-green-500 text-2xl">{icon}</div>
  </div>
);


export const ProgressStep: React.FC<ProgressStepProps> = ({ title, progress, total, color }) => (
  <div className="mb-4 dark:border-strokedark dark:bg-boxdark">
    <h3 className="text-gray-800">{title}</h3>
    <div className="bg-gray-200 rounded-full h-2 mt-2">
      <div
        className={`bg-${color}-500 h-2 rounded-full`}
        style={{ width: `${(progress / total) * 100}%` }}
      ></div>
    </div>
    <p className="text-sm text-gray-600 mt-1">
      {progress}/{total} completed
    </p>
  </div>
);

export const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time, type }) => (
  <div className="flex items-center justify-between mb-4 dark:border-strokedark dark:bg-boxdark">
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm text-gray-400">{time}</p>
    </div>
    <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">
      {type}
    </span>
  </div>
);
