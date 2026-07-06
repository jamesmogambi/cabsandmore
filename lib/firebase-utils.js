// lib/firebase-utils.js
export const convertFirestoreData = (doc) => {
  const data = doc.data();
  const result = { id: doc.id };

  // Convert all fields
  for (const [key, value] of Object.entries(data)) {
    // Check if it's a Firestore Timestamp
    if (value && typeof value.toDate === "function") {
      result[key] = value.toDate().toISOString();
    }
    // Check if it's a Firestore GeoPoint
    else if (
      value &&
      typeof value.latitude === "number" &&
      typeof value.longitude === "number"
    ) {
      result[key] = {
        latitude: value.latitude,
        longitude: value.longitude,
      };
    }
    // Check if it's a Firestore DocumentReference
    else if (value && value.path) {
      result[key] = value.path;
    }
    // Handle arrays with timestamps
    else if (Array.isArray(value)) {
      result[key] = value.map((item) => {
        if (item && typeof item.toDate === "function") {
          return item.toDate().toISOString();
        }
        return item;
      });
    }
    // Handle nested objects with timestamps
    else if (value && typeof value === "object" && !Array.isArray(value)) {
      const nestedResult = {};
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        if (nestedValue && typeof nestedValue.toDate === "function") {
          nestedResult[nestedKey] = nestedValue.toDate().toISOString();
        } else {
          nestedResult[nestedKey] = nestedValue;
        }
      }
      result[key] = nestedResult;
    } else {
      result[key] = value;
    }
  }

  return result;
};

export const convertTimestamps = (data) => {
  const result = { ...data };

  // Convert createdAt if it exists
  if (result.createdAt && typeof result.createdAt.toDate === "function") {
    result.createdAt = result.createdAt.toDate().toISOString();
  }

  // Convert updatedAt if it exists
  if (result.updatedAt && typeof result.updatedAt.toDate === "function") {
    result.updatedAt = result.updatedAt.toDate().toISOString();
  }

  return result;
};
