"use client"

import React, { useEffect, useState } from "react";
import { FaCheck, FaLock, FaWallet, FaStar, FaPlus } from "react-icons/fa";
import { ActivityItem, ProgressStep, StatCard } from "../CardDataStats";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import Image from "next/image";

export default function MainDashboard() {
  const [properties, setProperties] = useState(() => {
    const storedProperties = getFromLocalStorage("properties");
    return storedProperties ? JSON.parse(storedProperties) : [];
  });

  const staticProperties = [
    { id: 1, name: "Sunny Apartment", type: "Apartment", status: "Available" },
    { id: 2, name: "Cozy House", type: "House", status: "Rented" },
    { id: 3, name: "Downtown Office", type: "Commercial", status: "Available" },
  ];


  const [filter, setFilter] = useState({ type: "All", status: "All" });
  const [newProperty, setNewProperty] = useState({ name: "", type: "Apartment", status: "Available" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setToLocalStorage("properties", JSON.stringify(properties));
  }, [properties]);

  const handleAddProperty = () => {
    if (!newProperty.name.trim()) {
      setError("Property name is required.");
      return;
    }

    setProperties([...properties, { ...newProperty, id: properties.length + 1 }]);
    setNewProperty({ name: "", type: "Apartment", status: "Available" });
    setIsModalOpen(false);
    setError("");
  };

  const filteredProperties = properties.filter((property : any) => {
    const matchesType = filter.type === "All" || property.type === filter.type;
    const matchesStatus = filter.status === "All" || property.status === filter.status;
    return matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 p-6 bg-gray-100 rounded-lg">

           <Image
             width={63}
             height={63}
             src={"/images/user/user-01.png"}
             style={{
               width: "auto",
               height: "auto",
             }}
             alt="User"
           />

<div>
 <h1 className="text-2xl font-bold text-black dark:text-white">GOOD MORNING!</h1>
 <p className="text-gray-600">Here is an overview of your property</p>
</div>
</div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 gap-2"
          >
            <FaPlus />
            Add Property
          </button>
        </div>
      </header>

      <section className="grid grid-cols-4 gap-4 mb-8">
        <StatCard icon={<FaCheck />} label="Checkins" value="12" />
        <StatCard icon={<FaLock />} label="Checkouts" value="32" />
        <StatCard icon={<FaWallet />} label="Earnings" value="$4,923.68" />
        <StatCard icon={<FaStar />} label="Reviews" value="4.5" subLabel="(1400)" />
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Some Properties</h2>
        <div className="bg-white p-4 rounded-lg shadow-default dark:border-strokedark dark:bg-boxdark">
          <ul>
            {staticProperties.map((property) => (
              <li key={property.id} className="border-b py-2">
                <p className="font-semibold">{property.name}</p>
                <p className="text-sm text-gray-600">{property.type} - {property.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Properties</h2>
          <div className="flex gap-4">
            <select
              className="border border-gray-300 rounded-lg p-2 bg-white dark:border-strokedark dark:bg-boxdark"
              value={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.target.value })}
            >
              <option value="All">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg p-2 bg-white dark:border-strokedark dark:bg-boxdark"
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-default dark:border-strokedark dark:bg-boxdark">
          {filteredProperties.length > 0 ? (
            <ul>
              {filteredProperties.map((property: any) => (
                <li key={property.id} className="border-b py-2 ">
                  <p className="font-semibold">{property.name}</p>
                  <p className="text-sm text-gray-600">{property.type} - <span
                className={
                  property.status === "Available"
                    ? "text-green-600 font-medium"
                    : "text-red font-medium"
                }
              >
                {property.status}
              </span></p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No properties match the selected filters.</p>
          )}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 dark:border-strokedark dark:bg-boxdark">
          <h2 className="text-lg font-semibold mb-4">Your next steps</h2>
          <ProgressStep
            title="Set up your calendar"
            progress={4}
            total={6}
            color="red"
          />
          <ProgressStep
            title="Increase your bookings"
            progress={2}
            total={6}
            color="green"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md dark:border-strokedark dark:bg-boxdark">
          <h2 className="text-lg font-semibold mb-4">New activity</h2>
          <ActivityItem
            title="Pet Friendliness"
            description="196 Kansas Avenue, Block A, 7th Floor, Number 14"
            time="3h ago"
            type="Question"
          />
          <ActivityItem
            title="Water Issue"
            description="917 Garden Street, Santa Monica, CA"
            time="10h ago"
            type="Damage Report"
          />
          <ActivityItem
            title="Invoice Inquiry"
            description="568 Gotham Center, Santa Monica, CA"
            time="2 days ago"
            type="Request"
          />
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Add New Property</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block mb-1">Property Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={newProperty.name}
                onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Property Type</label>
              <select
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={newProperty.type}
                onChange={(e) => setNewProperty({ ...newProperty, type: e.target.value })}
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Rental Status</label>
              <select
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={newProperty.status}
                onChange={(e) => setNewProperty({ ...newProperty, status: e.target.value })}
              >
                <option value="Available">Available</option>
                <option value="Rented">Rented</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProperty}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
