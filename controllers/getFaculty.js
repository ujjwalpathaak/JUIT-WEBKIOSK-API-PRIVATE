import request from "request-promise";
const cookieJar = request.jar();
const rq = request.defaults({ jar: cookieJar });
import cheerio from "cheerio";

const Faculty = async (req, res) => {
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

    const FacultyHTML = await rq.get(
      `https://webkiosk.juit.ac.in:9443/StudentFiles/Academic/StudSubjectFaculty.jsp?x=&exam=${examcode}`
    );

    let $ = cheerio.load(FacultyHTML);

    function remove_linebreaks(str) {
      return str.replace(/[\n\t\t\t]+/gm, "");
    }

    let faculty = [];
    $("table[align='middle'] tr td:nth-child(2)").each(function (index) {
      if (index !== 0) {
        let subject = remove_linebreaks($(this).text());
        if (
          remove_linebreaks(
            $(
              `table[align='middle'] tr:nth-child(${index + 1}) td:nth-child(3)`
            ).text()
          ).length !== 1
        ) {
          let temp = $(
            `table[align='middle'] tr:nth-child(${index + 1}) td:nth-child(3)`
          ).text();
          let subFaculty = remove_linebreaks(temp);
          let tutFaculty;
          if (
            remove_linebreaks(
              $(
                `table[align='middle'] tr:nth-child(${
                  index + 1
                }) td:nth-child(4)`
              ).text()
            ).length !== 1
          ) {
            let temp = $(
              `table[align='middle'] tr:nth-child(${index + 1}) td:nth-child(4)`
            ).text();
            tutFaculty = remove_linebreaks(temp);
          }
          tutFaculty
            ? faculty.push({
                subject: subject,
                lecFaculty: subFaculty,
                tutFaculty: tutFaculty,
              })
            : faculty.push({
                subject: subject,
                lecFaculty: subFaculty,
              });
        } else {
          let temp = $(
            `table[align='middle'] tr:nth-child(${index + 1}) td:nth-child(5)`
          ).text();
          let subFaculty = remove_linebreaks(temp);
          faculty.push({
            subject: subject,
            pracFaculty: subFaculty,
          });
        }
      }
    });

    res.status(200).send(faculty);
  } catch (err) {
    console.log(err);
  }
};

export default Faculty;
