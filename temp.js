const request = require("request-promise");
const cheerio = require("cheerio");

const URL =
  "https://aws.amazon.com/certification/faqs/#:~:text=How%20much%20does%20an%20AWS,Specialty%20exams%20are%20300%20USD.";

(async () => {
  const response = await request(URL);

  let $ = cheerio.load(response);

  let trya = $('h1[id="AWS_Certification_FAQ"]').text();

  console.log(trya);
})();
