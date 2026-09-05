Feature: form Feature
  Scenario Outline:
    Given the user is on the login page on the form page
    When the user fill in the form with "<name>", "<email>", "<gender>", "<mobile_number>", "<subject>", "<hobbies>", "<address>", "<state>", "<city>"
    And the user clicks on Login button
    Then the user should see that login button is enabled

    Examples:
      | name         | email             | gender | mobile_number | subject   | hobbies         | address        | state         | city    |
      | Aarav Sharma | aarav@example.com | Male   | 9876543210    | Maths     | Sports          | 12 MG Road     | NCR           | Agra    |
      | Priya Verma  | priya@example.com | Female | 9876543211    | English   | Reading         | 45 Park Street | Uttar Pradesh | Lucknow |
      | Rahul Singh  | rahul@example.com | Male   | 9876543212    | Physics   | Music           | 78 Civil Lines | Haryana       | Meerut  |
      | Neha Gupta   | neha@example.com  | Female | 9876543213    | Chemistry | Sports, Reading | 90 Lake View   | Rajasthan     | Agra    |
      | Kabir Khan   | kabir@example.com | Male   | 9876543214    | Biology   | Music, Sports   | 22 Sector 5    | NCR           | Meerut  |
