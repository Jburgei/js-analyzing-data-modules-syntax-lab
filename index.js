require("datejs");

function combineUsers(...args) {
  const combinedObject = {
    users : [], // array that will hold all usernames
    merge_date: "" //will hold today's date as a string
  };
  args.forEach((userArray) => {
    combinedObject.users.push(...userArray); //spread operator
  });

  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  return combinedObject;
  }

console.log(combineUsers(["sam", "pat"], ["john"], ["claire"]));
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};