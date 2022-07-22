import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  handleClick = (id) => {
    this.props.dispatch(setAuthedUser(id));
    this.props.history.push("/");
  };

  render() {
    const users = Object.values(this.props.users)
    return (
      <div>
        <h3 className="Title">Login (Select User)</h3>

        <div className="center">
          {users.map(user => (
            <Card sx={{ width: 200, margin: 2 }} key={user.id}>
              <CardActionArea onClick={() => this.handleClick(user.id)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.avatarURL}
                  alt={user.id}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.id}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default withRouter(connect(mapStateToProps)(Login));
