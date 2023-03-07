import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const Attendance = async (req, res) => {
  const { rollnumber, password } = req.body;
  try {
    await rq.post(
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
    const AttendanceHTML = await rq.get(
      "https://webkiosk.juit.ac.in:9443/StudentFiles/Academic/StudentAttendanceList.jsp"
    );
    let $ = cheerio.load(AttendanceHTML);

    let attendance = {};
    $("table[id='table-1'] tbody tr td:nth-child(2)").each(function (index) {
      attendance[`Subject${index}`] = $(this).text();
      let temp = $(
        `table[id='table-1'] tbody tr:nth-child(${index + 1}) td:nth-child(6) a`
      ).text();
      if (temp == "") {
        attendance[`Attendance${index}`] = $(
          `table[id='table-1'] tbody tr:nth-child(${
            index + 1
          }) td:nth-child(3) a`
        ).text() + "%";
      } else {
        attendance[`Attendance${index}`] = temp + "%";
      }
    });
    res.status(200).send(attendance);
  } catch (err) {
    console.log(err);
  }
};

export default Attendance;
