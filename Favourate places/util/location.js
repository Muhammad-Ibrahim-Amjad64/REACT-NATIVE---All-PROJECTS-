 // Location picking step 10 integrating api

//  http://api.openstreetmap.org/


const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://www.openstreetmap.org/#map=13/24.9055/67.0353`;
//   const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
    console.log(imagePreviewUrl)
  return imagePreviewUrl;
}
