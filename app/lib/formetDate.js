let formatDate = (dateString) => {
  try {
    if (dateString) {
      const date = new Date(dateString);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      
      return date.toLocaleDateString("en-GB", options);
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};

export default formatDate;