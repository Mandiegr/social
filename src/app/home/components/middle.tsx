// src/components/Middle.tsx
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const ContainerMain = styled.div`
    @media screen and (min-width: 360px) and ( max-height: 932px) {
      width: 22rem;
  }
`

const ProfilePhoto = styled.div`
  width: 3rem;
  height: 3rem;
  align-self: flex-start;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

`;


const CreatePost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  margin-top: 1rem;
  padding: 0.4rem var(--card-padding);
  border-radius: var(--border-radius);
`;

const CreatePostInput = styled.input`
  background: transparent;
  justify-self: start;
  width: 100%;
  padding-left: 1rem;
  margin-right: 1rem;
  color: var(--color-dark);
`;

const Feeds = styled.div`
  .feed {
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.5rem;
    

    .head {
      display: flex;
      justify-content: space-between;
    }

    .user {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .photo {
      border-radius: var(--card-border-radius);
      overflow: hidden;
      margin: 0.7rem 0;
    }

    .action-buttons {
      display: flex;
     // flex-direction:row;
     // justify-content: space-between;
      align-items: center;
     // justify-content: center;
      font-size: 1.4rem;
      margin: 0.6rem 0;
    }

    .liked-by {
      display: flex;

      span {
        width: 1.4rem;
        height: 1.4rem;
        display: block;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid var(--color-white);
        margin-left: -0.6rem;
        &:first-child {
          margin: 0;
        }
      }

      p {
        margin-left: 0.5rem;
      }
    }
  }
`;

const Feed = styled.div``;

const Middle: React.FC = () => {
  return (
    <ContainerMain>
      <CreatePost>
        <ProfilePhoto>
          <img src="https://lh3.googleusercontent.com/a/AAcHTtcPgxM1MxW7KaKGUsejzKxNQ65u8Mrt59fcOj2KYg=s96-c" alt="profile 1" />
        </ProfilePhoto>
        <CreatePostInput type="text" placeholder="What's on your mind, Diana?" />
        <input type="submit" value="Post" className="btn btn-primary" />
      </CreatePost>

      <Feeds>
        {['feed-1.jpg', 'feed-2.jpg', 'feed-3.jpg', 'feed-4.jpg', 'feed-5.jpg', 'feed-6.jpg', 'feed-7.jpg', 'feed-8.jpg'].map((feed, index) => (
          <Feed className="feed" key={index}>
            <div className="head">
              <div className="user">
                <ProfilePhoto>
                  <img src="https://lh3.googleusercontent.com/a/AAcHTtcPgxM1MxW7KaKGUsejzKxNQ65u8Mrt59fcOj2KYg=s96-c" />
                </ProfilePhoto>
                <div className="info">
                  <h3>{`User ${index + 2}`}</h3>
                  <small>{`Location, ${index * 10 + 10} MINUTES AGO`}</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </div>
            <div className="photo">
              <img src='https://geekzine.com.br/wp-content/uploads/2024/02/Daenerys-e-dragao.jpeg' />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span><Button startIcon={<FavoriteIcon />} color="error"> </Button></span>
                <span> <Button startIcon={<CommentIcon />} color="error"> </Button></span>
                <span> <Button startIcon={<ShareIcon />} color="error"> </Button></span>
              
              </div>
              <div className="bookmark">
                <span><Button startIcon={<BookmarkIcon />} color="error"> </Button></span>
            
              </div>
            </div>
            <div className="liked-by">
              <span><img src="https://lh3.googleusercontent.com/a/AAcHTtcPgxM1MxW7KaKGUsejzKxNQ65u8Mrt59fcOj2KYg=s96-c" alt="profile 10" /></span>
              <span><img src="/images/profile-14.jpg" alt="profile 14" /></span>
              <span><img src="/images/profile-12.jpg" alt="profile 12" /></span>
              <p>Liked by <b>Ernest Achiever</b> and <b>{index * 100 + 100} others</b></p>
            </div>
            <div className="caption">
              <p><b>User {index + 2}</b> Lorem ipsum dolor sit, amet consectetur. <span className="hash-tag">#lifestyle</span> </p>
            </div>
            <div className="comments text-muted">
              View all {index * 10 + 100} comments
            </div>
          </Feed>
        ))}
      </Feeds>
    </ContainerMain>
  );
};

export default Middle;

