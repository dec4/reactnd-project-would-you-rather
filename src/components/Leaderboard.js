import { Component } from "react";
import { connect } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Leaderboard extends Component {
  render() {
    const { sortedUserIds, users } = this.props;

    return (
      <div>
        <h3 className="Title">Leaderboard</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="leaderboard">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>User Id</TableCell>
                <TableCell align="center"># Qs Asked</TableCell>
                <TableCell align="center"># Qs Answered</TableCell>
                <TableCell align="center">Total Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUserIds.map((uid) => {
                let user = users[uid];
                let nAnswered = Object.keys(user.answers).length;
                let nAsked = user.questions.length;

                return (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell align="center">{nAsked}</TableCell>
                    <TableCell align="center">{nAnswered}</TableCell>
                    <TableCell align="center">{nAsked + nAnswered}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  let userScore = (id) =>
    Object.keys(users[id].answers).length + users[id].questions.length;

  return {
    sortedUserIds: Object.keys(users).sort((a, b) => userScore(b) - userScore(a)),
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
