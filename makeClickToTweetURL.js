
// This function makes strings into click to tweet URLS
//
// You can enter whatever username and string you want
//  via the variable below and the terminal will output
//  a Click to Tweet url you can use as a link to improve
//  shareability.

function stringToClickToTweetURL(str, user) {

  // Format user incase it doesn't start with an @
  var formattedUser = "";
  // console.log(user[0])
  if (user[0] !== "@") {
    formattedUser = "@" + user;
  } else {
    formattedUser = user;
  }


  // Add user @name to the string so they are notified
  var stringToConvert = str + " " + formattedUser;

  // Convert to Click to Tweet URL
  stringToConvert = stringToConvert.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

  // Put 'Click to Tweet' URL suffix at the begining
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  // Return properly formatted "Click to Tweet URL"
  return resultString;
}

user = "independentian";
str = "I just built an automated click to tweet tool";
console.log(stringToClickToTweetURL(str, user));
