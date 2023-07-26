function stringLimiter(str, limit = 100) {
  if (str.length <= limit) return str;
  const res = str.slice(0, limit).split(" ");
  res.pop();
  return `${res.join(" ")}...`;
}

function dateFormatter(date) {
  const cleanDate = date.split("T")[0];
  return cleanDate.split("-").toReversed().join("/");
}

export default { stringLimiter, dateFormatter };
