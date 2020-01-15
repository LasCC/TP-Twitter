import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import UseAnimations from "react-useanimations";
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import TimelineIcon from "@material-ui/icons/Timeline";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ButtonBase from "@material-ui/core/ButtonBase";

document.body.style.backgroundColor = "black";

const Tendances = require("../data/Tendances.json");
const Suggestions = require("../data/Suggestions.json");
const TimelineData = require("../data/TimelineData.json");
const moment = require("moment");
moment.locale("fr");

export default props => {
  const [liked, setLiked] = useState(12);
  const [retweeted, setRetweeted] = useState(54);
  const [comment, setComment] = useState(6);
  const [state, setState] = useState({
    checkedLike: false,
    checkedRetweet: false,
    checkedComment: false
  });
  const [charLimit, setCharLimit] = useState(200);

  const limit = () => {
    setCharLimit(substract => substract - 1);
  };

  const like = () => {
    state.checkedLike === true
      ? setLiked(add => add - 1)
      : setLiked(add => add + 1);
  };

  const retweet = () => {
    state.checkedRetweet === true
      ? setRetweeted(add => add - 1)
      : setRetweeted(add => add + 1);
  };

  const messages = () => {
    state.checkedComment === true
      ? setComment(add => add - 1)
      : setComment(add => add + 1);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const randomImage = (min, max) => {
    return `https://picsum.photos/1920/1080?random=${Math.floor(
      Math.random() * (max - min + 1)
    ) + min}/650/750.jpg`;
  };

  return (
    <Container style={{ maxWidth: 1200 }}>
      <Box display="flex" style={{ height: "100vh", width: "100%" }}>
        <Box
          style={{
            height: "100%",
            width: "45%",
            marginRight: 10
          }}
        >
          <Box>
            <UseAnimations
              animationKey="twitter"
              size={45}
              style={{ color: "#d9d9d9", fontWeight: "bold" }}
            />
            <button
              className="btnHoverActive"
              style={{
                marginTop: 15,
                justifyContent: "left",
                color: "rgba(29,161,242,1.00)",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <HomeIcon style={{ marginRight: 10, marginTop: 2 }} />
              Accueil
            </button>

            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <TocIcon
                style={{
                  marginRight: 10,
                  marginTop: 2
                }}
              />
              Explorer
            </button>

            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <NotificationsActiveIcon
                style={{ marginRight: 10, marginTop: 2 }}
              />
              Notifications
            </button>

            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <MailOutlineIcon style={{ marginRight: 10, marginTop: 2 }} />
              Messages
            </button>
            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <BookmarkBorderIcon style={{ marginRight: 10, marginTop: 2 }} />
              Signets
            </button>
            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <ListAltIcon style={{ marginRight: 10, marginTop: 2 }} />
              Listes
            </button>
            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 7
              }}
            >
              <img
                src="https://picsum.photos/200/300"
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 25,
                  marginRight: 10,
                  marginTop: 2
                }}
                alt="logoprofil"
              />
              Rober V
            </button>
            <button
              className="btnHoverActive"
              style={{
                justifyContent: "left",
                color: "#d9d9d9",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 19,
                display: "flex",
                alignItem: "center",
                marginBottom: 20
              }}
            >
              <MoreHorizIcon style={{ marginRight: 10, marginTop: 2 }} />
              Plus
            </button>
            <Button
              align="center"
              style={{
                color: "white",
                backgroundColor: "rgba(29,161,242,1.00)",
                textTransform: "none",
                borderRadius: 25,
                fontWeight: "bold",
                padding: 10,
                width: 250
              }}
            >
              Tweeter
            </Button>
          </Box>
        </Box>
        <Box style={{ height: "100%", width: "auto" }}>
          <Box
            style={{
              padding: 15,
              borderLeft: "1px solid",
              borderRight: "1px solid",
              borderBottom: "1px solid",
              borderColor: "rgb(47, 51, 54)"
            }}
          >
            <Typography style={{ fontWeight: "bold", color: "#d9d9d9" }}>
              Accueil
            </Typography>
          </Box>
          <Box
            style={{
              padding: 10,
              borderLeft: "1px solid",
              borderRight: "1px solid",
              borderBottom: "1px solid",
              borderColor: "rgb(47, 51, 54)"
            }}
          >
            <Box display="flex" alignItems="center" style={{ width: "100%" }}>
              <img
                src="https://pbs.twimg.com/profile_images/1189135992344719360/MKe1MPSY_bigger.jpg"
                alt="avatarUpper"
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60
                }}
              />
              <div style={{ width: "95%" }}>
                <label
                  for="name"
                  style={{ color: "#d9d9d9", fontSize: 13, marginLeft: 10 }}
                >
                  Quoi de neuf ?
                </label>
                <br />
                <input
                  maxlength="200"
                  id="name"
                  className="inputQuoideneuf"
                  onChange={limit}
                  style={{ width: "95%" }}
                />
              </div>
            </Box>
            <Box display="flex" alignItems="center">
              <Box style={{ padding: 10, marginLeft: 55 }} flexGrow={1}>
                <ButtonBase>
                  <CropOriginalIcon
                    style={{ color: "#1da1f2", cursor: "pointer" }}
                  />
                </ButtonBase>
                <ButtonBase>
                  <GifIcon
                    style={{
                      color: "#1da1f2",
                      cursor: "pointer",
                      marginLeft: 10
                    }}
                  />
                </ButtonBase>
                <ButtonBase>
                  <TimelineIcon
                    style={{
                      color: "#1da1f2",
                      cursor: "pointer",
                      marginLeft: 10
                    }}
                  />
                </ButtonBase>
                <ButtonBase>
                  <SentimentVerySatisfiedIcon
                    style={{
                      color: "#1da1f2",
                      cursor: "pointer",
                      marginLeft: 10
                    }}
                  />
                </ButtonBase>
                <ButtonBase>
                  <MoreHorizIcon
                    style={{
                      color: "#1da1f2",
                      cursor: "pointer",
                      marginLeft: 10
                    }}
                  />
                </ButtonBase>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography style={{ color: "#6e767d" }}>
                  {charLimit}
                </Typography>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#1da1f2",
                    marginLeft: 10,
                    borderRadius: 25,
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: 10
                  }}
                >
                  Tweeter
                </Button>
              </Box>
            </Box>
          </Box>
          {TimelineData.map(tl => (
            <div
              className="divHover"
              style={{
                padding: 15,
                borderLeft: "1px solid",
                borderRight: "1px solid",
                borderBottom: "1px solid",
                borderColor: "rgb(47, 51, 54)"
              }}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={tl.avatar}
                  alt="avatarTL"
                  style={{ height: 40, width: 40, borderRadius: 40 }}
                />
                <Typography
                  style={{
                    marginLeft: 10
                  }}
                >
                  <span
                    style={{
                      color: "#d9d9d9",
                      fontWeight: "bold",
                      fontSize: 15
                    }}
                  >
                    {tl.name}
                  </span>
                  <span
                    style={{ color: "#6e767d", marginLeft: 10, fontSize: 15 }}
                  >
                    {tl.at}
                  </span>
                  <span
                    style={{ color: "#6e767d", fontSize: 10, marginLeft: 10 }}
                  >
                    {moment().format("LT")}
                  </span>
                </Typography>
              </Box>
              <Box>
                <Typography
                  style={{
                    color: "#d9d9d9",
                    fontSize: 15,
                    width: "100%",
                    marginTop: 15,
                    marginBottom: 15
                  }}
                >
                  {tl.content}
                </Typography>
                <img
                  src={randomImage(1, 55)}
                  alt="pictureTL"
                  style={{
                    height: "auto",
                    borderRadius: 20,
                    width: "100%"
                  }}
                />
              </Box>
              <Box display="flex" style={{ marginLeft: 25 }}>
                <Box display="flex" flexGrow={1}>
                  <FormControlLabel
                    style={{ color: "#6e767d " }}
                    control={
                      <Checkbox
                        style={{ color: "#6e767d" }}
                        icon={<ChatBubbleOutlineIcon />}
                        checkedIcon={
                          <ChatBubbleOutlineIcon style={{ color: "#1da1f2" }} />
                        }
                        checked={state.checkedComment}
                        onChange={handleChange("checkedComment")}
                        onClick={messages}
                      />
                    }
                    label={comment}
                  />
                </Box>
                <Box display="flex" flexGrow={1}>
                  <FormControlLabel
                    style={{ color: "#6e767d " }}
                    control={
                      <Checkbox
                        style={{ color: "#6e767d" }}
                        icon={<RepeatIcon />}
                        checkedIcon={
                          <RepeatIcon style={{ color: "#17bf63" }} />
                        }
                        checked={state.checkedRetweet}
                        onChange={handleChange("checkedRetweet")}
                        onClick={retweet}
                      />
                    }
                    label={retweeted}
                  />
                </Box>
                <Box display="flex" flexGrow={1}>
                  <FormControlLabel
                    style={{ color: "#6e767d " }}
                    control={
                      <Checkbox
                        style={{ color: "#6e767d" }}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite style={{ color: "#e0245e" }} />}
                        checked={state.checkedLike}
                        onChange={handleChange("checkedLike")}
                        onClick={like}
                      />
                    }
                    label={liked}
                  />
                </Box>
              </Box>
            </div>
          ))}
        </Box>
        <Box style={{ height: "100%", width: "55%" }}>
          <Box>
            <Box align="center">
              <input
                className="inputRecherche"
                value="Recherche twitter"
                style={{ width: 250, marginTop: 5, marginLeft: 14 }}
              />
            </Box>
            <Box
              style={{
                backgroundColor: "#15181c",
                borderRadius: 15,
                marginTop: 15,
                marginLeft: 15
              }}
            >
              <Typography
                style={{
                  color: "#d9d9d9",
                  padding: 15,
                  fontWeight: "bold"
                }}
              >
                Tendances : France
              </Typography>
              <Divider />
              {Tendances.map(tt => (
                <Box className="divHover">
                  <Box
                    style={{
                      borderBottom: "1px solid",
                      marginTop: 10,
                      borderColor: "rgb(47, 51, 54)"
                    }}
                  >
                    <Typography
                      style={{
                        color: "#6e767d",
                        marginLeft: 15,
                        fontSize: 13
                      }}
                    >
                      {tt.position}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 15,
                        marginLeft: 15
                      }}
                    >
                      {tt.hash}
                    </Typography>
                    <Typography
                      style={{
                        color: "#6e767d",
                        marginLeft: 15,
                        marginBottom: 10,
                        fontSize: 13
                      }}
                    >
                      {tt.tweets} Tweets
                    </Typography>
                  </Box>
                </Box>
              ))}
              <Button
                fullWidth
                style={{
                  color: "#1da1f2",
                  padding: 8,
                  height: 45
                }}
              >
                Voir plus
              </Button>
            </Box>
            {/* Suggestion box */}
            <Box
              style={{
                backgroundColor: "#15181c",
                borderRadius: 15,
                marginTop: 15,
                marginLeft: 15
              }}
            >
              <Typography
                style={{
                  color: "#d9d9d9",
                  padding: 15,
                  fontWeight: "bold"
                }}
              >
                Suggestions
              </Typography>
              <Divider />
              {Suggestions.map(sg => (
                <>
                  <Box className="divHover">
                    <Box display="flex" alignItems="center">
                      <img
                        src={sg.avatar}
                        alt="suggestionAvatar"
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 50,
                          padding: 10
                        }}
                      />
                      <Typography>
                        <span
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15
                          }}
                        >
                          {sg.name}
                        </span>
                        <br />
                        <span style={{ color: "#6e767d", fontSize: 13 }}>
                          {sg.at}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                </>
              ))}
              <Button
                fullWidth
                style={{
                  color: "#1da1f2",
                  padding: 8,
                  height: 45
                }}
              >
                Voir plus
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
