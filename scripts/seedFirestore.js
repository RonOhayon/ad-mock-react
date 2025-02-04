/*
  1. npm install firebase-admin
  2. node seedFirestore.js
*/

const admin = require("firebase-admin");
const path = require("path");

// 1) Initialize Firebase Admin with your service account key
const serviceAccount = require(path.join(__dirname, "service-account.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://<YOUR-PROJECT-ID>.firebaseio.com" // optional if needed
});

const db = admin.firestore();

(async function seedFirestore() {
  try {
    // 2) Define your date range. Example: full year of 2024.
    const startDate = new Date("2024-01-01T00:00:00Z");
    const endDate = new Date("2025-01-01T00:00:00Z"); // not inclusive

    let currentDate = new Date(startDate);

    // We'll pick a "packageId" and "adId" for demonstration
    const PACKAGE_ID = "com.example.app_test_ad";
    const AD_ID = "test_ad_1";

    // 3) Loop over each day
    while (currentDate < endDate) {
      // For demonstration, let's do a random # of views (5-10) and clicks (1-3)
      const dailyViews = getRandomInt(5, 10);
      const dailyClicks = getRandomInt(1, 3);

      // We want a ratio with more views than clicks, so dailyViews >= dailyClicks is typical.

      // 4) For each "view," create a Firestore document
      for (let i = 0; i < dailyViews; i++) {
        await db.collection("events").add({
          packageId: PACKAGE_ID,
          adId: AD_ID,
          deviceId: makeRandomDeviceId(),
          type: "view",
          // Firestore timestamp -> just store as JS Date (Firestore will store it properly)
          timestamp: randomTimeInDay(currentDate),
        });
      }

      // Then create the "click" documents
      for (let i = 0; i < dailyClicks; i++) {
        await db.collection("events").add({
          packageId: PACKAGE_ID,
          adId: AD_ID,
          deviceId: makeRandomDeviceId(),
          type: "click",
          timestamp: randomTimeInDay(currentDate),
        });
      }

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
})();

/**
 * Returns a random integer between min and max inclusive.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates a random "deviceId"-like string.
 */
function makeRandomDeviceId() {
  return Math.random().toString(36).substring(2, 10); // e.g. 'f4a1e4b4'
}

/**
 * Generates a new Date within the given `day` at a random hour/minute/second.
 */
function randomTimeInDay(day) {
  // Copy the day (at midnight) so we don't mutate the original date's object.
  const d = new Date(day);
  // Set random hours/min/sec
  d.setHours(getRandomInt(0, 23));
  d.setMinutes(getRandomInt(0, 59));
  d.setSeconds(getRandomInt(0, 59));
  return d;
}
