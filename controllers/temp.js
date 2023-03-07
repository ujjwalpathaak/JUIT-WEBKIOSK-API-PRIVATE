let request = require("request-promise");
const cookieJar = request.jar();
request = request.defaults({ jar: cookieJar });
// const cheerio = require("cheerio");

const PersonalDetails = async (req, res) => {
  const { rollnumber, password } = req.body;
  try {
    await request.post(
      "https://webkiosk.juit.ac.in:9443/CommonFiles/UserAction.jsp",
      {
        form: {
          InstCode: "JUIT",
          UserType: "S",
          MemberCode: rollnumber,
          Password: password,
        },
        resolveWithFullResponse: true,
        followAllRedirects: true,
        simple: false,
      }
    );
    const personalDetailsHTML = await request.get(
      "https://webkiosk.juit.ac.in:9443/StudentFiles/PersonalFiles/StudPersonalInfo.jsp"
    );
    console.log(personalDetailsHTML);
    res.status(200).send(personalDetailsHTML);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { PersonalDetails };


const puppeteer = require("puppeteer");
const request = require("request-promise");
const cheerio = require("cheerio");

const URL = "https://webkiosk.juit.ac.in:9443/index.jsp";
const PersonalDetails = async (req, res) => {
  const { rollnumber, password } = req.body;
  (async () => {
    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(URL);
      await page.type('input[name="MemberCode"]', rollnumber);
      await page.type('input[name="Password"]', password);
      await page.click('input[id="BTNSubmit"]');

      if (
        page.url() ==
        "https://webkiosk.juit.ac.in:9443/StudentFiles/StudentPage.jsp"
      ) {
        await page.goto(
          "https://webkiosk.juit.ac.in:9443/StudentFiles/PersonalFiles/StudModifyEmailIDTelephone.jsp"
        );
        const personalDetails = await page.evaluate(() => {
          let details = {
            name: "",
            number: "",
            email: "",
            address: "",
            parentsNumber: "",
            parentEmail: "",
          };
          const data = document.querySelectorAll("tr > td:nth-child(2) > font");
          data.forEach((curr, i) => {
            curr.innerText = curr.innerText.slice(1);
            switch (i) {
              case 0:
                details.number = curr.innerText;
                break;
              case 1:
                break;
              case 2:
                details.email = curr.innerText;
                break;
              case 3:
                details.address = details.address.concat(curr.innerText);
                break;
              case 4:
                details.address = details.address.concat(" ", curr.innerText);
                break;
              case 5:
                break;
              case 6:
                details.address = details.address.concat(", ", curr.innerText);
                break;
              case 7:
                details.address = details.address.concat(", ", curr.innerText);
                break;
              case 8:
                break;
              case 9:
                break;
              case 10:
                break;
              case 11:
                details.address = details.address.concat(", ", curr.innerText);
                break;
              case 12:
                details.address = details.address.concat(", ", curr.innerText);
                break;
              case 13:
                details.parentsNumber = curr.innerText;
                break;
              case 14:
                break;
              case 15:
                details.parentEmail = curr.innerText;
                break;
              default:
            }
          });
          return details;
        });
        res.status(200).send(personalDetails);
      } else {
        res.status(401).send("Wrong Credientials");
      }
      await browser.close();
    } catch (err) {
      console.log(err);
    }
  })();
};

module.exports = { PersonalDetails };
