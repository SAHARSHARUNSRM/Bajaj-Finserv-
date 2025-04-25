import React from "react";

const FilterPanel = ({
  consultationType,
  setConsultationType,
  specialties,
  setSpecialties,
  sortOption,
  setSortOption,
}) => {
  const handleConsultationTypeChange = (e) => {
    setConsultationType(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSpecialties((prev) => [...prev, value]);
    } else {
      setSpecialties((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      {/* Consultation Type */}
      <div>
        <h3>Consultation Mode</h3>
        <label>
          <input
            type="radio"
            value="Video Consult"
            checked={consultationType === "Video Consult"}
            onChange={handleConsultationTypeChange}
          />
          Video Consult
        </label>
        <label>
          <input
            type="radio"
            value="In Clinic"
            checked={consultationType === "In Clinic"}
            onChange={handleConsultationTypeChange}
          />
          In Clinic
        </label>
      </div>

      {/* Specialties */}
      <div>
        <h3>Specialties</h3>
        {["General Physician", "Dentist", "Dermatologist", "Paediatrician", "Gynaecologist"].map((specialty) => (
          <label key={specialty}>
            <input
              type="checkbox"
              value={specialty}
              checked={specialties.includes(specialty)}
              onChange={handleSpecialtyChange}
            />
            {specialty}
          </label>
        ))}
      </div>

      {/* Sort Options */}
      <div>
        <h3>Sort By</h3>
        <label>
          <input
            type="radio"
            value="fees"
            checked={sortOption === "fees"}
            onChange={handleSortChange}
          />
          Fees
        </label>
        <label>
          <input
            type="radio"
            value="experience"
            checked={sortOption === "experience"}
            onChange={handleSortChange}
          />
          Experience
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
