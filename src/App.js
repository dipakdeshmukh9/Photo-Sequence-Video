import React, { useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);

  const handleSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length < 3 || files.length > 5) {
      alert("Please select 3 to 5 photos.");
      return;
    }
    setPhotos(files);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Photo Sequence Video</h1>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleSelect}
      />

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={URL.createObjectURL(photo)}
            alt={`Selected ${index}`}
            className="photo-frame"
            style={{ width: '150px', borderRadius: '8px' }}
          />
        ))}
      </div>

      <audio controls>
  <source src={`${process.env.PUBLIC_URL}/bg-music.mp3`} type="audio/mp3" />
  Your browser does not support the audio element.
</audio>
    </div>
  );
}

export default App;