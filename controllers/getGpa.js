import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const Gpa = async (req, res) => {
  const { rollnumber, password } = req.body;
  try {
    await rq.post(
      "https://webkiosk.juit.ac.in:9443/CommonFiles/UserAction.jsp",
      {
        form: {
          InstCode: "JUIT",
          UserType: "S",
          MemberCode: rollnumber,
          Password: password
        },
        resolveWithFullResponse: true,
        followAllRedirects: true,
        simple: false,
      }
    );
    const GpaHTML = await rq.get(
      `https://webkiosk.juit.ac.in:9443/StudentFiles/Exam/StudCGPAReport.jsp`
    );

    let $ = cheerio.load(GpaHTML);

    let gpa = [];

    $("table[id='table-1'] tbody tr td:nth-child(1) a").each(function (index) {
      let semester = $(this).text();
      let sgpa = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(7)`
      ).text();
      let cgpa = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(8)`
      ).text();

      gpa.push({
        Semester: semester,
        SGPA: sgpa,
        CGPA: cgpa,
      });
    });
    res.status(200).send(gpa);
  } catch (err) {
    console.log(err);
  }
};

export default Gpa;
