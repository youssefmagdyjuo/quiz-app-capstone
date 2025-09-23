import axios from 'axios';
const BaseURL = 'https://opentdb.com/api.php';

async function fetchQuestions() {
    const response = await axios.get(`${BaseURL}?amount=5&category=18&difficulty=easy&type=multiple`);
    return response.data;
}
export { fetchQuestions };