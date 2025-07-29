import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://xyfyynhxgkmrjzyhxasv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5Znl5bmh4Z2ttcmp6eWh4YXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3OTE2ODAsImV4cCI6MjA2NjM2NzY4MH0.FEtbtcEFErIEFolPFS8oNULL5smqhoXmIzTIU0FrwNI';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };