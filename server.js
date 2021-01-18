const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '나동빈',
      birthday: '961212',
      gender: '남자',
      job: '대학생'
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '가나다',
      birthday: '201212',
      gender: '야자',
      job: '초등학생'
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '리라로',
      birthday: '990203',
      gender: '남자',
      job: '고등학생'
    },
    {
      id: 4,
      image: 'https://placeimg.com/64/64/4',
      name: '이랑랑',
      birthday: '800423',
      gender: '여자',
      job: '주부'
    },
    {
      id: 5,
      image: 'https://placeimg.com/64/64/5',
      name: '김진규',
      birthday: '991201',
      gender: '남자',
      job: '회사원'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
