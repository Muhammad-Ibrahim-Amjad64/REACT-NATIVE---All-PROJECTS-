// Import required modules
import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

// Define your API endpoint URL
const API_URL = 'https://yourserver.com/api';

// Define a function to upload an image to your server
const uploadImage = async (imageData) => {
  try {
    const response = await fetch(`${API_URL}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageData }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Define your component
// const ImageUploader = () => {
const Profile = () => {
  const [imageData, setImageData] = useState(null);

  // Define a function to handle the image upload
  const handleUpload = async () => {
    const data = await uploadImage(imageData);

    // Do something with the response data
  };

  // Define a function to handle the image selection
  const handleSelectImage = () => {
    // Use a library like React Native Image Picker to select an image
    // and convert it to base64 data
    // Then set the imageData state to the base64 data
  };

  return (
    <View>
      {imageData ? (
        <Image source={{ uri: `data:image/jpeg;base64,${imageData}` }} />
      ) : (
        <Text>No image selected</Text>
      )}

      <Button title="Select image" onPress={handleSelectImage} />
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
};

// export default ImageUploader;
export default Profile;
