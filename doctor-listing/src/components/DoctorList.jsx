const DoctorList = ({ doctors = [] }) => {
    return (
      <div>
        {doctors.length === 0 ? (
          <p>No doctors found</p>
        ) : (
          doctors.map((doctor) => (
            <div data-testid="doctor-card" key={doctor.name}>
              <h3 data-testid="doctor-name">{doctor.name || "Unknown Doctor"}</h3>
              <p data-testid="doctor-specialty">
                {doctor.specialties ? doctor.specialties.join(", ") : "No specialties"}
              </p>
              <p data-testid="doctor-experience">
                {doctor.experience ? `${doctor.experience} years` : "Experience data not available"}
              </p>
              <p data-testid="doctor-fee">
                {doctor.fee ? `$${doctor.fee}` : "Fee data not available"}
              </p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default DoctorList;
  