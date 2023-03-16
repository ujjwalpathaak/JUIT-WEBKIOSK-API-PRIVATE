import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const Marks = async (req, res) => {
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
          ExamCode: examcode,
        },
        resolveWithFullResponse: true,
        followAllRedirects: true,
        simple: false,
      }
    );
    const MarksHTML = await rq.get(
      `https://webkiosk.juit.ac.in:9443/StudentFiles/Exam/StudentEventMarksView.jsp?x=&exam=${examcode}`
    );

    let $ = cheerio.load(MarksHTML);

    let marks = [];

    $("table[id='table-1'] tbody tr td:nth-child(2)").each(function (index) {
      let subject = $(this).text();
      let marks2 = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(3)`
      ).text();
      marks.push({
        Subject: subject,
        T1Marks: marks2,
      });
    });
    res.status(200).send(marks);
  } catch (err) {
    console.log(err);
  }
};

export default Marks;