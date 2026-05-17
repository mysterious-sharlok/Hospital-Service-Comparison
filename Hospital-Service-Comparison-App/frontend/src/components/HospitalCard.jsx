function HospitalCard({ hospital }) {
  return (
    <div>
      <h2>{hospital.name}</h2>
      <p>{hospital.distance}</p>
    </div>
  );
}

export default HospitalCard;
