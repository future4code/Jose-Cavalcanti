import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
    {
      nomeUsuario= 'paulinha',
      fotoUsuario= 'https://picsum.photos/50/50',
      fotoPost= 'https://picsum.photos/200/150',
    }
    {
      nomeUsuario= "olavinho",
      fotoUsuario= "https://i.picsum.photos/id/1/50/50.jpg?hmac=uD_AuvYRKIjw0o41oBnGz4vODQQKOL4EuhDQbxl26Ys",
      fotoPost= "https://i.picsum.photos/id/1/200/150.jpg?hmac=9ygk6_GMxpMe_7GpjyUAzAbLNSwk9jG9XLhR6UbFG6c",
    }
    {
      nomeUsuario= "olavinho",
      fotoUsuario="https://i.picsum.photos/id/1/50/50.jpg?hmac=uD_AuvYRKIjw0o41oBnGz4vODQQKOL4EuhDQbxl26Ys",
      fotoPost="https://i.picsum.photos/id/1/200/150.jpg?hmac=9ygk6_GMxpMe_7GpjyUAzAbLNSwk9jG9XLhR6UbFG6c",
    }
  ]
  }
  render() {
    return (
      // <MainContainer>
      //   <Post
      //     nomeUsuario={'paulinha'}
      //     fotoUsuario={'https://picsum.photos/50/50'}
      //     fotoPost={'https://picsum.photos/200/150'}
      //   />
      //   <Post
      //     nomeUsuario={"olavinho"}
      //     fotoUsuario={"https://i.picsum.photos/id/1/50/50.jpg?hmac=uD_AuvYRKIjw0o41oBnGz4vODQQKOL4EuhDQbxl26Ys"}
      //     fotoPost={"https://i.picsum.photos/id/1/200/150.jpg?hmac=9ygk6_GMxpMe_7GpjyUAzAbLNSwk9jG9XLhR6UbFG6c"}
      //   />
      //   <Post
      //     nomeUsuario={"samuzinho"}
      //     fotoUsuario={"https://www.artmajeur.com/medias/standard/c/h/christelleferron/artwork/10638688_le-monde-en-couleur-50x50.jpg"}
      //     fotoPost={"https://www.fas.org.sg/wp-content/uploads/2018/05/200x150.png"}
      //   />
      // </MainContainer>
    );
  }
}

export default App;
