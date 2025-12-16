exports.isExpired = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();

  // Get the time difference in milliseconds
  const diffInMs = now - createdDate;

  // Convert milliseconds to days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  console.log({ diffInDays })

  return diffInDays > 10;
};