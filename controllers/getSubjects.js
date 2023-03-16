import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const Subjects = async (req, res) => {
  const { rollnumber, password, examcode } = req.body;
  try {
    await rq.post(
      "https://webkiosk.juit.ac.in:9443/CommonFiles/UserAction.jsp",
      {
        form: {
          InstCode: "JUIT",
          UserType: "S",
          MemberCode: rollnumber,
          Password: password,
          Password: password,
          ExamCode: examcode,
        },
        resolveWithFullResponse: true,
        followAllRedirects: true,
        simple: false,
      }
    );
    const SubjectsHTML = await rq.get(
      `https://webkiosk.juit.ac.in:9443/StudentFiles/Academic/StudSubjectTaken.jsp?x=&exam=${examcode}`
    );
    let $ = cheerio.load(SubjectsHTML);

    let subjects = [];
    $("table[width='100%'] tbody tr td:nth-child(2)").each(function (index) {
      if (index !== 0) {
        if (
          $(
            `table[width='100%'] tbody tr:nth-child(${
              index + 1
            }) td:nth-child(3)`
          ).html() == "&nbsp;"
        ) {
          let total = $(
            `table[width='100%'] tbody tr:nth-child(${
              index + 1
            }) td:nth-child(2)`
          ).text();

          subjects.push({
            totalCredits: total,
          });
          res.status(200).send(subjects);
        } else {
          let subject = $(this).text();
          let credits = $(
            `table[width='100%'] tbody tr:nth-child(${
              index + 1
            }) td:nth-child(3)`
          ).text();
          subjects.push({
            subject: subject,
            credits: credits,
          });
        }
      }
    });
    // res.status(200).send(subjects);
  } catch (err) {
    console.log(err);
  }
};

export default Subjects;
