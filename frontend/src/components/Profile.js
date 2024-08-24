import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin-left: 250px;
  padding: 20px;
`;

const ProfileHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProfileDetails = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileDetailItem = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>Your Profile</ProfileHeader>
      <ProfileDetails>
        <ProfileDetailItem><strong>Username:</strong> JohnDoe</ProfileDetailItem>
        <ProfileDetailItem><strong>Email:</strong> johndoe@example.com</ProfileDetailItem>
        <ProfileDetailItem><strong>Balance:</strong> 1500 Sweeps Coins</ProfileDetailItem>
        <ProfileDetailItem><strong>Membership Level:</strong> Gold</ProfileDetailItem>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
