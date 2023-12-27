import React, { useEffect, useRef } from 'react';

function MapAutocomplete() {
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-0z_j_6g9TWRllUuXEwPuABU6NMRQFRY&libraries=places`;
    script.async = true;
    script.defer = true; // Add defer attribute
    document.body.appendChild(script);

    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      });

      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

      const marker = new window.google.maps.Marker({
        map,
        draggable: true,
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          map.setCenter(place.geometry.location);
          marker.setPosition(place.geometry.location);
        }
      });

      marker.addListener('dragend', () => {
        const position = marker.getPosition();
        console.log('Marker Position:', position.toJSON());
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="map-autocomplete">
      <div className="pac-card" id="pac-card">
        <div id="autocomplete-container">
          <input
            type="text"
            placeholder="Select location"
            className="form-control pac-target-input"
            id="input_autoc"
            ref={inputRef}
          />
        </div>
      </div>
      <div id="mapEle" style={{ height: '400px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgb(229, 227, 223)',
          }}
          ref={mapRef}
        ></div>
      </div>
    </div>
  );
}

export default MapAutocomplete;
