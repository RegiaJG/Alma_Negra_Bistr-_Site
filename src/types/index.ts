export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export type MenuCategory = 'entradas' | 'pratos' | 'sobremesas' | 'drinks'
