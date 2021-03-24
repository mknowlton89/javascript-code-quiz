# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
G̶I̶V̶E̶N̶ I̶ a̶m̶ t̶a̶k̶i̶n̶g̶ a̶ c̶o̶d̶e̶ q̶u̶i̶z̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ t̶h̶e̶ s̶t̶a̶r̶t̶ b̶u̶t̶t̶o̶n̶
T̶H̶E̶N̶ a̶ t̶i̶m̶e̶r̶ s̶t̶a̶r̶t̶s̶ a̶n̶d̶ I̶ a̶m̶ p̶r̶e̶s̶e̶n̶t̶e̶d̶ w̶i̶t̶h̶ a̶ q̶u̶e̶s̶t̶i̶o̶n̶
WH̶E̶N̶ I̶ a̶n̶s̶w̶e̶r̶ a̶ q̶u̶e̶s̶t̶i̶o̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶e̶s̶e̶n̶t̶e̶d̶ w̶i̶t̶h̶ a̶n̶o̶t̶h̶e̶r̶ q̶u̶e̶s̶t̶i̶o̶n̶
W̶H̶E̶N̶ I̶ a̶n̶s̶w̶e̶r̶ a̶ q̶u̶e̶s̶t̶i̶o̶n̶ i̶n̶c̶o̶r̶r̶e̶c̶t̶l̶y̶
T̶H̶E̶N̶ t̶i̶m̶e̶ i̶s̶ s̶u̶b̶t̶r̶a̶c̶t̶e̶d̶ f̶r̶o̶m̶ t̶h̶e̶ c̶l̶o̶c̶k̶
W̶H̶E̶N̶ a̶l̶l̶ q̶u̶e̶s̶t̶i̶o̶n̶s̶ a̶r̶e̶ a̶n̶s̶w̶e̶r̶e̶d̶ o̶r̶ t̶h̶e̶ t̶i̶m̶e̶r̶ r̶e̶a̶c̶h̶e̶s̶ 0̶
T̶H̶E̶N̶ t̶h̶e̶ g̶a̶m̶e̶ i̶s̶ o̶v̶e̶r̶
W̶H̶E̶N̶ t̶h̶e̶ g̶a̶m̶e̶ i̶s̶ o̶v̶e̶r̶
T̶H̶E̶N̶ I̶ c̶a̶n̶ s̶a̶v̶e̶ m̶y̶ i̶n̶i̶t̶i̶a̶l̶s̶ a̶n̶d̶ m̶y̶ s̶c̶o̶r̶e̶
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ d̶e̶p̶l̶o̶y̶e̶d̶ a̶t̶ l̶i̶v̶e̶ U̶R̶L̶.̶

*̶ A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ l̶o̶a̶d̶s̶ w̶i̶t̶h̶ n̶o̶ e̶r̶r̶o̶r̶s̶.̶

*̶ A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ G̶i̶t̶H̶u̶b̶ U̶R̶L̶ s̶u̶b̶m̶i̶t̶t̶e̶d̶.̶

*̶ G̶i̶t̶H̶u̶b̶ r̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ c̶o̶n̶t̶a̶i̶n̶s̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ c̶o̶d̶e̶.̶

### Application Quality: 15%

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ u̶s̶e̶r̶ e̶x̶p̶e̶r̶i̶e̶n̶c̶e̶ i̶s̶ i̶n̶t̶u̶i̶t̶i̶v̶e̶ a̶n̶d̶ e̶a̶s̶y̶ t̶o̶ n̶a̶v̶i̶g̶a̶t̶e̶.̶

*̶ A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ u̶s̶e̶r̶ i̶n̶t̶e̶r̶f̶a̶c̶e̶ s̶t̶y̶l̶e̶ i̶s̶ c̶l̶e̶a̶n̶ a̶n̶d̶ p̶o̶l̶i̶s̶h̶e̶d̶.̶

*̶ A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ r̶e̶s̶e̶m̶b̶l̶e̶s̶ t̶h̶e̶ m̶o̶c̶k̶-̶u̶p̶ f̶u̶n̶c̶t̶i̶o̶n̶a̶l̶i̶t̶y̶ p̶r̶o̶v̶i̶d̶e̶d̶ i̶n̶ t̶h̶e̶ h̶o̶m̶e̶w̶o̶r̶k̶ i̶n̶s̶t̶r̶u̶c̶t̶i̶o̶n̶s̶.̶

### Repository Quality: 13%

* R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ h̶a̶s̶ a̶ u̶n̶i̶q̶u̶e̶ n̶a̶m̶e̶.̶

*̶ R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ f̶o̶l̶l̶o̶w̶s̶ b̶e̶s̶t̶ p̶r̶a̶c̶t̶i̶c̶e̶s̶ f̶o̶r̶ f̶i̶l̶e̶ s̶t̶r̶u̶c̶t̶u̶r̶e̶ a̶n̶d̶ n̶a̶m̶i̶n̶g̶ c̶o̶n̶v̶e̶n̶t̶i̶o̶n̶s̶.̶

*̶ R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ f̶o̶l̶l̶o̶w̶s̶ b̶e̶s̶t̶ p̶r̶a̶c̶t̶i̶c̶e̶s̶ f̶o̶r̶ c̶l̶a̶s̶s̶/̶i̶d̶ n̶a̶m̶i̶n̶g̶ c̶o̶n̶v̶e̶n̶t̶i̶o̶n̶s̶,̶ i̶n̶d̶e̶n̶t̶a̶t̶i̶o̶n̶,̶ q̶u̶a̶l̶i̶t̶y̶ c̶o̶m̶m̶e̶n̶t̶s̶,̶ e̶t̶c̶.̶

*̶ R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ c̶o̶n̶t̶a̶i̶n̶s̶ m̶u̶l̶t̶i̶p̶l̶e̶ d̶e̶s̶c̶r̶i̶p̶t̶i̶v̶e̶ c̶o̶m̶m̶i̶t̶ m̶e̶s̶s̶a̶g̶e̶s̶.̶

*̶ R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ c̶o̶n̶t̶a̶i̶n̶s̶ q̶u̶a̶l̶i̶t̶y̶ r̶e̶a̶d̶m̶e̶ f̶i̶l̶e̶ w̶i̶t̶h̶ d̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶,̶ s̶c̶r̶e̶e̶n̶s̶h̶o̶t̶,̶ a̶n̶d̶ l̶i̶n̶k̶ t̶o̶ d̶e̶p̶l̶o̶y̶e̶d̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶.̶

## Review

You are required to submit BOTH of the following for review:

* T̶h̶e̶ U̶R̶L̶ o̶f̶ t̶h̶e̶ f̶u̶n̶c̶t̶i̶o̶n̶a̶l̶,̶ d̶e̶p̶l̶o̶y̶e̶d̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶.̶

*̶ T̶h̶e̶ U̶R̶L̶ o̶f̶ t̶h̶e̶ G̶i̶t̶H̶u̶b̶ r̶e̶p̶o̶s̶i̶t̶o̶r̶y̶,̶ w̶i̶t̶h̶ a̶ u̶n̶i̶q̶u̶e̶ n̶a̶m̶e̶ a̶n̶d̶ a̶ r̶e̶a̶d̶m̶e̶ d̶e̶s̶c̶r̶i̶b̶i̶n̶g̶ t̶h̶e̶ p̶r̶o̶j̶e̶c̶t̶.̶

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
