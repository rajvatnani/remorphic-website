'use server'

import { supabase } from '@/lib/supabase'

export async function submitContactForm(formData: FormData) {
  const name = (formData.get('name') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const court_name = (formData.get('court_name') as string)?.trim() || null

  if (!name || !email) {
    return { error: 'Name and email are required.' }
  }

  const { error } = await supabase.from('pickleball_leads').insert({
    name,
    phone: phone || null,
    email,
    court_name,
  })

  if (error) {
    return { error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
