import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Paste your Firebase web app config here (Project settings > Your apps).
export const firebaseConfig = {
  apiKey: "AIzaSyCtQkLuRiqExENmZnngF0Z7RMV475yXMo8",
  authDomain: "bts-webapp-daca7.firebaseapp.com",
  projectId: "bts-webapp-daca7",
  appId: "1:693119899862:web:0b0a8fe22829e912f65177"
};
export const configured = !firebaseConfig.apiKey.startsWith("YOUR_");
const app = configured ? initializeApp(firebaseConfig) : null;
export const auth = app && getAuth(app);
export const db = app && getFirestore(app);
export const STATUSES = ["Pending", "Booked", "Shooting", "Editing", "Delivered"];
export const $ = id => document.getElementById(id);
export function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
