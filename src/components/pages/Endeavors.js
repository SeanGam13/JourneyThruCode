import React from 'react';
import './Endeavors.css';

const Endeavors = () => {
    return (
        <div id="endeavors">
            <div className="container">
                <h1 className="sub-title">Endeavors</h1>
                <div className="endeavors-list">
                    <div>
                        <i className="fa-solid fa-laptop-code"></i>
                        <h2>Software Development</h2>
                        <p>Despite acquiring the knowledge through my 9-5s, I'm on course to completing my journey as a Front end Developer through ALX.</p>
                        <a href="https://github.com/SeanGam13">learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-music"></i>
                        <h2>MUSIC</h2>
                        <p>Earlier this year, I ended my career in music. Not due to factors like fame and money but rather due to my newly found goals and ambitions. This isn't a train-smash as my previous work is still on all streaming platforms.</p>
                        <a href="https://www.google.com/search?sa=X&sca_esv=668e1abf6fdfcd6c&sca_upv=1&rlz=1C1VDKB_enZA982ZA991&nfpr=1&sxsrf=ADLYWII_VLgqeXrzssaWKguiwuzilam9dg:1716833915641&q=Dituaes&si=ACC90nwWMtY7Jnlv_AccmXGjSqOGAy-2XDPRTVk5XuZZ_zXrZJbevZQJBuM9qvK7VC5MrMk7kz_oOYrJpdKUrjOnBdhzRynyBHewAOEcL9jdcphBk5A2tWH2R-pIFNJ90Jo-PF4azoexsM84oIpIx_5Nq-ZFoHpG3vDgYCT4C3wz7XQTimpFF4nSt07c5dvxMiNgLkcEG2lT0wmG_hKfiacf2S-rzWJaFeJ4EWWzZiBi7IinCvs9Z3ZhsxR0Fffx8oewX6eCMqvpD-rU5hN7QmdAgkODiwTZmbpRt_cMAjEBl_fE86PUH62Ky8yuW-5uYg89TXn5SmJb&ved=2ahUKEwiE">
                            learn more
                        </a>
                    </div>
                    <div>
                        <i className="fa-solid fa-user-secret"></i>
                        <h2>Security & Surveillence</h2>
                        <p>I currently manage a security company which specializes in hidden devices such as cameras, audio recorders, trackers etc.</p>
                        <a href="https://spyshop.co.za/">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Endeavors;
