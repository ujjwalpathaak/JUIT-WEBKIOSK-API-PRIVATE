## JUIT WebKiosk API

<img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img alt="Puppeteer" src="https://img.shields.io/badge/Cheerio-000000?style=for-the-badge"/>

API for accessing Student Data through JUIT WebKiosk. Created using NodeJS, ExpressJS and Cheerio

BASE URL: https://juit-webkiosk-api-6v2h.onrender.com/

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

- `/personaldetails`  
  Get personal details.

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
    "xMarks": "( use my API to see ur own :P )",
    "xiiMarks": "( use my API to see ur own :P )"
}
```

- `/gpa`  
  Get CGPA and SGPA for each semester.

**Response:**

```
[
    {
        "Semester": "1",
        "SGPA": "9.43",
        "CGPA": "9.43"
    }
]
```

### Required request body

```
{
    "rollnumber": "XXXXXXXX",
    "password": "XXXXXXXX"
    "examcode": "2023EVESEM"
}
```

### Endpoints

- `/attendance`  
  Login into the JUIT WebKiosk portal.

**Response:**

```
[
    {
        "subject": "DATA SIMULATION LAB - 18B17CI473",
        "attendance": "80%"
    },
    {
        "subject": "DESIGN & ANALYSIS OF ALGORITHMS - 18B11CI412",
        "attendance": "81%"
    },
    {
        "subject": "DESIGN AND ANALYSIS OF ALGORITHMS LAB - 18B17CI472",
        "attendance": "75%"
    },
    {
        "subject": "DISCRETE COMPUTATIONAL MATHEMATICS - 18B11CI414",
        "attendance": "78%"
    },
    {
        "subject": "ENVIRONMENTAL STUDIES - 18B11GE411",
        "attendance": "90%"
    },
    {
        "subject": "FINANCE AND ACCOUNTS - 18B11HS411",
        "attendance": "80%"
    },
    {
        "subject": "MODELING AND SIMULATION TECHNIQUES - 18B11CI413",
        "attendance": "92%"
    },
    {
        "subject": "OPERATING SYSTEM LAB - 18B17CI471",
        "attendance": "84%"
    },
    {
        "subject": "OPERATING SYSTEMS - 18B11CI411",
        "attendance": "65%"
    },
    {
        "subject": "WEB TECH LAB - 18B17CI474",
        "attendance": "83%"
    }
]
```

- `/marks`  
  Get marks according to semester code.
Required request body

```
{
    "rollnumber": "XXXXXXXX",
    "password": "XXXXXXXX",
    "examcode": "2022ODDSEM",
}
```
**Response:**

```
[
    {
        "Subject": "DATA STRUCTURES AND ALGORITHMS- 18B11CI211",
        "P1Marks": "N/A",
        "P2Marks": "N/A",
        "P3Marks": "N/A",
        "T1Marks": "6.0",
        "T2Marks": "12.0",
        "T3Marks": "20.0"
    },
    {
        "Subject": "DATA STRUCTURES AND ALGORITHMS LAB- 18B17CI271",
        "P1Marks": "16.0",
        "P2Marks": "20.0",
        "P3Marks": "51.0",
        "T1Marks": "N/A",
        "T2Marks": "N/A",
        "T3Marks": "N/A"
    },
    {
        "Subject": "ELECTRICAL SCIENCES- 18B11EC211",
        "P1Marks": "N/A",
        "P2Marks": "N/A",
        "P3Marks": "N/A",
        "T1Marks": "9.0",
        "T2Marks": "3.0",
        "T3Marks": "15.0"
    },
    {
        "Subject": "ELECTRICAL SCIENCES LAB- 18B17EC271",
        "P1Marks": "16.0",
        "P2Marks": "10.0",
        "P3Marks": "48.0",
        "T1Marks": "N/A",
        "T2Marks": "N/A",
        "T3Marks": "N/A"
    },
    {
        "Subject": "ENGINEERING GRAPHICS- 18B17GE173",
        "P1Marks": "15.0",
        "P2Marks": "14.0",
        "P3Marks": "43.0",
        "T1Marks": "N/A",
        "T2Marks": "N/A",
        "T3Marks": "N/A"
    },
    {
        "Subject": "ENGINEERING MATHEMATICS-II- 18B11MA211",
        "P1Marks": "N/A",
        "P2Marks": "N/A",
        "P3Marks": "N/A",
        "T1Marks": "12.0",
        "T2Marks": "7.0",
        "T3Marks": "3.0"
    },
    {
        "Subject": "ENGINEERING PHYSICS LAB-II- 18B17PH271",
        "P1Marks": "13.0",
        "P2Marks": "13.0",
        "P3Marks": "46.0",
        "T1Marks": "N/A",
        "T2Marks": "N/A",
        "T3Marks": "N/A"
    },
    {
        "Subject": "ENGINEERING PHYSICS-II- 18B11PH211",
        "P1Marks": "N/A",
        "P2Marks": "N/A",
        "P3Marks": "N/A",
        "T1Marks": "13.0",
        "T2Marks": "8.0",
        "T3Marks": "3.0"
    },
    {
        "Subject": "LIFE SKILLS AND EFFECTIVE COMMUNICATION- 21B11HS211",
        "P1Marks": "N/A",
        "P2Marks": "N/A",
        "P3Marks": "N/A",
        "T1Marks": "10.0",
        "T2Marks": "16.0",
        "T3Marks": "23.0"
    },
    {
        "Subject": "LIFE SKILLS AND EFFECTIVE COMMUNICATION LAB- 21B17HS271",
        "P1Marks": "14.0",
        "P2Marks": "15.0",
        "P3Marks": "44.0",
        "T1Marks": "N/A",
        "T2Marks": "N/A",
        "T3Marks": "N/A"
    }
]
```

- `/faculty`  
  Login into the JUIT WebKiosk portal.
Required request body

```
{
    "rollnumber": "XXXXXXXX",
    "password": "XXXXXXXX",
    "examcode": "2022ODDSEM",
}
```
**Response:**

```
[
    {
        "subject": "MODELING AND SIMULATION TECHNIQUES(18B11CI413)",
        "lecFaculty": "NAFIS UDDIN KHAN"
    },
    {
        "subject": "DISCRETE COMPUTATIONAL MATHEMATICS(18B11CI414)",
        "lecFaculty": "PRADEEP KUMAR PANDEY"
    },
    {
        "subject": "DATA SIMULATION LAB(18B17CI473)",
        "pracFaculty": "ALOK KUMAR"
    },
    {
        "subject": "OPERATING SYSTEM LAB(18B17CI471)",
        "pracFaculty": "DEEPAK GUPTA"
    },
    {
        "subject": "ENVIRONMENTAL STUDIES(18B11GE411)",
        "lecFaculty": "POONAM SHARMA"
    },
    {
        "subject": "OPERATING SYSTEMS(18B11CI411)",
        "lecFaculty": "PRADEEP KUMAR GUPTA"
    },
    {
        "subject": "WEB TECH LAB(18B17CI474)",
        "pracFaculty": "SUNIL DATT SHARMA"
    },
    {
        "subject": "FINANCE AND ACCOUNTS(18B11HS411)",
        "lecFaculty": "AMIT SRIVASTAVA"
    },
    {
        "subject": "DESIGN AND ANALYSIS OF ALGORITHMS LAB(18B17CI472)",
        "pracFaculty": "DIKSHA HOODA"
    },
    {
        "subject": "DESIGN & ANALYSIS OF ALGORITHMS(18B11CI412)",
        "lecFaculty": "DIKSHA HOODA"
    }
]
```

- `/subjects`  
  Login into the JUIT WebKiosk portal.
Required request body

```
{
    "rollnumber": "XXXXXXXX",
    "password": "XXXXXXXX",
    "examcode": "2022ODDSEM",
}
```
**Response:**

```
[
    {
        "subject": "ENVIRONMENTAL STUDIES(18B11GE411)",
        "credits": "0"
    },
    {
        "subject": "DESIGN AND ANALYSIS OF ALGORITHMS LAB(18B17CI472)",
        "credits": "1"
    },
    {
        "subject": "DATA SIMULATION LAB(18B17CI473)",
        "credits": "2"
    },
    {
        "subject": "DESIGN AND ANALYSIS OF ALGORITHMS LAB(18B17CI472)",
        "credits": "2"
    },
    {
        "subject": "MODELING AND SIMULATION TECHNIQUES(18B11CI413)",
        "credits": "2"
    },
    {
        "subject": "OPERATING SYSTEM LAB(18B17CI471)",
        "credits": "2"
    },
    {
        "subject": "WEB TECH LAB(18B17CI474)",
        "credits": "2"
    },
    {
        "subject": "DESIGN & ANALYSIS OF ALGORITHMS(18B11CI412)",
        "credits": "3"
    },
    {
        "subject": "DISCRETE COMPUTATIONAL MATHEMATICS(18B11CI414)",
        "credits": "3"
    },
    {
        "subject": "FINANCE AND ACCOUNTS(18B11HS411)",
        "credits": "3"
    },
    {
        "subject": "OPERATING SYSTEMS(18B11CI411)",
        "credits": "3"
    },
    {
        "totalCredits": "23.0"
    }
]
```
