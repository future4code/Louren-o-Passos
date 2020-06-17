import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

function ProfileCard(props) {
  const ProfileContainer = styled.div`
    border: 1px solid black;
    margin: 20px;
    border-radius: 5px;
    width: 450px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;
  const ProfilePhoto = styled.img`
    width: auto;
    display: block;
    height: auto;
  `;
  const ProfileInformationContainer = styled.div`
    margin: 10px;
  `;
  const LikeDislikeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
  `;
  const PhotoContainer = styled.div`
    width: 450px;
    height: 480px;
    overflow: hidden;
    position: relative;
  `;

  const [profile, setProfile] = useState({});
  const [togglePage, setTogglePage] = useState(false);

  const fetchProfiles = () => {
    Axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lourenco/person"
    )
      .then((response) => {
        console.log(response.data.profile);
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
        console.log(response);
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
        console.log(response);
        setTogglePage(!togglePage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ProfileContainer>
      <button onClick={props.handleMatchesPage}>Curtidas</button>
      <PhotoContainer>
        <ProfilePhoto src={profile.photo} alt="Profile picture" />
      </PhotoContainer>
      <ProfileInformationContainer>
        <p>{profile.name}</p>
        <p>{profile.age}</p>
        <p>{profile.bio}</p>
      </ProfileInformationContainer>
      <LikeDislikeContainer>
        <button onClick={() => dislikeProfile(profile.id)}>Dislike</button>
        <button onClick={() => likeProfile(profile.id)}>Like</button>
      </LikeDislikeContainer>
    </ProfileContainer>
  );
}

export default ProfileCard;
