function Home() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Hospital Service Comparison</h1>

      <input
        type='text'
        placeholder='Search MRI, Xray, Blood Test...'
        style={{padding: '10px', width: '300px'}}
      />

      <div style={{marginTop: '20px'}}>
        <h2>Nearby Hospitals</h2>

        <div style={{
          border: '1px solid gray',
          padding: '15px',
          marginTop: '10px'
        }}>
          <h3>City Care Hospital</h3>
          <p>MRI Price: ₹2500</p>
          <p>Rating: ⭐ 4.5</p>
          <p>Distance: 2 KM</p>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
