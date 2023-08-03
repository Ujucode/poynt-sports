import { useState } from "react";
import { CalendarToday, AccessTime } from "@mui/icons-material";

const upcomingAppointments = [
  {
    id: 1,
    calendar: "Palash",
    booking: "Tuesday, August 8, 2023 from 8:00 am – 10:00 am",
    status: "Pending",
  },
  {
    id: 2,
    calendar: "Palash",
    booking: "Thursday, August 10, 2023 from 9:00 am – 11:00 am",
    status: "Accepted",
  },
  // Add more upcoming appointments as needed
];

const pastAppointments = [
  {
    id: 1,
    calendar: "Marshall",
    booking: "Tuesday, August 8, 2023 from 8:00 am – 10:00 am",
    status: "Accepted",
  },
  {
    id: 2,
    calendar: "John",
    booking: "Wednesday, August 9, 2023 from 9:00 am – 11:00 am",
    status: "Accepted",
  },
  // Add more past appointments as needed
];

const CalendarTab = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="border border-gray-300 rounded p-4 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Booking Calendar</h1>
        <div className="flex">
          <button
            className={`px-4 py-2 mr-4 rounded-t-lg ${
              activeTab === "upcoming" ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("upcoming")}
          >
            Upcoming Appointments
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "history" ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("history")}
          >
            Appointments History
          </button>
        </div>
        {activeTab === "upcoming" ? (
          <div>
            <h2 className="text-2xl font-bold mt-8">{upcomingAppointments.length} Upcoming Appointments</h2>
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id}>
                <hr className="my-4 border-t border-gray-300" />
                <div className="flex items-center mt-4">
                  <CalendarToday />
                  <span className="ml-2">Calendar: {appointment.calendar}</span>
                </div>
                <div className="flex items-center mt-2">
                  <AccessTime />
                  <span className="ml-2">Booking: {appointment.booking}</span>
                </div>
                <button className={`px-4 py-2 rounded mt-4 ${appointment.status === "Accepted" ? "bg-green-500" : "bg-gray-300"}`}>
                  {appointment.status}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mt-8">Appointments History</h2>
            {pastAppointments.length === 0 ? (
              <p className="text-gray-500 mt-4">No Past Appointments</p>
            ) : (
              <div>
                {pastAppointments.map((appointment) => (
                  <div key={appointment.id}>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className="flex items-center mt-4">
                      <CalendarToday />
                      <span className="ml-2">Calendar: {appointment.calendar}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <AccessTime />
                      <span className="ml-2">Booking: {appointment.booking}</span>
                    </div>
                    <button
                      className={`px-4 py-2 rounded mt-4 ${
                        appointment.status === "Accepted" ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      {appointment.status}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarTab;
