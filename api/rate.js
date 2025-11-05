export default async function handler(req, res) {
  
  const API_KEY = process.env.CURRENCY_API_KEY;

  const BASE_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=USD`;

  try {
    const apiRes = await fetch(BASE_URL);
    if (!apiRes.ok) {
      throw new Error(`Error en la API externa: ${apiRes.statusText}`);
    }

    const data = await apiRes.json();
    res.status(200).json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las tasas de cambio', error: error.message });
  }
}
