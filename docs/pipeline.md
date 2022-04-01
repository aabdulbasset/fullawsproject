## Pipeline Documentation

- CircleCI is triggered on a push to the repo
- EB s3 bucket MUST be empty due to permission issues
- Following ENV variables must be present in CircleCI project settings
    ```
    AWS_ACCESS_KEY_ID
    AWS_DEFAULT_REGION
    AWS_SECRET_ACCESS_KEY
    ```
![CircleciDia](../screenshots/circleci%20dia.png)