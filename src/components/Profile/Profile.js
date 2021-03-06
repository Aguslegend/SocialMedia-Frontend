import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import noImageUser from '../../assets/noImageUser.png'
import { Container, Img, Username, Name  } from './styles';

const Profile = ({ direction, username, name, usidebar = false, img, isOwner = false }) => {
  
  //Si un nombre es muy largo que no rompa los estilos
  const usernameMemo = useMemo(() => {
    return (username.length > 10) ? `${username.substring(0, 11)}...` : username;
  },[username])

  return (
    <Container direction={direction} usidebar={usidebar}>
      <Link to={`/profile/${username}`}>
        {img ? (
          <Img src={img} alt="avatar" usidebar={usidebar} isOwner={isOwner} />
        ): (
          <Img src={noImageUser} alt="avatar" usidebar={usidebar} isOwner={isOwner} />
        )}
      </Link>
      <div>
        <Link to={`/profile/${username}`}>
          {username && <Username usidebar={usidebar}>{usernameMemo}</Username>}
        </Link>
        {name && <Name>{name}</Name>}
      </div>
    </Container>
  )
}

export default React.memo(Profile);