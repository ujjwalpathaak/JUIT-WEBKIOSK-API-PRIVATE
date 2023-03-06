const request = require("request-promise");
const cheerio = require("cheerio");

const Login = async (req, res) => {
  const { rollnumber, password } = req.body;
  var options = {
    method: "POST",
    uri: "https://webkiosk.juit.ac.in:9443/CommonFiles/UserAction.jsp",
    form: {
      UserType: "S",
      MemberCode: rollnumber,
      Password: password,
    },
    resolveWithFullResponse: true,
    headers: {},
  };

  request(options).then(function (response) {
    (async () => {
      let $ = cheerio.load(response.body);

      let check = $("br").html();
      if (check === null) {
        console.log("Correct Password");
        res.status(200).send(`User ${MemberCode} Logged In`);
      } else {
        console.log("Wrong Password");
        res.status(401).send("Wrong Credientials");
      }
    })();
  });
};

module.exports = { Login };
