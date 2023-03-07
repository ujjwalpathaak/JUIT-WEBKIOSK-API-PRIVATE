## JUIT WebKiosk API

<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img alt="Puppeteer" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white"/>

API for accessing Student Data through JUIT WebKiosk. Created using NodeJS, ExpressJS and Cheerio

<!-- BASE URL:  -->

### Required request body

```
{
    "rollnumber": "XXXXXXXX",
    "password": "XXXXXXXX"
}
```

### Endpoints

- `/login`  
  Login into the JUIT WebKiosk portal.

**Response:**

```
{
    "response": "User 211105 Logged In"
}
```

```
{
    "response": "Wrong Credientials"
}
```

- `/personaldetails`  
  Get personal details from the WebKiosk portal.

**Response:**

```
{
    "name": "Ujjwal  Pathak",
    "rollNumber": "211105",
    "fatherName": "Deepak Pathak",
    "course": "( CSE)",
    "semester": "4",
    "studentNumber": "8448772593",
    "parentNumber": "9871468245,9999574593",
    "studentEmail": "pathak2002ujjwal@gmail.com",
    "parentEmail": "pathakdeep2003@gmail.com,rupalpath@gmail.com",
    "address": "2308 Verona,  Mahagun Moderne Sector-78",
    "xMarks": "(kindly use my API to check urs :| )",
    "xiiMarks": "(kindly use my API to check urs :| )"
}
```

- `/attendance`  
  Get attendance details from the WebKiosk portal.

**Response:**

```
{
    "Subject0": "DATA SIMULATION LAB - 18B17CI473",
    "Attendance0": "80%",
    "Subject1": "DESIGN & ANALYSIS OF ALGORITHMS - 18B11CI412",
    "Attendance1": "85%",
    "Subject2": "DESIGN AND ANALYSIS OF ALGORITHMS LAB - 18B17CI472",
    "Attendance2": "60%",
    "Subject3": "DISCRETE COMPUTATIONAL MATHEMATICS - 18B11CI414",
    "Attendance3": "76%",
    "Subject4": "ENVIRONMENTAL STUDIES - 18B11GE411",
    "Attendance4": "90%",
    "Subject5": "FINANCE AND ACCOUNTS - 18B11HS411",
    "Attendance5": "80%",
    "Subject6": "MODELING AND SIMULATION TECHNIQUES - 18B11CI413",
    "Attendance6": "90%",
    "Subject7": "OPERATING SYSTEM LAB - 18B17CI471",
    "Attendance7": "81%",
    "Subject8": "OPERATING SYSTEMS - 18B11CI411",
    "Attendance8": "61%",
    "Subject9": "WEB TECH LAB - 18B17CI474",
    "Attendance9": "80%"
}
```
<!--
* ```/v1.0/attendance```
  Get attendance details for a given semester.


* ```/v1.0/cgpa```
  Get the CGPA report for all semesters.


* ```/v1.0/grades```
  Get the Exam Grades for a given semesters.


* ```/v1.0/semesters```
  Get the list of valid Semester Codes.


* ```/v1.0/faculty```
  Get the list of registered subject faculty.


* ```/v1.0/subjects```
  Get the list of registered subjects for a given semester


## Examples

- ### Personal Details.
**Endpoint:**
```https://juit-webkiosk-api.herokuapp.com/v1.0/personalDetails/```
**Body:**
 ```
 {
    "username":"xxxxx",
    "password":"xxxxx"
 }
```
**Response:**
  ```
  {
    "Name": "Aarhan Ali Khan",
    "Rollno": "201221",
    "FathersName": "xxxx",
    "Course": "B.T. ( CSE)",
    "Semester": "4",
    "Mobile": "xxxxx",
    "ParentMobile": "xxxxx",
    "Email": "xxxxx",
    "address": "xxxx",
    "percentage12": "not that great to be put on display",
    "percentage10": "not that great to be put on display"
  }
  ```
- ### Faculty

**(NOTE- Pass in different semester codes, can get the available semester codes by calling the /semesters endpoint)**

**Endpoint:**
```https://juit-webkiosk-api.herokuapp.com/v1.0/grades/2020ODDSEM```
**Body:**
 ```
 {
    "username":"xxxxx",
    "password":"xxxxx"
 }
```
**Response:**
  ```
  [
    {
        "SubjectName": "ENGINEERING MATHEMATICS-I(18B11MA111)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A+"
    },
    {
        "SubjectName": "ENGINEERING PHYSICS LAB-I(18B17PH171)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A"
    },
    {
        "SubjectName": "ENGINEERING PHYSICS-I(18B11PH111)",
        "ExamCode": "2020ODDSEM",
        "Grade": "B+"
    },
    {
        "SubjectName": "ENGLISH AND TECHNICAL COMMUNICATION LAB(18B17HS171)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A+"
    },
    {
        "SubjectName": "ENGLISH AND TECHNICAL COMMUNICATION(18B11HS111)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A+"
    },
    {
        "SubjectName": "PROGRAMMING FOR PROBLEM SOLVING LAB-II(19B17CI171)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A"
    },
    {
        "SubjectName": "PROGRAMMING FOR PROBLEM SOLVING-II(19B11CI111)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A"
    },
    {
        "SubjectName": "WORKSHOP PRACTICES(18B17GE171)",
        "ExamCode": "2020ODDSEM",
        "Grade": "A"
    }
]
  ```
 flexing online sem grades ⌐■_■ -->
