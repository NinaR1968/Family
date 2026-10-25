import { supabase } from '../lib/supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }
  try {
    const { error } = await supabase.from('recipes').select('id').limit(1);
    if (error) throw error;
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('health failed', err);
    return res.status(500).json({ ok: false, error: 'unavailable' });
  }
}
