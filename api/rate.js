module.exports = async function handler(req, res) {
  
  const API_KEY = process.env.CURRENCY_API_KEY;

  // Validar que la variable de entorno esté configurada
  if (!API_KEY) {
    console.error('CURRENCY_API_KEY no está configurada en las variables de entorno');
    return res.status(500).json({ 
      message: 'Error de configuración: CURRENCY_API_KEY no está definida',
      hint: 'Por favor, configura la variable de entorno CURRENCY_API_KEY en Vercel'
    });
  }

  const BASE_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=USD`;

  try {
    const apiRes = await fetch(BASE_URL);
    
    if (!apiRes.ok) {
      const errorText = await apiRes.text();
      console.error(`Error en la API externa: ${apiRes.status} ${apiRes.statusText}`, errorText);
      
      // Si es un error 401, probablemente la API key es inválida
      if (apiRes.status === 401) {
        return res.status(500).json({ 
          message: 'Error de autenticación con la API de currency',
          hint: 'Verifica que CURRENCY_API_KEY sea válida'
        });
      }
      
      throw new Error(`Error en la API externa: ${apiRes.status} ${apiRes.statusText}`);
    }

    const data = await apiRes.json();
    res.status(200).json(data);

  } catch (error) {
    console.error('Error al obtener las tasas de cambio:', error);
    res.status(500).json({ 
      message: 'Error al obtener las tasas de cambio', 
      error: error.message 
    });
  }
};
