import { db } from "./firebase.js";
import { collection, getDocs, query, limit } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Only the admin account is allowed to read all bookings (see firestore.rules),
// so a successful query means this user is the admin.
export async function home() {
  try {
    await getDocs(query(collection(db, "bookings"), limit(1)));
    return "admin.html";
  } catch (e) {
    return "portal.html";
  }
}
