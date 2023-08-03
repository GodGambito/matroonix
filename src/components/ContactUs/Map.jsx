import React from 'react';

function Map() {
    return (
        <div id="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.7124487189994!2d-71.6439796768876!3d10.589922135105255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899741db0dec57%3A0xd8662e215d13db43!2sETI%20Anselmo%20Belloso!5e1!3m2!1ses!2scl!4v1686706220967!5m2!1ses!2scl"
                style={{
                    border: '0',
                    width: '100%',
                }}
                allowFullScreen=""
                aria-hidden="false"
            />
        </div>
    );
}

export default Map;