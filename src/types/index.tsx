export interface Product {
  _id?: string;
  url?: string;
  name?: string;
  price?: string;
  content?: string;
  avatar_url?: string;
  image_urls: any[];
  scrape_status?: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
  platform_type?: string;
  out_of_stock?: boolean;
  transform_data?: any;
}
