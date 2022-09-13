import React from 'react';
import s from './footer.css';
import { SiLinkedin } from 'react-icons/si';

export default function Footer(){
     return(
          <div className={`${s.footer} ${s.footerBg}`}>
               <div className={`${s.container} ${s.footerDiv}`}>
                    <div className={s.footerInfo}>
                         <p>Proyecto API <span>Pokemon</span></p>
                         <p>Garetto Juan Cruz - Henry</p>
                    </div>
                    <div className={s.footerLink}>                     
                         <a href="https://www.linkedin.com/in/juan-cruz-garetto-821399a6/">
                              <SiLinkedin/>
                         </a>
                    </div>
               </div>
          </div>
     )
};