import React from 'react';

const Header = () => (
    <header className="w-100" style={{position:'relative'}}>
      <div className="d-flx j-c-c wrapper pos-r z-depth-2">
        <div className="logo" style={{width:'130px'}}>
          <h3>Vyber</h3>
        </div>
      </div>
      <div className="blobs pos-r w-100 show-largeup">
        <span className="blob-right">
          <svg width="655" height="576" viewBox="0 0 655 576" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M367.029 25.2235C458.136 25.4851 565.426 -35.7413 626.738 31.6489C688.919 99.9953 630.131 204.076 612.22 294.723C593.118 391.4 609.28 514.835 522.163 560.901C433.927 607.559 337.426 530.266 247.101 487.792C155.02 444.493 40.3503 417.392 10.2621 320.19C-21.3933 217.924 22.9368 98.3657 105.442 30.152C176.157 -28.3135 275.275 24.96 367.029 25.2235Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="-338.206" y1="-287.694" x2="630.177" y2="747.406" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B81FFF"/>
            <stop offset="1" stopColor="#21BDCA"/>
            </linearGradient>
            </defs>
          </svg>
        </span>         
        <span className="blob-left">
          <svg width="851" height="818" viewBox="0 0 851 818" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M583.479 194.165C664.331 237.034 788.32 232.869 811.299 321.411C834.605 411.21 733.684 476.132 675.376 548.254C613.19 625.173 569.833 742.358 470.864 742.5C370.622 742.644 320.998 628.839 260.581 548.847C198.989 467.301 109.746 389.569 128.458 289.163C148.145 183.527 243.454 98.0926 348.682 76.1234C438.872 57.2938 502.054 150.991 583.479 194.165Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="103.008" y1="-413.776" x2="478.598" y2="958.971" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B81FFF"/>
            <stop offset="1" stopColor="#21BDCA"/>
            </linearGradient>
            </defs>
          </svg>   
        </span>
      </div>
    </header>
);
export default Header;
