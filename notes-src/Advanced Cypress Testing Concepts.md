# Advanced Cypress Testing Concepts

- Database Initialization & Seeding

```jsx
// generateSeedUsers.js

import path from "path"
import fs from "fs"
import shortid from "shortid"
import faker from "faker"
import bcrypt from "bcryptjs"
import { times } from "lodash"

const passwordHash = bcrypt.hashSync("s3cret", 10)

const createFakeUser = () => ({
  id: shortid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  password: passwordHash,
  email: faker.internet.email(),
  createdAt: faker.date.past(),
  modifiedAt: faker.date.recent(),
})

export const createSeedUsers = (numberOfUsers) =>
  times(numberOfUsers, () => createFakeUser())

export const saveUsersSeed = (numberOfUsers) => {
  const seedUsers = createSeedUsers(numberOfUsers)
  // write seed users to seedUsers.json
  fs.writeFile(path.join(process.cwd(), "seedUsers.json"), seedUsers)
}
```

- Running Cypress in Continuous Integration (CI)
Cypress's most essential and powerful use cases is having it run in your CI/CD pipeline. This way, every time you make a change to your codebase, your CI Pipeline will automatically run all of your Cypress tests to ensure that nothing has broken in your application.
To Setup with github actions:

[GitHub Actions | Cypress Documentation](https://docs.cypress.io/guides/continuous-integration/github-actions)

- Intercepting Network Requests : [https://learn.cypress.io/advanced-cypress-concepts/intercepting-network-requests](https://learn.cypress.io/advanced-cypress-concepts/intercepting-network-requests)
- Building Cypress Commands: [https://learn.cypress.io/advanced-cypress-concepts/building-the-right-cypress-commands](https://learn.cypress.io/advanced-cypress-concepts/building-the-right-cypress-commands)
- Viewport and Browser Testing Tips: [https://learn.cypress.io/advanced-cypress-concepts/how-to-test-various-browsers-and-viewports](https://learn.cypress.io/advanced-cypress-concepts/how-to-test-various-browsers-and-viewports)
- Cypress Methods You Need to Know: (its, invoke, request, within) [https://learn.cypress.io/advanced-cypress-concepts/important-cypress-methods-you-need-to-know](https://learn.cypress.io/advanced-cypress-concepts/important-cypress-methods-you-need-to-know)
- Using Data to Build Dynamic Tests: using variables, fixtures, or data from a database to construct all aspects of a dynamic test ([https://learn.cypress.io/advanced-cypress-concepts/using-data-to-build-dynamic-tests](https://learn.cypress.io/advanced-cypress-concepts/using-data-to-build-dynamic-tests))