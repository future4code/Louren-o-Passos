import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoLourenco from './images/FotoLourenco.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoLourenco} 
          nome="Lourenço" 
          descricao="Olá, meu nome é Lourenço. Formado em Publicidade e Propaganda e cursando Análise e Desenvolvimento de Sistemas.Atualmente sou estudante da Labenu"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/561/561188.svg" 
          nome="Email:" 
          elemento="lourencopassos@labenu.com.br"
        />
                <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/1295/1295181.svg" 
          nome="Endereço:" 
          elemento="Porto Alegre"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eb17dfd4a07be86d2b8951e_Labenu_principal_slogan.png" 
          nome="Labenu" 
          descricao="Desenvolvimento Web FullStack" 
        />
        
        <CardGrande 
          imagem="https://ilegra.com/wp-content/themes/ilegra-wp-theme/images/Logo.svg" 
          nome="ilegra" 
          descricao="Analista de Marketing Digital" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
