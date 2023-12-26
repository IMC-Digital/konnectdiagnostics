import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const GoogleMapInput = () => {
  const [address, setAddress] = useState('');

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      // Handle the latitude and longitude as needed
      console.log('Address:', selectedAddress);
      console.log('Latitude:', latLng.lat);
      console.log('Longitude:', latLng.lng);

      setAddress(selectedAddress);
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };

  return (
    <Form.Group controlId="googleMapInput">
      <Form.Label>Location</Form.Label>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Form.Control
              {...getInputProps({
                placeholder: 'Enter your location',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      style,
                    })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Form.Group>
  );
};

export default GoogleMapInput;
