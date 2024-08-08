import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://qjzgamjadjkxfxohxmap.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqemdhbWphZGpreGZ4b2h4bWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNDkzMDQsImV4cCI6MjAzODYyNTMwNH0.LOCSuYZXXPw3qfiIP7LGfJViOkb2GxvfHGg9dl6kHNc',
);
