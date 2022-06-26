# Feedback Form

A test task for Seobility

## Task condition
### Create a feedback form with the following fields:
- First name, Last name
- Email
- Phone number (with Russian number mask)
- Date of Birth
- Message

### Form requirements:
1. Validation
  - The field “First Name, Last Name” can consist only of 2 words (first name and last name) of the Latin alphabet. The minimum length of each word is 3 characters, the maximum is 30. There can only be 1 space between words. Characters must be entered in upper case.
  - E-mail must be valid (browser validation must be disabled).
  - Use the Russian number mask for the phone number.
  - Date of birth entering through the calendar.
  -The Message field has a minimum length of 10 characters and a maximum length of 300.
2. Form submission
- Submission occurs by ajax request to the server. The response should contain json with 2 possible statuses: error/success and error text/”successful submission”. The response must be processed on the front and the corresponding message should be displayed under the form.
- The form cannot be resubmitted, until a response is received from the server.
- Clear all form fields, in case of a successful response from the server.

All validation must be written independently, without the use of third-party libraries.
Form fields must be validated during entry and before being sent to the server.
If the field does not pass validation, display an appropriate message below the field.
The code must be uploaded to a remote, public repository.
