import React, { Component } from 'react'
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
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
]
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => <Customer key={c.id} { ...c }/>)}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);