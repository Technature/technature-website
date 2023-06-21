
export default function formatDate(dateString){

  if(!dateString) return "Dates are over estimated :D"
// Create a Date object from the input string
const dateObj = new Date(dateString);

// Define an array of month names
const monthNames = [
    "Ιανουαριου", "Φεβρουαριου", "Μαρτιου", "Απριλιου", "Μαιου", "Ιουνιου",
    "Ιουλιου", "Αυγούστου", "Σεπτεμβριου", "Οκτωβριου", "Νοεμβριου", "Δεκεμβριου"
  ];

// Extract the day, month, and year components from the Date object
const day = dateObj.getDate();
const month = monthNames[dateObj.getMonth()];
const year = dateObj.getFullYear();


// Format the date as "DD MONTH YYYY"
const formattedDate =day + " " + month.toUpperCase() + " " + year;

// Output the formatted date

return formattedDate
}
