import HttpResquest from "~/utils/HttpResquest";

// const baseURL = "https://localhost:8080/api/Greetings";
const baseURL = `${process.env.REACT_APP_API_URL}/Greetings`;



const greetingAPI = HttpResquest(baseURL);

export const getGreetings = greetingAPI.getAll;
export const getGreetingById = greetingAPI.getById;
export const createGreeting = greetingAPI.create;
export const updateGreeting = greetingAPI.update;
export const deleteGreeting = greetingAPI.delete;
