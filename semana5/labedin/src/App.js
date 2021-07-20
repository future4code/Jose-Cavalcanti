import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://img.icons8.com/dotty/80/000000/cat-profile.png" 
          nome="José Henrique" 
          descricao="Oi, eu sou o José Henrique. Sou estudante da Labenu. Adoro esportes e me encanta o mundo, estou aprendendo a ser um desnvolvedor pois sou um grande entusiasta desta profissão do futuro e quero desbravar o mundo programando."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img.icons8.com/plumpy/80/000000/cat-profile.png" 
          nome="Labenu" 
          descricao="Estudante de Web dev periodo matutino!" 
        />
        
        <CardGrande 
          imagem="https://img.icons8.com/plumpy/80/000000/cat-profile.png" 
          nome="Eng. Elétrica" 
          descricao="Estudante na FIMCA" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" 
          texto="Facebook"
        />        

        <ImagemButton 
          imagem="https://img.icons8.com/material-outlined/24/000000/facebook.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
