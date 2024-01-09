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
      let P1Marks = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(3)`
      ).text();
      let P2Marks = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(4)`
      ).text();
      let P3Marks = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(5)`
      ).text();
      let T1Marks = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(6)`
      ).text();
      let T2Marks = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(7)`
      ).text();
      let T3Marks = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(8)`
      ).text();
      
      marks.push({
        Subject: subject,
        P1Marks: P1Marks == "  " ? "n/a" : P1Marks,
        P2Marks: P2Marks == "  " ? "n/a" : P2Marks,
        P3Marks: P3Marks == "  " ? "n/a" : P3Marks,
        T1Marks: T1Marks == "  " ? "n/a" : T1Marks,
        T2Marks: T2Marks == "  " ? "n/a" : T2Marks,
        T3Marks: T3Marks == "  " ? "n/a" : T3Marks,
      });
    });
    res.status(200).send(marks);
  } catch (err) {
    console.log(err);
  }
};

export default Marks;