import axios from "axios";

const api = axios.create({
  baseURL: "https://practice-next-250c4-default-rtdb.firebaseio.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export async function getAllEvents() {
  const res = await api.get("/events.json");

  const events = [];
  for (const key in res.data) {
    events.push({
      id: key,
      ...res.data[key]
    });
  }
  console.log(events);
  return events;
}
