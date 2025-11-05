module.exports = async function handler(req, res) {
  const hasApiKey = !!process.env.CURRENCY_API_KEY;
  
  res.status(200).json({ 
    message: 'API funcionando correctamente',
    status: {
      apiKeyConfigured: hasApiKey,
      hint: hasApiKey 
        ? 'CURRENCY_API_KEY está configurada' 
        : '⚠️ CURRENCY_API_KEY no está configurada. Configúrala en Vercel (Settings → Environment Variables)'
    },
    endpoints: {
      rate: '/api/rate'
    }
  });
};

