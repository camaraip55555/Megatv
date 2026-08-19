const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const { username, password } = req.query;
    
    if (username === 'usuario1' && password === '1234') {
        res.redirect(302, 'http://212.102.38.84:2095/YtLcIpxZzU/7816778667/26046?h=9c5c5f806a42700a2bfbc65421f97a124078d9d9&z=79.116.106.190&i=463846&token=SkNbBRIMRF5GDgpRAwNYDAQHC1YAXANXAAZTCwMEBgAHBAFcU1VeVlAbFBdAFktdA1tsXQBHDQBUB1YOThZBRFQTbA0FRlxGVgwPDQZaChpOFEddCQAVCFMAWg9SDQEBAFAfRhENAkZeGwkAB1UODVEUHxYBHUNXEFkDVD1QUUFYAlZGWwoTCAgVGlpdPV1dD1ddUEZfFQJAG0BREUQWDV8UXwhNRgQNEEtZQVZAAxpQDwEBRkkVUQ1CDEwQTRYNEyRgRk1GAxwQXFZGWg1XGlgUR0dGSRVbEWgQXRFARlJQDFYWQ15EVEYVGlhSGmZbDVhdUQcRXl0MREACQAUWGxMMXAoIEAkWO0lRURFYGwxTBQMFUlYVTw==');
    } else {
        res.status(401).send("Usuario o contraseña incorrectos");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
