# User Data Management App

This is a simple user data management app built with React and Redux. It allows users to create, edit, and delete user data. The application also demonstrates the use of Redux Saga middleware for handling asynchronous actions and Reselect library for creating memoized selectors.

## Live Demo

Click [here](https://maheshnd.github.io/userdata/) to view the live demo of the application.



## Features

- **Create User:** Users can create new user data by entering their first name, last name, and email address.
- **Edit User:** Users can edit existing user data by clicking the "Edit" button next to each user's information. This opens a popup where users can update the user's details.
- **Delete User:** Users can delete user data by clicking the "Delete" button next to each user's information. A confirmation message is displayed before deleting the user.
- **Validation:** The application performs validation on user input fields and displays error messages for invalid input.
- **Persistence:** User data is persisted locally using Redux state management, ensuring that data is preserved even after page refresh.

## Technologies Used

- React.js
- Redux
- Redux Saga
- Reselect
- React Bootstrap

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/maheshnd/userdata.git
   cd userdata
   npm install
   npm start


