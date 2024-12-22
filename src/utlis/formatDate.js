export const FormatDate = (date) => {
    // Ensure the date is a valid date object 
    const _date = new Date(date);

    // Check if the date is valid 
    if(isNaN(_date)){
      console.error("Invalid Date");
      return "Invalid Date";
    }
   
    // Format the date using Intl.DateTimeFormat 
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(_date)

    return formattedDate
};