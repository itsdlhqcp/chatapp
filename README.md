# Open Chat Application

Welcome to the React Chat Application! This project showcases the power of ReactJS, Material UI, JavaScript, SCSS, HTML, Node.js and Firebase in building a modern and engaging chatting platform.

This is open stream  web chatting application where anyone can participate in chat
some section of this apk is depresitaed with a hidden api for security reasons
please contact administrator for any help.

## Features:

- ***Multi-Media Messaging:*** Send and receive messages containing videos, audios, images, and text effortlessly.
- ***Content Interaction:*** Like and fire content to express appreciation or enthusiasm.
- ***Content Deletion:*** Remove messages and media for better control over your conversations.
- ***Social Signup Integration:*** Seamlessly integrate Google and Facebook signup methods, boosting user engagement by 20%.

## Technologies Used:

- ***ReactJS:*** Frontend development for creating dynamic and interactive user interfaces.
- ***Material UI:*** Design system and components library for building elegant UIs.
- ***JavaScript:*** Programming language for adding functionality and interactivity.
- ***SCSS:*** Styling language for enhancing the visual appeal of components.
- ***HTML:*** Markup language for structuring the user interface.
- ***Node.js:*** Backend server runtime for handling server-side logic.
- ***RestAPI:*** Interface for communication between the frontend and backend.
- ***Firebase:*** Cloud-based platform for real-time database and authentication services.

## Installation

1. **Clone the Repository:**
   ```
   git clone https://github.com/itsdlhqcp/chatapp/
   cd chatapp
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `server` directory.
     such as firbase id, datastore id, secret ids.
     
4. **Add firebase rules:**
   - Create a `.env` file in the `server` directory.
   ```
          {
        "rules": {
          "profiles":{
            "$user_id":{
              ".read": "$user_id === auth.uid",
              ".write": "$user_id === auth.uid"
            }
          },
            "rooms":{
              ".read": "auth !== null",
            "$room_id":{
              ".read": "auth !== null",
                ".write": "!data.exists() || data.child('admins').child(auth.uid).val() == true",
                  "lastMessage": {
                    ".write": "auth !== null"
                  }
               
            }
          },
            "messages":{
              ".read": "auth !== null",
              ".write": "auth !== null",
              ".indexOn": "roomId",
              "$message_id":{
              ".read": "auth !== null",
              ".write": "auth !== null"
            }
          },
            "status":{
              "$user_id":{
               ".read": "auth !== null",
              ".write": "$user_id === auth.uid"
            }
          },
            "fcm_tokens":{
              "$token_id":{
               ".read": false,
              ".write": "newData.val() === auth.uid"
            }
          },
          ".read": false,
          ".write":false
        }
      }
   ```
   
5. **Run the Application:**
   - In the `server` directory, run:
     ```
     npm install
     ```
   - In the `client` directory, run:
     ```
     npm start
     ```



Getting Started:
Explore the codebase to understand how various features are implemented.
Experiment with different functionalities and customize the application to fit your requirements.
Utilize the social signup integration feature to enhance user engagement on your platform.

Contributors:

[itsdlhqcp](https://github.com/itsdlhqcp)

Support:
For any inquiries or support, please contact dilhaqued@gmail.com.
