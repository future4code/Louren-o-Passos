import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import LikeIcon from "@material-ui/icons/Favorite";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import GroupIcon from "@material-ui/icons/Group";

function ProfileCard(props) {
  const ProfileContainer = styled.div`
    border: 1px solid black;
    margin: 0 15px;
    border-radius: 5px;
    width: 435px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;

  const MyLikeButton = styled(LikeIcon)`
    cursor: pointer;

    &:hover {
      color: #00b300;
    }
  `;

  const MyDislikeButton = styled(NotInterestedIcon)`
    cursor: pointer;

    &:hover {
      color: #b30000;
    }
  `;
  const ProfilePhoto = styled.img`
    width: auto;
    display: block;
    height: auto;
  `;
  const ProfileInformationContainer = styled.div`
    margin: 0 15px;
  `;
  const LikeDislikeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px;
  `;
  const PhotoContainer = styled.div`
    overflow: hidden;
    position: relative;
    margin: 15px;
  `;

  const CheckMatches = styled.p`
    cursor: pointer;
    text-align: center;
    &:hover {
      font-weight: bold;
      color: #00b300;
    }
  `;

  const ProfileName = styled.p`
    font-weight: bold;
    font-size: 18px;
  `;
  const [profile, setProfile] = useState({});
  const [togglePage, setTogglePage] = useState(false);

  const fetchProfiles = () => {
    Axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lourenco/person"
    )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProfiles();
  }, [togglePage]);

  const likeProfile = (profileId) => {
    const body = {
      id: profileId,
      choice: true,
    };

    Axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lourenco/choose-person",
      body
    )
      .then((response) => {
        setTogglePage(!togglePage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dislikeProfile = (profileId) => {
    const body = {
      id: profileId,
      choice: false,
    };

    Axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lourenco/choose-person",
      body
    )
      .then((response) => {
        setTogglePage(!togglePage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const profilesScreen = profile.photo ? (
    <ProfileContainer>
      <CheckMatches onClick={props.handleMatchesPage}>
        Conferir Matches
      </CheckMatches>
      <PhotoContainer>
        <ProfilePhoto src={profile.photo} alt="Profile picture" />
      </PhotoContainer>
      <ProfileInformationContainer>
        <ProfileName>{profile.name}</ProfileName>
        <p>{profile.age} anos</p>
        <p>{profile.bio}</p>
      </ProfileInformationContainer>
      <LikeDislikeContainer>
        <MyDislikeButton
          style={{ fontSize: 40 }}
          onClick={() => dislikeProfile(profile.id)}
        >
          Dislike
        </MyDislikeButton>
        <MyLikeButton
          style={{ fontSize: 40 }}
          onClick={() => likeProfile(profile.id)}
        >
          Like
        </MyLikeButton>
      </LikeDislikeContainer>
    </ProfileContainer>
  ) : (
    <p>Carregando...</p>
  );

  return <div> {profilesScreen}</div>;
}

export default ProfileCard;
