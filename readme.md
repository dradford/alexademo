# Bugcrowd

- Introduce Bugcrowd
  - Breaking Stuff
- Who we are
  - Builders and breakers
- What we do
  - Programming - Building
  - Security - Breaking
- Customers
  - Netflix
  - Etsy
  - Fitbit
  - Square
  - Optimizely
  - Concur
  - Atlassian



# Hackathons

- Two mentalities
  - Here to win
  - Here to learn

- What should I build
  - The simplest thing possible
- How should I build it
  - The quickest way possible
- Time management
  - Front load with setup
    - If you know you're going to build an Alexa skill, spend the first hour configuring your lambda function and training your Alexa skill model

# APIs, Programming and Hacking

- What are APIs
  - Application Programming Interface
    - Use a computer to connect with an application
  - Some are official, some are unofficial
  - Tools
    - Curl
    - Javascript, Python, Ruby
    - Postman  

- How do you connect to an API?
  - Authentication

- How do you use them to hack with


- Bugcrowd APIs
  - VRT
    - https://bugcrowd.com/vulnerability-rating-taxonomy
    - https://raw.githubusercontent.com/bugcrowd/vulnerability-rating-taxonomy/master/vulnerability-rating-taxonomy.json
    - https://github.com/dradford/alexademo/blob/master/scraper/vrt-scraper.js
  - Crowd Control
    - Customer API
    - https://docs.bugcrowd.com/reference
  - Scraping
    - Program Page
      - https://bugcrowd.com/programs
      - https://github.com/dradford/alexademo/blob/master/scraper/program-scraper.js
- Hacking resources
  - https://www.shodan.io/
  - The Bug Hunting Methodology
    - https://github.com/jhaddix/tbhm
    - https://www.youtube.com/watch?v=C4ZHAdI8o1w
    - https://github.com/bugcrowd/HUNT

# Echo Spot and Alexa Skill

- AWS Lambda
  - Create an AWS account - https://portal.aws.amazon.com/billing/signup#/start
    - THEY WILL CALL YOU!!
  - Create a function in Lambda
    - Make sure it's in US East N. Virginia
  - Add template source code
    - https://github.com/Donohue/alexa/blob/master/src/index.js
- Alexa Skill
  - Create an Amazon developer account
  - Skill invocation name: the magic security eight ball
  - Create a test intent:
    - TestIntent what should I hack on today
    - TestIntent consult the magic security eight ball
  - Train the model
  - Configure the endpoint (point it to Lambda, allow the skill ARN)
