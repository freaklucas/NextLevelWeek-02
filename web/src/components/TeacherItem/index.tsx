import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/52864673?s=460&u=ec61a863373ff41e0e5bcab9e6912070e8e45f08&v=4" alt="Lucas Oliveira"/>
                <div>
                    <strong>Lucas Oliveira</strong>
                     <span>Física</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores teorias da física avançada.
                <br/> <br/>
                Apaixonado por examinar as diferenças mudanças da matéria e por entender cada dia como funciona a ciência nesse âmbito.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>

    );
}

export default TeacherItem;