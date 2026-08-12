import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ahbovoigphdlwjticrpq.supabase.co';
const supabaseKey = 'sb_publishable_wUGL_qb6HrXKiYWq0XioeA_o8JApCpD';

export const supabase = createClient(supabaseUrl, supabaseKey);
