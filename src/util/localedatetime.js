export const strToDate = (dtStr) => {
  if (!dtStr) return null;
  let dateParts = dtStr.split("/");
  let timeParts = dateParts[2].split(" ")[1].split(":");
  dateParts[2] = dateParts[2].split(" ")[0];
  // month is 0-based, that's why we need dataParts[1] - 1

  return new Date(
    +dateParts[2],
    dateParts[1] - 1,
    +dateParts[0],
    timeParts[0],
    timeParts[1],
    timeParts[2]
  );
};

export const dateStr = (inputString) => {
  let result =
    ("00" + (inputString.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + inputString.getDate()).slice(-2) +
    "/" +
    inputString.getFullYear();
  return result;
};

export const timeString = (inputString) => {
  let timeStr = new Date(inputString)
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

  return timeStr;
};

export const combineDateTime = (inputString) => {
  return dateStr(inputString) + timeString(inputString);
};
