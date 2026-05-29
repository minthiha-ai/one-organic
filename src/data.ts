import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'coconut-oil',
    name: 'Extra Virgin Coconut Oil',
    price: 28.00,
    priceStr: '$28.00',
    category: 'oil',
    description: 'Cold-pressed purity for your kitchen and skin.',
    longDescription: 'Our certified organic, cold-pressed extra virgin coconut oil is extracted from fresh, hand-harvested coconuts within 4 hours. It is completely unrefined, unbleached, and non-deodorized, maintaining its pure natural aroma, rich Medium Chain Triglycerides (MCTs), and vital antioxidants.',
    benefits: [
      '100% Raw & Cold-pressed from single-origin organic groves',
      'High in Lauric Acid and health-supporting Medium Chain Triglycerides (MCTs)',
      'Zero heat processing, sulfur dioxide, or chemical additives'
    ],
    usage: [
      'Perfect for high-smoke-point cooking, baking, and bulletproof coffee blending',
      'Highly absorbable skin moisturizer and intense deep-conditioning hair treatment'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZzHdpkvqOfF4Sv9fZZ3WRD5j_7aaBXfFRDkk9aogDeNdGWx0Mfkvvef7eJ6idD4kut-4O-UJKlGD0jBiZBOX47tMfR-YlV7UpMf8zV0JLP478f5xhxVM4Gw-Rj0FpctP1rNHAtaqXH6EGrNvpDA46HaNEXTcrjC1XK_5VWLTXlen-eqRshPsfG6Ma2SiTs94pCslrKqxWId20rHG_tYYo3LUhYwKJrPF1W29nhTmf0C34pIARtXYozVrJdG3NZfcMZoCjnkFbBJo',
    badge: 'Bestseller',
    rating: 4.9,
    size: '450ml / Glass Jar',
    ingredients: '100% Certified Organic Raw Coconut Oil'
  },
  {
    id: 'coconut-milk',
    name: 'Organic Coconut Milk',
    price: 14.00,
    priceStr: '$14.00',
    category: 'pantry',
    description: 'Rich, creamy, and 100% plant-based bliss.',
    longDescription: 'Our premium, organic canned coconut milk is crafted from the first pressing of fresh coconut meat. It contains no artificial stabilizers, emulsifiers, or gums, providing a clean dairy-free alternative that has an exceptionally smooth consistency and deep, tropical flavor profile.',
    benefits: [
      'No added stabilizers, emulsifiers, guar gum, or carrageenan',
      'Smooth, velvety consistency high in natural fats',
      'Packed in BPA-Free recyclable aluminum cans'
    ],
    usage: [
      'Ideal basis for aromatic curries, rich cream soups, and spicy marinades',
      'Perfect for creamy dairy-free baking, smoothies, cocktails, and coffee'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7f-FA5mvWtfzAElMZhpLYvBVPXd3s2jlcZqlaAIjhA9r-M874vh_Z4jozAABP3_5CqO5jXdSS7gCYrilD-ul2kPXmXTEwQ1wMVFXr-TY6cdxavrT9eWstDSAKgYcq0l6t_lUwuB3IrXZQ_kffMAaaIShbL42SybG195KoQUbCWJ6LUWXbtU-oLLt2ANeSKUFg5p0f6o6U36y2-8FXdBWtwBR7o5ahV8U5Fnk3GRKjqw5ai-tzqrRmtZqy4_IvwHzVRpi3N5eg8n0',
    badge: 'USDA Organic',
    rating: 4.8,
    size: '400ml / Can',
    ingredients: 'Organic Coconut Extract, Purified Water'
  },
  {
    id: 'coconut-sugar',
    name: 'Organic Coconut Sugar',
    price: 18.00,
    priceStr: '$18.00',
    category: 'pantry',
    description: 'A low-glycemic, caramel-flavored natural sweetener.',
    longDescription: 'Harvested sustainably from the beautiful nectar of organic coconut tree blossoms, this unrefined granulated sweetener serves as a perfect 1-to-1 substitute for white cane sugar. It is rich in minerals like potassium, zinc, and iron, and carries a natural hint of butterscotch and rich caramel.',
    benefits: [
      'Low Glycemic Index (~35) offering steady, clean energy release',
      'Unrefined, unbleached, and non-deodorized granular texture',
      'Hand-crafted in micro-batches through slow firewood evaporation'
    ],
    usage: [
      'Replace cane sugar in baking or drinks in a direct 1:1 ratio',
      'Sprinkle on oatmeal, toast, or crêpes to add a comforting, woody caramel glaze'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwf3Nqju5gcDr5ZQ2Th4odPjZpd9zLwYULW8RHEkFPThwAQoHIZwbQCg6kJqzkURekBFyLcvbN6mvMUQeES2g_20H-sevnKqP0TtGAc2tgjuC9SVdGrXQZA90zUNXHbrBQNV0FMgW9YniCvBJP70SX2cw2ZqKe_hym6lpCQBLXRpYLwDFToeLrNVucqv6ZmTCvlc_S7zj8jjNDETjlSI-qRStTwDFJOAZb8_e74NH4YoKjy4v1AeCtXkyLW8_TjXRBC71Ib82HNEw',
    badge: 'Fair Trade',
    rating: 4.9,
    size: '500g / Resealable Pouch',
    ingredients: '100% Organic Coconut Blossom Nectar Granules'
  },
  {
    id: 'desiccated-coconut',
    name: 'Desiccated Coconut',
    price: 12.00,
    priceStr: '$12.00',
    category: 'pantry',
    description: 'Finely shredded flakes for baking and bowls.',
    longDescription: 'Hand-selected fresh organic coconut meats are washed, shredded, and carefully dried to preserve their natural state. Containing no added sugars, sweepings, or chemical preservatives, these ultra-fragrant fine flakes bring a delightful nutty texture and intense tropical aroma to any culinary work.',
    benefits: [
      'Rich source of clean dietary fiber and nourishing organic plant fats',
      'Entirely unsweetened, raw, and sulfur-free process',
      'Perfect snowy texture with authentic aroma'
    ],
    usage: [
      'Garnish smoothie bowls, acai bowls, yogurts, or healthy breakfast oats',
      'Premium flour alternative/inclusion for macaroons, energy balls, and baking'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgVoTCQG8eRx66xb21j8sWswBCZmMP5lDK5IOkkcjY8_hKNte0fimUpgxpvvvN1sEbF0_VmbRqF5yr_bB1WQaj_Bu0uO7Jmdi18ANy3KFDevKhq-G1yddBgF_AWqPZb0Zf3r6jHPjXu2gn-4EwhBP2l0mhS4cCdBImtMDhVfHC7NMtQcOke892PRxbiT8H878Za3KV24lVbXblibj8T4-SWtML5dqx3jePnmoGol4JDL7pxMubspkorxoqpKWVzXfowvtqkFmAlGE',
    badge: 'New Arrival',
    rating: 4.7,
    size: '250g / Biodegradable Pouch',
    ingredients: '100% Pure Organic Coconut Shreds'
  }
];

// Special images for Home teasers (as in mockup 1)
export const HOME_PRODUCTS = [
  {
    id: 'coconut-oil',
    name: 'Extra Virgin Coconut Oil',
    priceStr: '$28.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5USS3LClNEKXE2W2066UDjbWK9qzxPF_DuvEvcCUztjj86h8vI90RAEt9SEG9P9EBdTDArK0CwjS5T97CPUk_Am9kwcKBfYFXqu6cQXyV99FQHR0fwxSOjkhpLrdBgflah86HniE_qHJD8VLIYwjbCC4kO7MLxxEGVKkIj3kI2ejXvGnSdYjWZBLtAoPqaRht1VNPpwRtCO1e4boff1ANgpigqoFjNec4FiEHC2UBE_0dxwpRFEXifFITROC9zKYeveNJZVL6Qf4',
    tag: 'USDA ORGANIC'
  },
  {
    id: 'coconut-milk',
    name: 'Pure Coconut Milk',
    priceStr: '$14.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpsMfDrZ4OAvtFWibb2YenMonE8jZKhs0VxOsAHC7t5-yLLMqWjbF_TqvFl1YIwEVepYUm5Fv3gT5Q8baQGp1A5F-5m-0MhhaA-e8XKuz9_pCbFXfwLJbMmgCGIKwxI7IvJ3OStKgFbRd_wS7G-KZy02GCPNb5c_HxbCdDRS9mEYQ_ta2qtYusKSXlzSlYlRb3LesC18qDaRlN3Y8HoS-sBnl26i8WBQBLrohAvuniktXcbBIP4EhH-0FYcIsEiEL1x0GygR5TjFM'
  },
  {
    id: 'coconut-sugar',
    name: 'Organic Coconut Sugar',
    priceStr: '$18.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz3bNOXYj-oodkMxAL7UqZZJdczC_za_PJR35PaWjHqxd56SxUudZbERRjBza12ibPvdyQ7QpbgrTyuBF9cFmCje5bNajoreWn-Pb3ParfTV9t_eUPzoPRYb4X-bDlxumoFtKEQ0QnS6tJCRbxY5yJripR7FdTJZq6ve1eOf-unobxEnuA-ufN8176yywteLsIzDnwuxdFZACM71WB53hie_cYhn7WBUaqwL4bQNKwWGnrpwOtojJIV_iMA9IAdDstxDmYcfFiz5k'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Julian Wilde',
    role: 'Co-Founder & Regenerative Soil Specialist',
    quote: 'We started by listening. In coconut agroforestry, you learn that every organism sings in harmony.'
  },
  {
    name: 'Evelyn Moss',
    role: 'Co-Founder & Lead Bio-Scientist',
    quote: 'Our goal is pristine extraction: securing vital medium-chain fatty acids without carbon overhead.'
  }
];

export const REGIONAL_MARKETS = {
  thailand: {
    shopeeUrl: 'https://shopee.com',
    lazadaUrl: 'https://lazada.com'
  },
  hongkong: {
    email: 'hk@oneorganic.com'
  }
};
