import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import DoctorList from "./components/DoctorList";

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [consultationType, setConsultationType] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true); // Ensure loading state is true until data is fetched
      try {
        const response = await axios.get(
          "https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json"
        );
        console.log("API response:", response); // Log the API response for debugging
  
        // Directly use response.data since it's an array
        if (response.data && Array.isArray(response.data)) {
          setDoctors(response.data);
          setFilteredDoctors(response.data);
        } else {
          console.error("Doctors data is unavailable.");
        }
      } catch (error) {
        console.error("Error fetching doctors", error);
      } finally {
        setLoading(false); // Set loading to false after fetching the data
      }
    };
  
    fetchDoctors();
  }, []);

  // Filter and sort the doctors based on applied filters
  useEffect(() => {
    let filtered = doctors;

    if (consultationType) {
      filtered = filtered.filter(
        (doctor) => doctor.consultation === consultationType
      );
    }

    if (specialties.length > 0) {
      filtered = filtered.filter((doctor) =>
        specialties.every((specialty) =>
          doctor.specialties.includes(specialty)
        )
      );
    }

    if (sortOption) {
      filtered = filtered.sort((a, b) => {
        if (sortOption === "fees") {
          return a.fee - b.fee;
        }
        if (sortOption === "experience") {
          return b.experience - a.experience;
        }
        return 0;
      });
    }

    setFilteredDoctors(filtered);
  }, [consultationType, specialties, sortOption, doctors]);

  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <p>Loading...</p> {/* You can replace this with a spinner */}
        </div>
      ) : (
        <>
          <SearchBar doctors={doctors} setFilteredDoctors={setFilteredDoctors} />
          <FilterPanel
            consultationType={consultationType}
            setConsultationType={setConsultationType}
            specialties={specialties}
            setSpecialties={setSpecialties}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <DoctorList doctors={filteredDoctors} />
        </>
      )}
    </div>
  );
};

export default App;
