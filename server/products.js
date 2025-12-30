import express from 'express';

export default function createProductsRouter(supabase) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  });

  router.get('/search', async (req, res) => {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.%${q}%,description.ilike.%${q}%,category.ilike.%${q}%,subcategory.ilike.%${q}%`);
        
      if (error) return res.status(500).json({ error: error.message });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Search failed' });
    }
  });

  router.get('/:pid', async (req, res) => {
    const { pid } = req.params;
    const { data, error } = await supabase.from('products').select('*').eq('pid', pid).single();
    if (error) return res.status(404).json({ error: 'Product not found' });
    res.json(data);
  });

  router.post('/', async (req, res) => {
    const { pid, name, category, subcategory, price, stock, availability, description, image, featured, newArrival, bestSeller, specs } = req.body;
    if (!name || !category || !price || stock == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const { data, error } = await supabase.from('products').insert([{ pid, name, category, subcategory, price, stock, availability, description, image, featured, newArrival, bestSeller, specs }]).select().single();
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
  });

  router.put('/:pid', async (req, res) => {
    const { pid } = req.params;
    const { name, category, subcategory, price, stock, availability, description, image, featured, newArrival, bestSeller, specs } = req.body;
    const { data, error } = await supabase.from('products').update({ name, category, subcategory, price, stock, availability, description, image, featured, newArrival, bestSeller, specs }).eq('pid', pid).select().single();
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  });

  router.delete('/:pid', async (req, res) => {
    const { pid } = req.params;
    const { error } = await supabase.from('products').delete().eq('pid', pid);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
  });

  return router;
}