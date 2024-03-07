// utility.js

const utility = {
    // Function to get the current date in a specified format
    getCurrentDate: (format = 'YYYY-MM-DD') => {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month;
      let day = date.getDate();
      day = day < 10 ? '0' + day : day;
      return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
    },
  
    // Function to generate a random integer within a specified range
    getRandomInt: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
    // Function to generate a random string of specified length
    getRandomString: (length = 10) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },
  
    // Function to capitalize the first letter of a string
    capitalize: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    // Function to trim whitespace from both ends of a string
    trim: (str) => {
      return str.trim();
    },
  
    // Function to check if a string contains a substring
    contains: (str, substring) => {
      return str.includes(substring);
    }
  };
  
  module.exports = utility;
  