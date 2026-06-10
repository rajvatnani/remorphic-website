export type Court = {
  id: string
  name: string
  slug: string | null
  photo: string | null
  address: string | null
  price_per_slot: number | null
  phone: string | null
  owner_name: string | null
}

export type Tournament = {
  id: string
  name: string
  date: string
  venue: string
  entry_fee: number | null
  registration_link: string | null
  created_at: string
}
