const express = require('express');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const { username, password } = req.query;
    
    if (username === 'usuario1' && password === '1234') {
        const targetUrl = 'http://89.187.188.214:2086/YtLcIpxZzU/7816778667/26046?h=47fbda50df5fb1c8f687d4b68e78569d7fbecf91&z=62.36.126.17&i=463846&token=SkNbBRIMRF5GWl0AAAFaDAZUA1YBAA4AVVRbDFJSAlUJBFcAVAJVUFYbFBdAFktdA1tsXQBHDQBUB1YOThZBRFQTbA0FRlxGVgwPDQZaChpOFEddCQAVCFMAWg9TBAIHCFMfRhENAkZeGwkFA1MBAVAUHxYBHUNXEFkDVD1QUUFYAlZGWwoTCAgVGlpdPV1dD1ddUEZfFQJAG0BREUQWDV8UXwhNRgQNEEtZQVZAAxpQAAEERkkVUQ1CDEwQTRYNEyRgRk1GAxwQXFZGWg1XGlgUR0dGSRVbEWgQXRFARlJQDFYWQ15EVEYVGlhSGmZbDVhdUQcRXl0MREACQAUWGxMMXAoIEAkWO0lRURFYGwpaDwsMXFIVTw==';
        
        // El servidor actúa como puente y transmite el video directamente a VLC
        http.get(targetUrl, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        }).on('error', (err) => {
            res.status(500).send("Error al conectar con el servidor de streaming");
        });
        
    } else {
        res.status(401).send("Usuario o contraseña incorrectos");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
