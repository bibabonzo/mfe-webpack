# Microfrontend POC

## Description:
This POC uses Webpack's Module Federation Plugin to from a single application out of multiple separate builds.
These separate builds do not have dependencies between each other, so they can be developed and deployed individually.
AWS (S3 & Cloudfront) is used to deploy the builds. The deployed application can be viewed [here](https://d1yf8j1tahegnw.cloudfront.net/). 


## Architecture Overview
![architecture_overview](https://github.com/bibabonzo/mfe/blob/a80ea157a69cb15055e1dec034a0c9c1a3309f7c/mfe_architektur.png)