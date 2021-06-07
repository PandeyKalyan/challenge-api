# Challenge API

Challenge API is an API for creating challenges, answering the challenges, and upvoting/downvoting the answers. Written in NodeJS

## Prerequisites

You need to have node and npm installed.

## Up and Running
```console
foo@bar:~$ git clone https://github.com/PandeyKalyan/challenge-api.git
foo@bar:~$ cd challenge-api/
foo@bar:~/challenge-api$ npm install
foo@bar:~/challenge-api$ npm start
```
You will need to configure .env file at the root of the project to configure. Sample .env file can be as follows:
```console
JWT_SECRET = your_jwt_secret
DATABASE = db_url
```
The server should be running locally then...

## EndPoints

The endpoints provided by the API are as follows:

### Auth APIs

#### Sign Up

* **URL**

  /api/signup

* **Method:**
  
  POST
  
*  **Body Params**

   ```javascript
    {
    "name": "John Doe",
    "email": "john@doe.com",
    "password": "john_doe"
    }
    ```

* **Success Response:**
  ```javascript
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlNDJmOWUzNGE5MDAwNDg4Y2Y0OGEiLCJpYXQiOjE2MjMwODE3MjF9.trVpzFcjgk4_TJOeh-TutXWctkXPaqvNyozZBjBp1Y4",
    "_id": "",
    "email": "john@sdoe.com",
    "name": "John Doe"
    }
    ```
  Thus obtained api token will be used in the subsequent requests to authenticate the user.

#### Sign In

* **URL**

  /api/signin

* **Method:**
  
  POST
  
*  **Body Params**

   ```javascript
    {
    "email": "john@doe.com",
    "password": "john_doe"
    }
    ```

* **Success Response:**
  ```javascript
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlNDJmOWUzNGE5MDAwNDg4Y2Y0OGEiLCJpYXQiOjE2MjMwODE3MjF9.trVpzFcjgk4_TJOeh-TutXWctkXPaqvNyozZBjBp1Y4",
    "_id": "",
    "email": "john@sdoe.com",
    "name": "John Doe"
    }
    ```
  Thus obtained auth token will be used in the subsequent requests to authenticate the user.

#### Sign Out

* **URL**

  /api/signout

* **Method:**
  
  GET
  

* **Success Response:**
  ```javascript
    {
    "message": "Signout success"
    }
    ```

### Challenge APIs

#### Create a Challenge

* **URL**

  /api/challenge/create

* **Method:**
  
  POST
  
*  **Body Params**

   ```javascript
    {
    "name": "A Prisoners dilemma",
    "description": "A logic based IQ Problem",
    "category": "IQ",
    "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
    "difficulty": "easy"
    }
    ```
    This is a protected route, so users will need an auth token to access this API
* **Success Response:**
  ```javascript
    {
    "difficulty": "easy",
    "answers": [],
    "_id": "60be4813dac4c72b02831400",
    "name": "A Prisoners dilemma",
    "description": "A logic based IQ Problem",
    "category": "IQ",
    "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
    "created_by": "60ae67908d71b570cf119659",
    "createdAt": "2021-06-07T16:23:47.641Z",
    "updatedAt": "2021-06-07T16:23:47.641Z",
    "__v": 0
    }
    ```

#### List All Challenges

* **URL**

  /api/challenges

* **Method:**
  
  GET

* **Success Response:**
    <details>
    <summary>Sample Response</summary>

    ```javascript
        [
    {
        "difficulty": "easy",
        "answers": [
            {
                "upvotes": 71,
                "downvotes": 19,
                "_id": "60b4ea0b4ca6fbab58eb02eb",
                "answer": "first answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T13:52:11.746Z",
                "updatedAt": "2021-06-01T19:44:27.531Z",
                "__v": 0
            },
            {
                "upvotes": 22,
                "downvotes": 0,
                "_id": "60b4ea7b4ca6fbab58eb02ec",
                "answer": "this is second answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T13:54:03.360Z",
                "updatedAt": "2021-06-02T17:46:43.158Z",
                "__v": 0
            },
            {
                "upvotes": 3,
                "downvotes": 0,
                "_id": "60b4eb214ca6fbab58eb02ee",
                "answer": "third one",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T13:56:49.516Z",
                "updatedAt": "2021-06-02T17:46:46.822Z",
                "__v": 0
            },
            {
                "upvotes": 1,
                "downvotes": 0,
                "_id": "60b4eb5e4ca6fbab58eb02ef",
                "answer": "fourth one",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T13:57:50.105Z",
                "updatedAt": "2021-05-31T14:26:02.111Z",
                "__v": 0
            },
            {
                "upvotes": 29,
                "downvotes": 1,
                "_id": "60b4ebc54ca6fbab58eb02f0",
                "answer": "haha!! fifth one",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T13:59:33.975Z",
                "updatedAt": "2021-06-02T06:27:51.010Z",
                "__v": 0
            },
            {
                "upvotes": 2,
                "downvotes": 0,
                "_id": "60b4f20c4ca6fbab58eb02f4",
                "answer": "haha!! on point",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T14:26:20.364Z",
                "updatedAt": "2021-06-01T06:09:45.147Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b724efb249700061b80eb4",
                "answer": "Adding answer here\n",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:27:59.925Z",
                "updatedAt": "2021-06-02T06:27:59.925Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b725153bed33004f9d7352",
                "answer": "add",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:28:37.423Z",
                "updatedAt": "2021-06-02T06:28:37.423Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b72519b4767c004444c45a",
                "answer": "anoither",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:28:41.386Z",
                "updatedAt": "2021-06-02T06:28:41.386Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7251e3e79b20056303992",
                "answer": "answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:28:46.147Z",
                "updatedAt": "2021-06-02T06:28:46.147Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7252234c77f0027b1c7ac",
                "answer": "to",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:28:50.015Z",
                "updatedAt": "2021-06-02T06:28:50.015Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 1,
                "_id": "60b725253a529c0039002762",
                "answer": "this",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:28:53.263Z",
                "updatedAt": "2021-06-05T14:29:25.696Z",
                "__v": 0
            },
            {
                "upvotes": 37,
                "downvotes": 0,
                "_id": "60bb8a4edc9ea20039ce8306",
                "answer": "bollocks\n",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-05T14:29:34.642Z",
                "updatedAt": "2021-06-07T08:39:23.788Z",
                "__v": 0
            },
            {
                "upvotes": 8,
                "downvotes": 0,
                "_id": "60bddb2139e94e0039ab6589",
                "answer": "kdsjkasjdkasjdkascadn",
                "answered_by": "60bddb16975a8d0020cc35ad",
                "createdAt": "2021-06-07T08:38:57.733Z",
                "updatedAt": "2021-06-07T08:39:03.517Z",
                "__v": 0
            }
        ],
        "_id": "60b1229269e7e13f04a7a17b",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-28T17:04:18.138Z",
        "updatedAt": "2021-06-07T08:38:57.759Z",
        "__v": 0
    },
    {
        "difficulty": "medium",
        "answers": [
            {
                "upvotes": 7,
                "downvotes": 0,
                "_id": "60b4ebf54ca6fbab58eb02f3",
                "answer": "first for this",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T14:00:21.073Z",
                "updatedAt": "2021-05-31T14:25:52.758Z",
                "__v": 0
            }
        ],
        "_id": "60b1229a69e7e13f04a7a17c",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-28T17:04:26.456Z",
        "updatedAt": "2021-05-31T14:00:21.399Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b122ed69e7e13f04a7a17e",
                "answer": "This is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-28T17:05:49.591Z",
                "updatedAt": "2021-05-28T17:05:49.591Z",
                "__v": 0
            },
            {
                "upvotes": 3,
                "downvotes": 0,
                "_id": "60b122f469e7e13f04a7a17f",
                "answer": "This is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-28T17:05:56.717Z",
                "updatedAt": "2021-05-31T14:24:22.074Z",
                "__v": 0
            },
            {
                "upvotes": 4,
                "downvotes": 0,
                "_id": "60b122f669e7e13f04a7a180",
                "answer": "This is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-28T17:05:58.276Z",
                "updatedAt": "2021-05-31T14:24:25.065Z",
                "__v": 0
            },
            {
                "upvotes": 3,
                "downvotes": 0,
                "_id": "60b122f769e7e13f04a7a181",
                "answer": "This is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-28T17:05:59.774Z",
                "updatedAt": "2021-05-31T14:24:29.198Z",
                "__v": 0
            },
            {
                "upvotes": 7,
                "downvotes": 0,
                "_id": "60b122f969e7e13f04a7a182",
                "answer": "This is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-28T17:06:01.182Z",
                "updatedAt": "2021-05-31T14:24:31.143Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b122fa69e7e13f04a7a183",
                "answer": "This is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-28T17:06:02.418Z",
                "updatedAt": "2021-05-28T17:06:02.418Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b4a4fd4ca6fbab58eb02e9",
                "answer": "This is a bloody good answer. This is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T08:57:33.616Z",
                "updatedAt": "2021-05-31T08:57:33.616Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b4a5004ca6fbab58eb02ea",
                "answer": "This is a bloody good answer. This is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answerThis is a bloody good answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T08:57:36.493Z",
                "updatedAt": "2021-05-31T08:57:36.493Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b4eac94ca6fbab58eb02ed",
                "answer": "another answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T13:55:21.544Z",
                "updatedAt": "2021-05-31T13:55:21.544Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b72546b4767c004444c45c",
                "answer": "a",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:26.426Z",
                "updatedAt": "2021-06-02T06:29:26.426Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b72548b249700061b80eb5",
                "answer": "a",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:28.710Z",
                "updatedAt": "2021-06-02T06:29:28.710Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7254a3e79b20056303994",
                "answer": "sdsd",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:30.546Z",
                "updatedAt": "2021-06-02T06:29:30.546Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7254c713442002edafd33",
                "answer": "dsdsadsad",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:33.003Z",
                "updatedAt": "2021-06-02T06:29:33.003Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7254f3a529c0039002763",
                "answer": "dsds",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:35.039Z",
                "updatedAt": "2021-06-02T06:29:35.039Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b725513624140020367808",
                "answer": "dsadsa",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:37.961Z",
                "updatedAt": "2021-06-02T06:29:37.961Z",
                "__v": 0
            }
        ],
        "_id": "60b122a169e7e13f04a7a17d",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-28T17:04:33.350Z",
        "updatedAt": "2021-06-02T06:29:37.989Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b529188fcc15fdb657f023",
                "answer": "here is your answer",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T18:21:12.421Z",
                "updatedAt": "2021-05-31T18:21:12.421Z",
                "__v": 0
            }
        ],
        "_id": "60b5272a8fcc15fdb657f01a",
        "name": "Test",
        "description": "test",
        "question": "what is the answer for test?",
        "category": "Physics",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:12:58.666Z",
        "updatedAt": "2021-05-31T18:21:12.891Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b5279a8fcc15fdb657f01b",
        "name": "sdasdj",
        "description": "sdakdl",
        "question": "dlsakdflasc askdjaskjdkas",
        "category": "kjdsakjd",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:14:50.743Z",
        "updatedAt": "2021-05-31T18:14:50.743Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [
            {
                "upvotes": 8,
                "downvotes": 0,
                "_id": "60b528668fcc15fdb657f020",
                "answer": "dffdsfsd",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T18:18:14.893Z",
                "updatedAt": "2021-05-31T18:18:24.034Z",
                "__v": 0
            },
            {
                "upvotes": 6,
                "downvotes": 0,
                "_id": "60b5286b8fcc15fdb657f021",
                "answer": "ckjkajdskasjd\n",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-05-31T18:18:19.975Z",
                "updatedAt": "2021-05-31T18:18:28.557Z",
                "__v": 0
            }
        ],
        "_id": "60b527ce8fcc15fdb657f01c",
        "name": "dsadcakdj dskajdkas",
        "description": "kjdskajdka ",
        "question": "kjdsakdjkasjdkjas",
        "category": "kjsdkajdkjakj",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:15:42.399Z",
        "updatedAt": "2021-05-31T18:18:20.327Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [],
        "_id": "60b528118fcc15fdb657f01d",
        "name": "dsadsa",
        "description": "dsacxsd",
        "question": "dsadasdsa",
        "category": "dasdad",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:16:49.573Z",
        "updatedAt": "2021-05-31T18:16:49.573Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [],
        "_id": "60b5281e8fcc15fdb657f01e",
        "name": "dsadsa",
        "description": "dsacxsd",
        "question": "dsadasdsa",
        "category": "dasdad",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:17:02.410Z",
        "updatedAt": "2021-05-31T18:17:02.410Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b67c9936a6ba8091ca3867",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:29:45.549Z",
        "updatedAt": "2021-06-01T18:29:45.549Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b67c9b36a6ba8091ca3868",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:29:47.078Z",
        "updatedAt": "2021-06-01T18:29:47.078Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b67c9c36a6ba8091ca3869",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:29:48.189Z",
        "updatedAt": "2021-06-01T18:29:48.189Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b67c9d36a6ba8091ca386a",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:29:49.262Z",
        "updatedAt": "2021-06-01T18:29:49.262Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b680f53232ca0d83a9dd4d",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:48:21.782Z",
        "updatedAt": "2021-06-01T18:48:21.782Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7252c3bed33004f9d7353",
                "answer": "and\n",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:00.708Z",
                "updatedAt": "2021-06-02T06:29:00.708Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b7252fb4767c004444c45b",
                "answer": "to",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:03.884Z",
                "updatedAt": "2021-06-02T06:29:03.884Z",
                "__v": 0
            },
            {
                "upvotes": 0,
                "downvotes": 0,
                "_id": "60b725343e79b20056303993",
                "answer": "this",
                "answered_by": "60b121ca69e7e13f04a7a17a",
                "createdAt": "2021-06-02T06:29:08.341Z",
                "updatedAt": "2021-06-02T06:29:08.341Z",
                "__v": 0
            }
        ],
        "_id": "60b681b744ad870ea2ee3694",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:51:35.341Z",
        "updatedAt": "2021-06-02T06:29:08.350Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [
            {
                "upvotes": 57,
                "downvotes": 0,
                "_id": "60bddb7d975a8d0020cc35ae",
                "answer": "skjdkasjdksa\n",
                "answered_by": "60bddb16975a8d0020cc35ad",
                "createdAt": "2021-06-07T08:40:29.037Z",
                "updatedAt": "2021-06-07T08:41:02.904Z",
                "__v": 0
            },
            {
                "upvotes": 55,
                "downvotes": 1,
                "_id": "60bddb80b241d50027fb08a5",
                "answer": "dasndkasjfk",
                "answered_by": "60bddb16975a8d0020cc35ad",
                "createdAt": "2021-06-07T08:40:32.777Z",
                "updatedAt": "2021-06-07T08:41:09.017Z",
                "__v": 0
            }
        ],
        "_id": "60bddb72677a83004bf328c6",
        "name": "skjdkasj",
        "description": "jsjdhasjdbh",
        "question": "Question?",
        "category": "hello",
        "created_by": "60bddb16975a8d0020cc35ad",
        "createdAt": "2021-06-07T08:40:18.537Z",
        "updatedAt": "2021-06-07T08:40:32.791Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [],
        "_id": "60be4813dac4c72b02831400",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60ae67908d71b570cf119659",
        "createdAt": "2021-06-07T16:23:47.641Z",
        "updatedAt": "2021-06-07T16:23:47.641Z",
        "__v": 0
    }
    ]
    ```
    This is a protected route, so users will need an auth token to access this API.
    </details>

#### Top Ten Challenges of the week

    These are the challanges sorted by those which have received the most answer

* **URL**

  /api/challenge/top

* **Method:**

  GET
  
* **Success Response:**
    <details>
    <summary>Sample Response</summary>

  ```javascript
    [
    {
        "difficulty": "hard",
        "answers": [
            "60b122ed69e7e13f04a7a17e",
            "60b122f469e7e13f04a7a17f",
            "60b122f669e7e13f04a7a180",
            "60b122f769e7e13f04a7a181",
            "60b122f969e7e13f04a7a182",
            "60b122fa69e7e13f04a7a183",
            "60b4a4fd4ca6fbab58eb02e9",
            "60b4a5004ca6fbab58eb02ea",
            "60b4eac94ca6fbab58eb02ed",
            "60b72546b4767c004444c45c",
            "60b72548b249700061b80eb5",
            "60b7254a3e79b20056303994",
            "60b7254c713442002edafd33",
            "60b7254f3a529c0039002763",
            "60b725513624140020367808"
        ],
        "_id": "60b122a169e7e13f04a7a17d",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-28T17:04:33.350Z",
        "updatedAt": "2021-06-02T06:29:37.989Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [
            "60b4ea0b4ca6fbab58eb02eb",
            "60b4ea7b4ca6fbab58eb02ec",
            "60b4eb214ca6fbab58eb02ee",
            "60b4eb5e4ca6fbab58eb02ef",
            "60b4ebc54ca6fbab58eb02f0",
            "60b4f20c4ca6fbab58eb02f4",
            "60b724efb249700061b80eb4",
            "60b725153bed33004f9d7352",
            "60b72519b4767c004444c45a",
            "60b7251e3e79b20056303992",
            "60b7252234c77f0027b1c7ac",
            "60b725253a529c0039002762",
            "60bb8a4edc9ea20039ce8306",
            "60bddb2139e94e0039ab6589"
        ],
        "_id": "60b1229269e7e13f04a7a17b",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-28T17:04:18.138Z",
        "updatedAt": "2021-06-07T08:38:57.759Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [
            "60b7252c3bed33004f9d7353",
            "60b7252fb4767c004444c45b",
            "60b725343e79b20056303993"
        ],
        "_id": "60b681b744ad870ea2ee3694",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:51:35.341Z",
        "updatedAt": "2021-06-02T06:29:08.350Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [
            "60bddb7d975a8d0020cc35ae",
            "60bddb80b241d50027fb08a5"
        ],
        "_id": "60bddb72677a83004bf328c6",
        "name": "skjdkasj",
        "description": "jsjdhasjdbh",
        "question": "Question?",
        "category": "hello",
        "created_by": "60bddb16975a8d0020cc35ad",
        "createdAt": "2021-06-07T08:40:18.537Z",
        "updatedAt": "2021-06-07T08:40:32.791Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [
            "60b528668fcc15fdb657f020",
            "60b5286b8fcc15fdb657f021"
        ],
        "_id": "60b527ce8fcc15fdb657f01c",
        "name": "dsadcakdj dskajdkas",
        "description": "kjdskajdka ",
        "question": "kjdsakdjkasjdkjas",
        "category": "kjsdkajdkjakj",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:15:42.399Z",
        "updatedAt": "2021-05-31T18:18:20.327Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [
            "60b529188fcc15fdb657f023"
        ],
        "_id": "60b5272a8fcc15fdb657f01a",
        "name": "Test",
        "description": "test",
        "question": "what is the answer for test?",
        "category": "Physics",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:12:58.666Z",
        "updatedAt": "2021-05-31T18:21:12.891Z",
        "__v": 0
    },
    {
        "difficulty": "medium",
        "answers": [
            "60b4ebf54ca6fbab58eb02f3"
        ],
        "_id": "60b1229a69e7e13f04a7a17c",
        "name": "A Prisoners dilemma",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-28T17:04:26.456Z",
        "updatedAt": "2021-05-31T14:00:21.399Z",
        "__v": 0
    },
    {
        "difficulty": "easy",
        "answers": [],
        "_id": "60b5281e8fcc15fdb657f01e",
        "name": "dsadsa",
        "description": "dsacxsd",
        "question": "dsadasdsa",
        "category": "dasdad",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:17:02.410Z",
        "updatedAt": "2021-05-31T18:17:02.410Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b67c9936a6ba8091ca3867",
        "name": "A Prisoners dilemma By Joe",
        "description": "A logic based IQ Problem",
        "category": "IQ",
        "question": "Two prisoners, one always lies and the other always tells the truth. How do they escape?",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-06-01T18:29:45.549Z",
        "updatedAt": "2021-06-01T18:29:45.549Z",
        "__v": 0
    },
    {
        "difficulty": "hard",
        "answers": [],
        "_id": "60b5279a8fcc15fdb657f01b",
        "name": "sdasdj",
        "description": "sdakdl",
        "question": "dlsakdflasc askdjaskjdkas",
        "category": "kjdsakjd",
        "created_by": "60b121ca69e7e13f04a7a17a",
        "createdAt": "2021-05-31T18:14:50.743Z",
        "updatedAt": "2021-05-31T18:14:50.743Z",
        "__v": 0
    }
    ]
    ```
    </details>
  The top ten challenges are calculated on weekly basis. A cron job is run and this job will update the database.

### Answer Apis

#### Add an answer

* **URL**

  /api/answer/

* **Method:**
  
  POST
  
*  **Body Params**

   ```javascript
    {
    "answer": "This is a bloody good answer",
    "challenge_id": "60b122a169e7e13f04a7a17d"
    }
    ```

* **Success Response:**
  ```javascript
    {
    "upvotes": 0,
    "downvotes": 0,
    "_id": "60be50c6dac4c72b02831401",
    "answer": "This is a bloody good answer",
    "answered_by": "60b106393c7c772807cbf652",
    "createdAt": "2021-06-07T17:00:54.288Z",
    "updatedAt": "2021-06-07T17:00:54.288Z",
    "__v": 0
    }
    ```
  This is a protected route. So an authorization token will be needed.

#### Upvote Answer

* **URL**

  /api/answer/:answer_id/upvote

* **Method:**
  
  POST

* **Success Response:**
  ```javascript
    {
    "upvotes": 1,
    "downvotes": 0,
    "_id": "60be50c6dac4c72b02831401",
    "answer": "This is a bloody good answer",
    "answered_by": "60b106393c7c772807cbf652",
    "createdAt": "2021-06-07T17:00:54.288Z",
    "updatedAt": "2021-06-07T17:03:43.418Z",
    "__v": 0
    }
    ```
  In the background, the user, who answered the question, will also have his/her upvote count incremented atomically.

#### Downvote Answer

* **URL**

  /api/answer/:answer_id/downvote

* **Method:**
  
  POST
  

* **Success Response:**
  ```javascript
    {
    "upvotes": 1,
    "downvotes": 1,
    "_id": "60be50c6dac4c72b02831401",
    "answer": "This is a bloody good answer",
    "answered_by": "60b106393c7c772807cbf652",
    "createdAt": "2021-06-07T17:00:54.288Z",
    "updatedAt": "2021-06-07T17:08:48.542Z",
    "__v": 0
    }
    ```
    Only the user who have reached level 10 can downvote an answer.

### User Apis

#### User Profile

* **URL**

  /api/profile

* **Method:**
  
  GET

* **Success Response:**
  ```javascript
    {
    "_id": "60b121ca69e7e13f04a7a17a",
    "upvotes": 221,
    "downvotes": 28,
    "name": "John Doe",
    "email": "john@doe.com",
    "createdAt": "2021-05-28T17:00:58.911Z",
    "updatedAt": "2021-06-07T08:39:23.804Z",
    "__v": 0,
    "level": 17
    }
    ```
  User's level is calculated as: level = Math.floor(upvotes/10) - Math.floor(downvotes/5)
  
The API is hosted in heroku cloud and the link is:
https://blooming-sea-62499.herokuapp.com


