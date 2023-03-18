<br />
<div align="center">
<h3> <u>Winter Assignment IMG IITR<br> </u></h3>
<h2 align="center">FormFrenzy</h2>

  <p align="center">
   complete form solutions enabling users to create forms, quizzes and many more.
    <br />
    <br />
    <!-- to edit -->
    <a href="https://github.com/shivam6862/Quiz-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/shivam6862/Quiz-App/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Description</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

FormFrenzy is an innovative web application that simplifies the process of creating and managing quizzes, forms, and exams. With FormFrenzy, users can easily create customized quizzes, surveys, and result forms, and share them with others through various platforms.

Team - `shivam6862`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [react-url]
- [NodeJs-url]
- [Mongodb-url]
- [VisualStudioCode-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

So as to run our project locally, you need to follow the steps below.

### Prerequisites

First of all you need to have a firebase authentication account. You can follow the steps given at [https://firebase.google.com/docs/auth/web/start] to do so.

Then you have to get the credentials.json file which you have to put in src file in the backend directory of this repo.

Then you hve to get the firebaseConfig keys file which you have to put .env file in the frontend directory of this repo.

### Installation

1. Get a free firebase authentication from [https://console.firebase.google.com/]
2. Clone the repo
   ```sh
   git clone https://github.com/shivam6862/Quiz-App
   ```
3. Install NPM packages on both backend and frontend folders
   ```sh
   npm install
   ```
4. Enter your API in `.env` of frontend directory
   ```sh
   VITE_REACT_BACKEND_URL=http://localhost:8080
   VITE_REACT_SOCKET_URL=http://127.0.0.1:8080
   VITE_REACT_apiKey= "your api key"
   VITE_REACT_authDomain= "your auth Domain"
   VITE_REACT_projectId= "your project Id"
   VITE_REACT_storageBucket= "your storage Bucket"
   VITE_REACT_messagingSenderId= "your messagingSender Id"
   VITE_REACT_appId= "your app Id"
   ```
5. Enter your MONGODB DATABASE URL and put it in `.env` file in backend directory
    ```sh
    MONGODB_URL= "your mongodb url"
    ```
6. Make the database in your mongodb server named as `test-app` and make the following collection
   ```sh
   annswerpaper
   conversation
   paperdone
   questionpaper
   request
   results
   users
   ```
7. Run the project in frontend using
   ```sh
   npm run dev
   ```
8. Run the project in backend using
   ```sh
   npm start
   ```
9. You can now view the project at `http://localhost:3000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Description

FormFrenzy's intuitive interface makes it easy to create forms and quizzes of any complexity level. The app offers a range of question types, including multiple-choice, short answer, and essay questions, enabling users to create dynamic and engaging assessments. <br/>

FormFrenzy's powerful management features enable users to track the responses to their forms and quizzes easily. Users can view real-time analytics and generate reports <br/>

FormFrenzy also offers a unique feature for exam givers, which enables them to conduct group exams. The app allows users to create chat groups for group exams, facilitating communication between exam givers and takers. This feature makes it easier for exam givers to monitor the progress of the exam and answer any questions that exam takers may have.<br/>

Overall, FormFrenzy is a powerful and user-friendly application that makes creating and managing forms, quizzes, and exams simple and efficient. Its range of features, including customization options, analytics, and group exam chat, makes it an ideal tool for educators, businesses, and anyone else who needs to create and manage forms and quizzes. <br/>

![alt text](https://github.com/shivam6862/Quiz-App/blob/master/Frontend/public/QuizApp.png).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

FormFrenzy - [@shivam-kumar](https://www.linkedin.com/in/shivam-kumar-14701b249/)

Project Link: [https://github.com/shivam6862/Quiz-App](https://github.com/shivam6862/Quiz-App)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [MongoDb](https://www.mongodb.com/)
- [Firebase](https://console.firebase.google.com/)

* []() Finally, kudos to the team for the great work `shivam6862`
<p align="right">(<a href="#readme-top">back to top</a>)</p>

[react-url]: https://reactjs.org/

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[NodeJs-url]: https://nodejs.org/en
[Mongodb-url]:https://www.mongodb.com/
[VisualStudioCode-url]: https://code.visualstudio.com/
