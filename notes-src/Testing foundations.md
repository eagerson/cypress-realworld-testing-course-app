# Testing foundations

- Testing mindset
Testing in software development is primarily a mindset. Developers and QA teams have different perspectives, with developers creating and QA breaking. Collaboration is crucial. In Agile, test cases can be part of acceptance criteria in user stories for comprehensive testing.
- Identify what to test
    - User Journeys:
    Prioritize testing critical application parts like login, purchasing, etc., using end-to-end tests covering complete user journeys.
    - New Features:
    Break down new feature goals into testable steps, create tests, and write code accordingly, ensuring safe refactoring.
    - Bugs:
    Write tests replicating bugs, then fix them; passing tests ensure bug prevention.
- manual vs automated testing
Manual testing involves human interaction with an application, which can be time-consuming. In modern software development, automated testing is crucial for frequent deployments. The "shift left" approach means developers are more involved in testing from the start. Test automation is becoming the norm, and resources like Real World Testing with Cypress can help both developers and QA professionals learn automated testing.
- who should be responsible for testing ?
Testing is a collective responsibility in modern software companies. There are three common team structures: dedicated development and QA teams, small interdisciplinary teams with developers and QA engineers, and full-stack solo developers in startups. Regardless of the structure, everyone shares the responsibility for ensuring applications work as intended from the project's outset, promoting reliable, high-quality software.
- the testing pyramid
    
    The testing pyramid categorizes different types of tests and their roles in software testing:
    
    - **Unit Tests:** These serve as the foundation, examining individual units or functions. They focus on expected outputs given specific inputs and are agnostic to the internal function logic, making refactoring easier.
    - **Integration Tests:** Unlike unit tests, integration tests assess how various parts of an application work together. They ensure that system dependencies function correctly but do not isolate components.
    - **Component Tests:** Component tests evaluate isolated user interface elements, such as buttons or input fields. They resemble unit and integration tests but are simpler to set up and execute. However, they have limitations in assessing overall application health.
    - **End-to-End Tests (E2E):** E2E tests simulate real user interactions within a web browser. These tests validate the seamless operation of all application layers, providing insights into the user experience.