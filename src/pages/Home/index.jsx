import React, { Component } from "react";

import "./styles.css";

import { Redirect } from "react-router-dom";

import Button from "../../components/button";

import { gameData as game_data } from "../../services/data";
import { themes } from "../../services/themes";

class Home extends Component {
  state = {
    redirect: false,
    nicknameP1: "Player 1",
    nicknameP2: "Player 2",

    inputP1: "",
    inputP2: "",
  };

  constructor(props) {
    super(props);

    this.setTheme = this.setTheme.bind(this);
  }

  async start() {
    const rounds = 1;
    const nicknameP1 = this.state.nicknameP1;
    const nicknameP2 = this.state.nicknameP2;

    const gameData = await game_data.generateData(
      rounds,
      nicknameP1,
      nicknameP2
    );
    await game_data.save(gameData);
    this.setState({ redirect: true });
  }

  componentDidMount() {
    const data = localStorage.getItem("game_data")
      ? game_data.load()
      : { p1: {}, p2: {} };
    const newState = {};
    if (data.p1.nickname && data.p1.nickname !== "Player 1") {
      newState.nicknameP1 = data.p1.nickname;
      newState.inputP1 = data.p1.nickname;
    }

    if (data.p2.nickname && data.p2.nickname !== "Player 2") {
      newState.nicknameP2 = data.p2.nickname;
      newState.inputP2 = data.p2.nickname;
    }

    this.setState(newState);

    localStorage.removeItem("game_data");

    themes.setTheme();
  }

  setTheme() {
    themes.setTheme();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/ticTacToe" />;
    } else {
      return (
        <div className="Home">
          <div className="players">
            <div>
              <h1>Player 1: </h1>
              <input
                type="text"
                placeholder="Name..."
                className="inputNickname"
                onChange={(e) =>
                  this.setState({
                    inputP1: e.target.value,
                    nicknameP1: e.target.value,
                  })
                }
                value={this.state.inputP1}
              />
            </div>

            <div>
              <h1>Player 2: </h1>
              <input
                type="text"
                placeholder="Name..."
                className="inputNickname"
                onChange={(e) =>
                  this.setState({
                    inputP2: e.target.value,
                    nicknameP2: e.target.value,
                  })
                }
                value={this.state.inputP2}
              />
            </div>
          </div>
          <div>
            <Button onClick={() => this.start()} value="Play" />
          </div>
        </div>
      );
    }
  }
}

export default Home;
