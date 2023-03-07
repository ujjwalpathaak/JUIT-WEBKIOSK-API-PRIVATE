import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const Login = async (req, res) => {
  const { rollnumber, password } = req.body;
  var options = {
    method: "POST",
    uri: "https://webkiosk.juit.ac.in:9443/CommonFiles/UserAction.jsp",
    form: {
      InstCode: "JUIT",
      UserType: "S",
      MemberCode: rollnumber,
      Password: password,
    },
    resolveWithFullResponse: true,
    followAllRedirects: true,
    simple: false,
  };

  rq(options).then(function (response) {
    (async () => {
      let $ = cheerio.load(response.body);
      let check = $("body").html();
      if (check == null) {
        // console.log("Correct Password");
        res.status(200).send(`User ${rollnumber} Logged In`);
      } else {
        // console.log("Wrong Password");
        res.status(401).send("Wrong Credientials");
      }
    })();
  });
};

export default Login;
