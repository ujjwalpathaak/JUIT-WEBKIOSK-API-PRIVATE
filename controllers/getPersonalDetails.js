import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const PersonalDetails = async (req, res) => {
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
    const personalDetailsHTML = await rq.get(
      "https://webkiosk.juit.ac.in:9443/StudentFiles/PersonalFiles/StudPersonalInfo.jsp"
    );
    
    let $ = cheerio.load(personalDetailsHTML);
    let name = $("table:nth-child(1) tr:nth-child(2) td:nth-child(2) font")
      .text()
      .slice(1);
    let rollNumber = $(
      "table:nth-child(1) tr:nth-child(3) td:nth-child(2) font"
    ).text();
    let fatherName = $(
      "table:nth-child(1) tr:nth-child(4) td:nth-child(2) font"
    ).text();
    let course = $(
      "table:nth-child(1) tr:nth-child(5) td:nth-child(2) font[size='2']"
    ).text();
    let semester = $(
      "table:nth-child(1) tr:nth-child(6) td:nth-child(2) font"
    ).text();
    let studentNumber = $(
      "table:nth-child(1) tr:nth-child(8) td:nth-child(2) font"
    ).text();
    let parentNumber = $(
      "table:nth-child(1) tr:nth-child(8) td:nth-child(4) font"
    ).text();
    let studentEmail = $(
      "table:nth-child(1) tr:nth-child(10) td:nth-child(2) font"
    ).text();
    let parentEmail = $(
      "table:nth-child(1) tr:nth-child(10) td:nth-child(4) font"
    ).text();
    let address = $(
      "table:nth-child(1) tr:nth-child(12) td:nth-child(4) font"
    ).text();
    let xMarks = $(
      "table[id='table-1'] tr:nth-child(3) td:nth-child(7)"
    ).text();
    let xiiMarks = $(
      "table[id='table-1'] tr:nth-child(2) td:nth-child(7)"
    ).text();
    let details = {
      name: name.trim(),
      rollNumber: rollNumber.trim(),
      fatherName: fatherName.trim(),
      course: course.trim(),
      semester: semester.trim(),
      studentNumber: studentNumber.trim(),
      parentNumber: parentNumber.trim(),
      studentEmail: studentEmail.trim(),
      parentEmail: parentEmail.trim(),
      address: address.trim(),
      xMarks: xMarks.trim(),
      xiiMarks: xiiMarks.trim(),
    };
    res.status(200).send(details);
  } catch (err) {
    console.log(err);
  }
};

export default PersonalDetails;
