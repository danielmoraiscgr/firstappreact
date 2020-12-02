import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () =>{
     return (
     <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title> Explore repositórios no Github </Title>

      <Form>
           <input placeholder="Digite o nome do repositorio" />
           <button> Pesquisar </button>
      </Form>

      <Repositories>
          <a href="teste">
               <img
                 src="https://avatars0.githubusercontent.com/u/54160304?s=400&u=f4b20f68c36b5e41398b81f415babd507f70bcae&v=4"
                 alt="Daniel Morais" 
               />          
          <div>
               <strong> github.com/danielmoraiscgr </strong>
               <p> Desenvolvendo os primeiros projetos em React </p>
          </div>
          <FiChevronRight size={20} />
          </a>
          <a href="teste">
               <img
                 src="https://avatars0.githubusercontent.com/u/54160304?s=400&u=f4b20f68c36b5e41398b81f415babd507f70bcae&v=4"
                 alt="Daniel Morais" 
               />          
          <div>
               <strong> github.com/danielmoraiscgr </strong>
               <p> Desenvolvendo os primeiros projetos em React </p>
          </div>
          <FiChevronRight size={20} />
          </a>
          <a href="teste">
               <img
                 src="https://avatars0.githubusercontent.com/u/54160304?s=400&u=f4b20f68c36b5e41398b81f415babd507f70bcae&v=4"
                 alt="Daniel Morais" 
               />          
          <div>
               <strong> github.com/danielmoraiscgr </strong>
               <p> Desenvolvendo os primeiros projetos em React </p>
          </div>
          <FiChevronRight size={20} />
          </a>
          <a href="teste">
               <img
                 src="https://avatars0.githubusercontent.com/u/54160304?s=400&u=f4b20f68c36b5e41398b81f415babd507f70bcae&v=4"
                 alt="Daniel Morais" 
               />          
          <div>
               <strong> github.com/danielmoraiscgr </strong>
               <p> Desenvolvendo os primeiros projetos em React </p>
          </div>
          <FiChevronRight size={20} />
          </a>
      </Repositories>
     </>
     );
};

export default Dashboard; 