module.exports = function validateFlashCard({ question, response, subject }) {
  const errors = {};

  if (!question) {
    errors.question = "question is required";
  }
  if (!response) {
    errors.response = "response is required";
  }
  if (!subject) {
    errors.subject = "subject is required";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  return null;
};
