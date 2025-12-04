export const validateNews = (data) => {
  const errors = {};

  // Helper to get trimmed values safely
  const getVal = (key) => data.get(key)?.toString().trim() || "";

  // Title
  const title = getVal("title");
  if (!title) errors.title = "Title is required.";
  else if (title.length < 50) errors.title = "Title must be at least 50 characters.";
  else if (title.length > 200) errors.title = "Title cannot exceed 200 characters.";

  // Main Description
  const maindes = getVal("maindes");
  if (!maindes) errors.maindes = "Main description is required.";
  else if (maindes.length < 100) errors.maindes = "Main description must be at least 100 characters.";
  else if (maindes.length > 400) errors.maindes = "Main description cannot exceed 400 characters.";

  // Full Description
  const desc = getVal("desc");
  if (!desc) errors.desc = "Full description is required.";
  else if (desc.length < 300) errors.desc = "Full description must be at least 300 characters.";
  else if (desc.length > 10000) errors.desc = "Full description cannot exceed 10,000 characters.";

  // News Type (Enum)
  const validTypes = [
                "politics",
                "sports",
                "technology",
                'health',
                "education",
                "crime",
                "world",
                "weather",
                "local",
                "other",
            ];
  const type = getVal("type");
  if (!type) errors.type = "News type is required.";
  else if (!validTypes.includes(type))
    errors.type = "Invalid news type selected.";

  // Taluko (Enum)
  const validTaluko =  [
                "chotila",
                "chuda",
                "dasada",
                "dhrangadhra",
                "halvad",
                "lakhtar",
                "limbdi",
                "muli",
                "sayla",
                "thangadh",
                "wadhwan"
            ]
  const taluko = getVal("taluko");
  if (!taluko) errors.taluko = "Taluko is required.";
  else if (!validTaluko.includes(taluko))
    errors.taluko = "Invalid taluko selected.";

  // Slug
  const url= getVal("url");
  if (!url) errors.url = "URL is required.";
  else if (url.length < 5) errors.url = "URL must be at least 5 characters.";
  else if (url.length > 35) errors.url = "URL cannot exceed 35 characters.";
  else if (!/^[a-z0-9\-]+$/.test(url))
    errors.url = "URL can contain lowercase letters, numbers, and hyphens only.";
  // Author (optional)
  const author = getVal("author");
  if (author && (author.length < 4 || author.length > 25))
    errors.author = "Author name must be 4–25 characters.";

  // Tags (comma-separated)
 

  // Keywords (comma-separated)


  // Image URL
  
  // Location (optional)
  const location = getVal("location");
  if (location && (location.length < 5 || location.length > 50))
    errors.location = "Location must be 5–50 characters.";

  return errors;
};
