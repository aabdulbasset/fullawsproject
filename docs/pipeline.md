## Pipeline Documentation

- CircleCI is triggered on a push to the repo
- ~~EB s3 bucket MUST be empty due to permission issues~~ **Fixed** !
- Following ENV variables must be present in CircleCI project settings
    ```
    POSTGRES_HOST
    PORT
    POSTGRES_DB
    POSTGRES_PASSWORD
    POSTGRES_USERNAME
    AWS_REGION
    AWS_PROFILE
    AWS_BUCKET
    URL
    JWT_SECRET
    AWS_ACCESS_KEY_ID
    AWS_DEFAULT_REGION
    AWS_SECRET_ACCESS_KEY
    ```
![CircleciDia](../screenshots/circleci%20dia.png)