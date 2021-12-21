import axios from 'axios'

const KEY = 'AIzaSyA1UABpEHq2QO7OvJ5XQVNwd0q6t0iXzuo';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'vedio',
    maxResult: 5,
    key: KEY,
  }
});

