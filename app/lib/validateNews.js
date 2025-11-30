export const validateNews = (data)=>{
   
  const errors = {};

  // Title
  const title = data.get("title")?.trim();
  if (!title || title.length < 50) {
    errors.title = "Title must be at least 50 characters.";
  }
  if (title && title.length > 200) {
    errors.title = "Title must be under 200 characters.";
  }

  // Main description
  const maindes = data.get("maindes")?.trim();
  if (!maindes || maindes.length < 100) {
    errors.maindes = "Main description must be at least 100 characters.";
  }
  if (maindes && maindes.length > 400) {
    errors.maindes = "Main description must be under 400 characters.";
  }

  // Full description
  const desc = data.get("desc")?.trim();
  if (!desc || desc.length < 300) {
    errors.desc = "Description must be at least 300 characters.";
  }

  // Image
  const img = data.get("img")?.trim();
  if (!img) {
    errors.img = "Image URL is required.";
  }

  // Location
  const location = data.get("location")?.trim();
  if (location && location.length < 5) {
    errors.location = "Location must be at least 5 characters.";
  }

  return errors;
}

