const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success, error, options);

    function success(data) {
      resolve(data);
    }

    function error(error) {
      reject(error);
    }
  });
}
