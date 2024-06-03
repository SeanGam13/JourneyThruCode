import React from 'react';
import './Catalogue.css';

const Catalogue = () => {
    return (
        <div id="catalogue">
            <div className="container">
                <h1 className="sub-title">My catalogue</h1>
                <div className="catalogue-list">
                    <div>
                        <h2>Spotify</h2>
                        <iframe src="https://open.spotify.com/embed/album/3f7TU6cP0jsbbSxoZQu1pu?utm_source=generator" width="300" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div>
                        <h2>Apple Music</h2>
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="380" style={{ width: "80%", margin: "0 auto", borderRadius: "12px" }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/panado-feat-maazi-beats-single/1728963811"></iframe>
                    </div>
                    <div>
                        <h2>Audiomack</h2>
                        <iframe src="https://audiomack.com/embed/dituaes/album/take-no-ls-ep" scrolling="no" width="80%" height="400" frameBorder="0" title="Take no L's EP"></iframe>
                    </div>
                </div>
                <div>
                    <h2>Youtube</h2>
                    <iframe width="80%" height="380" src="https://www.youtube.com/embed/jCk167DrcM4?si=pMdr6wjb26lWkYmE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ borderRadius: "12px", margin: "0 auto" }}></iframe>
                </div>
            </div>
        </div>
    );
}

export default Catalogue;
