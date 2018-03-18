import axios from "axios";

export default {
  // Gets all chores
  getChores: function() {
    return axios.get("/api/chores");
  },
  // Gets the chore with the given id
  getChore: function(id) {
    return axios.get("/api/chores/" + id);
  },
  // Deletes the chore with the given id
  deleteChore: function(id) {
    return axios.delete("/api/chores/" + id);
  },
  // Saves a chore to the database
  saveChore: function(choreData) {
    return axios.post("/api/chores", choreData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // gets a specific user with given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  //deletes a user with a given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
