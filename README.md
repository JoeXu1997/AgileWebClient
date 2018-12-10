# Assignment 2 - Vue app - Automated development process.

Name: YUE XU

Student No.:  20082476

## Overview.

The client used for testing here mainly includes several functions: login and login verification, movie poster rotation, movie  information management(CRUD).

github: https://github.com/JoeXu1997/AgileWebClient

## E2E Testing.

     $ npx cypress run --spec cypress/integration/editDeleteMovie.spec.js

Ouput result:

  Running: editDeleteMovie.spec.js...                                  (1 of 1) 


  Manage Movie Page
    ✓ allows a movie to be edited (10683ms)
    ✓ allows a movie to be deleted (5488ms)


  2 passing (17s)


  (Results)

  ┌───────────────────────────────────────┐
  │ Tests:        2                       │
  │ Passing:      2                       │
  │ Failing:      0                       │
  │ Pending:      0                       │
  │ Skipped:      0                       │
  │ Screenshots:  0                       │
  │ Video:        true                    │
  │ Duration:     16 seconds              │
  │ Spec Ran:     editDeleteMovie.spec.js │
  └───────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/xuyue/Desktop/Agile/MovieClient/cypress/videos/editDeleteMovie.spec.js.mp4 (6 seconds)


================================================================================

  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Skip… 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ ✔ editDeleteMovie.spec.js         00:16      2      2      -      -      - │
  └────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                 00:16      2      2      -      -      -  

## Continuous Integration.

https://travis-ci.org/JoeXu1997/AgileWebClient

Because I cannot deploy my server side to heroku due to some unreasonable factor, so one of the cypress test cannot connect to my database, as a result, that cypress auto-test would fail. However, I have actually deployed vue app to travis and surge.

## Automated Deployment.

http://mymovie.surge.sh/#/

## Extra features.

The login authentication is realized by Firebase.

## Appendix.

     $ npx cypress run

Output:
================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:  3.1.3                                                            │
  │ Browser:  Electron 59 (headless)                                           │
  │ Specs:    5 found (addMovie.spec.js, editDeleteMovie.spec.js, homepage.sp… │
  └────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────
                                                                                
  Running: addMovie.spec.js...                                         (1 of 5) 


  Add New Movie
    ✓ allows a valid movie to be submitted (7951ms)
    ✓ shows error messages for incomplete form fields (4362ms)


  2 passing (13s)


  (Results)

  ┌────────────────────────────────┐
  │ Tests:        2                │
  │ Passing:      2                │
  │ Failing:      0                │
  │ Pending:      0                │
  │ Skipped:      0                │
  │ Screenshots:  0                │
  │ Video:        true             │
  │ Duration:     12 seconds       │
  │ Spec Ran:     addMovie.spec.js │
  └────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/xuyue/Desktop/Agile/MovieClient/cypress/videos/addMovie.spec.js.mp4 (4 seconds)


────────────────────────────────────────────────────────────────────────────────
                                                                                
  Running: editDeleteMovie.spec.js...                                  (2 of 5) 


  Manage Movie Page
    ✓ allows a movie to be edited (12539ms)
    ✓ allows a movie to be deleted (4742ms)


  2 passing (18s)


  (Results)

  ┌───────────────────────────────────────┐
  │ Tests:        2                       │
  │ Passing:      2                       │
  │ Failing:      0                       │
  │ Pending:      0                       │
  │ Skipped:      0                       │
  │ Screenshots:  0                       │
  │ Video:        true                    │
  │ Duration:     17 seconds              │
  │ Spec Ran:     editDeleteMovie.spec.js │
  └───────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/xuyue/Desktop/Agile/MovieClient/cypress/videos/editDeleteMovie.spec.js.mp4 (5 seconds)


────────────────────────────────────────────────────────────────────────────────
                                                                                
  Running: homepage.spec.js...                                         (3 of 5) 


  Home page
    ✓ Shows a header (6282ms)
    Navigation bar
      ✓ Shows the required links (2223ms)
      ✓ Redirects when links are clicked (1286ms)


  3 passing (10s)


  (Results)

  ┌────────────────────────────────┐
  │ Tests:        3                │
  │ Passing:      3                │
  │ Failing:      0                │
  │ Pending:      0                │
  │ Skipped:      0                │
  │ Screenshots:  0                │
  │ Video:        true             │
  │ Duration:     9 seconds        │
  │ Spec Ran:     homepage.spec.js │
  └────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/xuyue/Desktop/Agile/MovieClient/cypress/videos/homepage.spec.js.mp4 (3 seconds)


────────────────────────────────────────────────────────────────────────────────
                                                                                
  Running: login.spec.js...                                            (4 of 5) 


  Login page
    ✓ Shows a header (10215ms)
    Login
      ✓ should login successfully and could access logout page (4008ms)
      ✓ should failed login if username and pw are invalid (1822ms)


  3 passing (16s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        3             │
  │ Passing:      3             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     16 seconds    │
  │ Spec Ran:     login.spec.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/xuyue/Desktop/Agile/MovieClient/cypress/videos/login.spec.js.mp4 (4 seconds)


────────────────────────────────────────────────────────────────────────────────
                                                                                
  Running: slide.spec.js...                                            (5 of 5) 


  Slide page
    ✓ Shows a header (9802ms)
    ✓ should change pictures (3160ms)
    ✓ should turn to comment page (3490ms)


  3 passing (17s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        3             │
  │ Passing:      3             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     17 seconds    │
  │ Spec Ran:     slide.spec.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  /Users/xuyue/Desktop/Agile/MovieClient/cypress/videos/slide.spec.js.mp4 (4 seconds)


================================================================================

  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Skip… 
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ ✔ addMovie.spec.js                00:12      2      2      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ ✔ editDeleteMovie.spec.js         00:17      2      2      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ ✔ homepage.spec.js                00:09      3      3      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ ✔ login.spec.js                   00:16      3      3      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ ✔ slide.spec.js                   00:17      3      3      -      -      - │
  └────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                 01:13     13     13      -      -      -  

