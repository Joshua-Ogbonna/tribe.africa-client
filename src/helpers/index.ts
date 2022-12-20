import axios from "axios"

export const getGreeting = () => {
    let time = new Date();
    switch (time.getHours()) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        return "Morning 🌄";
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        return "Afternoon 🌞";
      default:
        return "Evening 🌉";
    }
  };

// Helper for post requests
export const post = (url: string, body: any) => {
  return axios.post(url, body)
}