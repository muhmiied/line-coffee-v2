export type WebsiteVisibility = 'visible' | 'hidden'

export type SystemStatus = 'draft' | 'active' | 'archived'

export type ProductType =
  | 'standard'
  | 'espresso_blend'
  | 'turkish_blend'
  | 'easy_coffee'
  | 'flavor_coffee'
  | 'coffee_mix'
  | 'cappuccino'
  | 'hot_chocolate'
  | 'custom_espresso'
  | 'custom_flavor'

export type PublicCategory = {
  id: string
  slug: string
  name_en: string
  name_ar: string | null
  description_en: string | null
  description_ar: string | null
  sort_order: number
  website_visibility: WebsiteVisibility
  system_status: SystemStatus
}

export type PublicProduct = {
  id: string
  category_id: string | null
  slug: string
  name_en: string
  name_ar: string | null
  description_en: string | null
  description_ar: string | null
  product_type: ProductType
  sort_order: number
  website_visibility: WebsiteVisibility
  system_status: SystemStatus
  image_url: string | null
  image_alt_en: string | null
  image_alt_ar: string | null
  image_width: number | null
  image_height: number | null
}

export type PublicProductVariant = {
  id: string
  product_id: string
  variant_name: string
  weight_value: number | null
  weight_unit: string | null
  sale_price: number
  is_default: boolean
  sort_order: number
  website_visibility: WebsiteVisibility
  system_status: SystemStatus
}

export type ProductWithVariants = PublicProduct & {
  variants: PublicProductVariant[]
}

export type CategoryWithProducts = PublicCategory & {
  products: ProductWithVariants[]
}
