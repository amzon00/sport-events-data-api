# Interview Task: Node.js Developer

Your task is to create a simple Node.js project that processes the provided JSON data, simulates data retrieval from an API, caches the data to avoid redundant fetches, and exposes a few routes using Express.js to provide access to the processed data.

## Requirements

### 1. Project Setup:

- Create a new Node.js project from scratch.
- Use folder structure that would make sense in this particular use case, think about how you would approach the setup if the project was bigger.

### 2. Data Retrieval:

- For this exercise, we've provided a folder containing JSON files with some sample data. In a real-world scenario, this data would be fetched from an API. Your task is to load this data and store it in a way that simulates retrieving it from an API.

### 3. Data Caching:

- Implement a caching mechanism to ensure that if the data has already been retrieved, it shouldn't be fetched again.
- Discuss the caching strategy you chose and its pros and cons.

### 4. Routing with Express.js:

- Create a simple Express.js server.
- Implement the following routes:
  - `/events`: returns all events.
  - `/events/:id`: returns a specific event by ID.
  - `/events/stage/:stage`: returns all events of a specific stage (e.g. `Finished`).
- Handle errors and edge cases appropriately.

### 5. Data Transformation:

- When you are implementing the end points, they should format the data in to a more simplified format for the client to absorb and display. (You are not supposed to make a client, no this is not a challenge)
- Discuss your approach and reasoning.

### 6. Code Organization:

- Organize your code into different modules based on functionality.
- Explain your chosen project structure and why it is effective.

### 7. Testing (Optional):

- Write a few unit tests for your code using a testing library of your choice.
- Discuss your approach to testing in your projects.

## Submission

Please submit your project as a zip file or a link to a GitHub repository. In your submission, include all the code you wrote and any documentation or comments you think are relevant. Also, prepare to discuss your thought process, decisions, and approach to this task during the interview.

## Evaluation Criteria

We will evaluate your submission based on the following criteria:

- Code organization and structure.
- Implementation of caching and routing.
- Handling of errors and edge cases.
- Data transformation logic.
- (Optional) Unit tests and testing approach.
- Explanation of decisions and thought process.

Please note that we are more interested in your problem-solving skills and thought process than the specific syntax or libraries you use.
