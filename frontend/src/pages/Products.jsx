import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Filter, Search, Grid, List, X, 
  Phone, Mail, Lightbulb, Eye, Sun, Lamp, FlashlightOff, 
  Footprints, Factory, Radio, Radar, SunDim, Flame,
  Cylinder, LayoutGrid, Square, LampDesk, CircleDot, Zap, Disc
} from 'lucide-react'

const allProducts = [
  // ============ MOTION SENSOR LIGHTS ============
  
  // Smart Motion Sensor Moon Light
  {
    id: 'PML01',
    name: 'Smart Motion Sensor Moon Light',
    code: 'IHT-PML01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Moon Light',
    specs: '10W',
    model: '6 inches',
    image: '/high-bay-1.webp',
    features: ['Motion Sensor', '10W', '6 inches'],
    description: 'Smart motion sensor moon light for outdoor lighting'
  },
  {
    id: 'PML02',
    name: 'Smart Motion Sensor Moon Light',
    code: 'IHT-PML02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Moon Light',
    specs: '20W',
    model: '8 inches',
    image: '/high-bay-1.webp',
    features: ['Motion Sensor', '20W', '8 inches'],
    description: 'Smart motion sensor moon light for outdoor lighting'
  },

  // Garden Light - with Sensor
  {
    id: 'PGL01',
    name: 'Smart LED Gate Light - 2" pipe',
    code: 'IHT-PGL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Garden Light',
    specs: '20W',
    model: 'Square',
    image: '/gate-light-1.webp',
    features: ['Motion Sensor', 'LDR', '20W', 'Square'],
    description: 'Garden light with inbuilt motion sensor and LDR'
  },
  {
    id: 'PGL02',
    name: 'Smart LED Gate Light - 2" pipe',
    code: 'IHT-PGL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Garden Light',
    specs: '15W',
    model: 'Square',
    image: '/gate-light-2.webp',
    features: ['Motion Sensor', 'LDR', '15W', 'Square'],
    description: 'Garden light with inbuilt motion sensor and LDR'
  },

  // Flood Light - with Sensor
  {
    id: 'PFDL01',
    name: 'Smart LED Flood Light',
    code: 'IHT-PFDL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Flood Light',
    specs: '50W',
    model: 'Square',
    image: '/flood-light-1.jpg',
    features: ['Motion Sensor', 'LDR', '50W', 'Square'],
    description: 'Smart LED flood light with inbuilt motion sensor and LDR'
  },
  {
    id: 'PFDL02',
    name: 'Smart LED Flood Light',
    code: 'IHT-PFDL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Flood Light',
    specs: '100W',
    model: 'Square',
    image: '/flood-light-2.jpg',
    features: ['Motion Sensor', 'LDR', '100W', 'Square'],
    description: 'Smart LED flood light with inbuilt motion sensor and LDR'
  },
  {
    id: 'PFDL03',
    name: 'Smart LED Flood Light',
    code: 'IHT-PFDL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Flood Light',
    specs: '150W',
    model: 'Square',
    image: '/flood-light-3.jpg',
    features: ['Motion Sensor', 'LDR', '150W', 'Square'],
    description: 'Smart LED flood light with inbuilt motion sensor and LDR'
  },
  {
    id: 'PFDL04',
    name: 'Smart LED Flood Light',
    code: 'IHT-PFDL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Flood Light',
    specs: '200W',
    model: 'Square',
    image: '/flood-light-4.webp',
    features: ['Motion Sensor', 'LDR', '200W', 'Square'],
    description: 'Smart LED flood light with inbuilt motion sensor and LDR'
  },

  // Foot Lamp - with Sensor
  {
    id: 'PFL01',
    name: 'Foot / Step Light',
    code: 'IHT-PFL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Foot Lamp',
    specs: '2W',
    model: '2/3/4 M',
    image: '/foot-lamp.webp',
    features: ['Motion Sensor', '2W', '2/3/4 Module'],
    description: 'Foot lamp with inbuilt motion sensor for stairways'
  },

  // High Bay with Sensor
  {
    id: 'PHL01',
    name: 'Smart High Bay',
    code: 'IHT-PHL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'High Bay',
    specs: '50W',
    model: 'Round',
    image: '/high-bay-1.webp',
    features: ['Motion Sensor', '50W', 'Round', 'Dimming'],
    description: 'Smart high bay light with inbuilt motion sensor and dimming'
  },
  {
    id: 'PHL02',
    name: 'Smart High Bay',
    code: 'IHT-PHL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'High Bay',
    specs: '100W',
    model: 'Round',
    image: '/high-bay-2.jpg',
    features: ['Motion Sensor', '100W', 'Round', 'Dimming'],
    description: 'Smart high bay light with inbuilt motion sensor and dimming'
  },
  {
    id: 'PHL03',
    name: 'Smart High Bay',
    code: 'IHT-PHL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'High Bay',
    specs: '150W',
    model: 'Round',
    image: '/high-bay-3.webp',
    features: ['Motion Sensor', '150W', 'Round', 'Dimming'],
    description: 'Smart high bay light with inbuilt motion sensor and dimming'
  },
  {
    id: 'PHL04',
    name: 'Smart High Bay',
    code: 'IHT-PHL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'High Bay',
    specs: '200W',
    model: 'Round',
    image: '/high-bay-4.jpg',
    features: ['Motion Sensor', '200W', 'Round', 'Dimming'],
    description: 'Smart high bay light with inbuilt motion sensor and dimming'
  },

  // Tube Lights - with Sensor
  {
    id: 'PTL01',
    name: '2 Feet - 10w Tube Light',
    code: 'IHT-PTL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '10W',
    model: 'T5 Plastic',
    image: '/tube-light-2ft-1.webp',
    features: ['Motion Sensor', 'Auto Dimming', '2 Feet', 'Plastic'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL02',
    name: '4 Feet - 20w Tube Light',
    code: 'IHT-PTL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '20W',
    model: 'T5 Plastic',
    image: '/tube-light-4ft-1.webp',
    features: ['Motion Sensor', 'Auto Dimming', '4 Feet', 'Plastic'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL03',
    name: '4 Feet - 40w Tube Light',
    code: 'IHT-PTL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '40W',
    model: 'T5/T8 Plastic',
    image: '/tube-light-4ft-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '4 Feet', 'Plastic'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL04',
    name: '2 Feet - 20w Tube Light',
    code: 'IHT-PTL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '20W',
    model: 'T5/T8 Plastic',
    image: '/tube-light-2ft-2.webp',
    features: ['Motion Sensor', 'Auto Dimming', '2 Feet', 'Plastic'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL05',
    name: '2 Feet - 10w Tube Light',
    code: 'IHT-PTL05',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '10W',
    model: 'T5/T8 Aluminum',
    image: '/tube-light-2ft-3.webp',
    features: ['Motion Sensor', 'Auto Dimming', '2 Feet', 'Aluminum'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL06',
    name: '2 Feet - 20w Tube Light',
    code: 'IHT-PTL06',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '20W',
    model: 'T5/T8 Aluminum',
    image: '/tube-light-2ft-4.webp',
    features: ['Motion Sensor', 'Auto Dimming', '2 Feet', 'Aluminum'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL07',
    name: '4 Feet - 20w Tube Light',
    code: 'IHT-PTL07',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '20W',
    model: 'T5/T8 Aluminum',
    image: '/tube-light-4ft-3.webp',
    features: ['Motion Sensor', 'Auto Dimming', '4 Feet', 'Aluminum'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PTL08',
    name: '4 Feet - 40w Tube Light',
    code: 'IHT-PTL08',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Tube Light',
    specs: '40W',
    model: 'T5/T8 Aluminum',
    image: '/tube-light-4ft-4.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '4 Feet', 'Aluminum'],
    description: 'Tube light with inbuilt motion sensor and auto dimming'
  },

  // Concealed Panel Light - with Sensor
  {
    id: 'PPL01',
    name: 'Panel Light - Plastic 12w/15w/20w',
    code: 'IHT-PPL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '12w/15w/20w',
    model: '6 inches Round/Square',
    image: '/panel-plastic-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '6 inches', 'Plastic'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL02',
    name: 'Panel Light - Plastic 10w/15w/18w',
    code: 'IHT-PPL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '10w/15w/18w',
    model: '5 inches Round/Square',
    image: '/panel-plastic-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '5 inches', 'Plastic'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL03',
    name: 'Panel Light - Plastic 7w/9w/12w',
    code: 'IHT-PPL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '7w/9w/12w',
    model: '4 inches Round/Square',
    image: '/panel-plastic-3.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '4 inches', 'Plastic'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL04',
    name: 'Panel Light - Metal 12w/15w',
    code: 'IHT-PPL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '12w/15w',
    model: '6 inches Round/Square',
    image: '/panel-plastic-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '6 inches', 'Metal'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL05',
    name: 'Panel Light - Metal 15w/18w',
    code: 'IHT-PPL05',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '15w/18w',
    model: '7 inches Round/Square',
    image: '/panel-plastic-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '7 inches', 'Metal'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL06',
    name: 'Panel Light - Metal 18W/22w',
    code: 'IHT-PPL06',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '18W/22w',
    model: '8 inches Round/Square',
    image: '/panel-plastic-3.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '8 inches', 'Metal'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL07',
    name: 'Panel Light - Metal 9w/12W',
    code: 'IHT-PPL07',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '9w/12W',
    model: '5 inches Round/Square',
    image: '/panel-plastic-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '5 inches', 'Metal'],
    description: 'Concealed panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PPL08',
    name: 'Panel Light - Metal (on off) 7w/9w',
    code: 'IHT-PPL08',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Concealed Panel Light',
    specs: '7w/9w',
    model: '4 inches Round/Square',
    image: '/panel-plastic-3.jpg',
    features: ['Motion Sensor', 'On/Off', '4 inches', 'Metal'],
    description: 'Concealed panel light with inbuilt motion sensor'
  },

  // Surface Panel Light - with Sensor
  {
    id: 'PSL01',
    name: 'Surface Light - Plastic Dim 12w/15w/20w',
    code: 'IHT-PSL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Surface Panel Light',
    specs: '12w/15w/20w',
    model: '6 inches Round - Dim',
    image: '/surface-panel-1.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '6 inches', 'Plastic'],
    description: 'Surface panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSL02',
    name: 'Surface Light - Metal 12w/15w',
    code: 'IHT-PSL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Surface Panel Light',
    specs: '12w/15w',
    model: '6 inches Round/Square',
    image: '/surface-panel-2.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '6 inches', 'Metal'],
    description: 'Surface panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSL03',
    name: 'Surface Light - Metal 9w/12w',
    code: 'IHT-PSL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Surface Panel Light',
    specs: '9w/12w',
    model: '5 inches Round/Square',
    image: '/surface-panel-3.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '5 inches', 'Metal'],
    description: 'Surface panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSL04',
    name: 'Surface Light - Metal (on off) 7w/9w',
    code: 'IHT-PSL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Surface Panel Light',
    specs: '7w/9w',
    model: '4 inches Round/Square',
    image: '/surface-panel-4.jpg',
    features: ['Motion Sensor', 'On/Off', '4 inches', 'Metal'],
    description: 'Surface panel light with inbuilt motion sensor'
  },
  {
    id: 'PSL05',
    name: 'Surface Light - Metal 18w/22w',
    code: 'IHT-PSL05',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Surface Panel Light',
    specs: '18w/22w',
    model: '8 inches Round/Square',
    image: '/surface-panel-5.jpg',
    features: ['Motion Sensor', 'Auto Dimming', '8 inches', 'Metal'],
    description: 'Surface panel light with inbuilt motion sensor and auto dimming'
  },

  // Street Light - with Sensor
  {
    id: 'PSTL01',
    name: '24W Street Light - 4 KV Protection',
    code: 'IHT-PSTL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '24W',
    model: 'Lence - Pipe 45',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '4KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSTL02',
    name: '36W Street Light - 6 KV Protection',
    code: 'IHT-PSTL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '36W',
    model: 'Lence - Pipe 45',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '6KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSTL03',
    name: '50W Street Light - 6 KV Protection',
    code: 'IHT-PSTL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '50W',
    model: 'Lence - Pipe 47',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '6KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSTL04',
    name: '72W Street Light - 6 KV Protection',
    code: 'IHT-PSTL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '72W',
    model: 'Lence - Pipe 47',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '6KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSTL05',
    name: '100W Street Light - 6 KV Protection',
    code: 'IHT-PSTL05',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '100W',
    model: 'Lence - Pipe 47',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '6KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSTL06',
    name: '150W Street Light - 6 KV Protection',
    code: 'IHT-PSTL06',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '150W',
    model: 'Lence - Pipe 65',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '6KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PSTL07',
    name: '200W Street Light - 6 KV Protection',
    code: 'IHT-PSTL07',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'Street Light',
    specs: '200W',
    model: 'Lence - Pipe 65',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '6KV Protection', 'Lence'],
    description: 'Street light with inbuilt motion sensor and auto dimming'
  },

  // 2x2 Panel Light - with Sensor
  {
    id: '2X2PL01',
    name: '36W Panel Light Dimming',
    code: 'IHT-2X2PL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: '2x2 Panel Light',
    specs: '36W',
    model: '2x2 Concealed',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '2x2', 'Concealed'],
    description: '2x2 panel light with inbuilt motion sensor and auto dimming'
  },
  {
    id: '2X2PL02',
    name: '50W Panel Light Dimming',
    code: 'IHT-2X2PL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: '2x2 Panel Light',
    specs: '50W',
    model: '2x2 Concealed',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '2x2', 'Concealed'],
    description: '2x2 panel light with inbuilt motion sensor and auto dimming'
  },

  // COB Light - with Sensor
  {
    id: 'PCL01',
    name: 'Smart COB Light - Std (on off)',
    code: 'IHT-PCL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'COB Light',
    specs: '7W',
    model: 'Concealed',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'On/Off', '7W', 'Concealed'],
    description: 'COB light with inbuilt motion sensor'
  },
  {
    id: 'PCL02',
    name: 'Smart COB Light - Std',
    code: 'IHT-PCL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'COB Light',
    specs: '9W',
    model: 'Concealed',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '9W', 'Concealed'],
    description: 'COB light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PCL03',
    name: 'Smart COB Light - Std',
    code: 'IHT-PCL03',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'COB Light',
    specs: '12W',
    model: 'Concealed',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '12W', 'Concealed'],
    description: 'COB light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PCL04',
    name: 'Smart COB Light - Std',
    code: 'IHT-PCL04',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'COB Light',
    specs: '15W',
    model: 'Concealed',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '15W', 'Concealed'],
    description: 'COB light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PCL05',
    name: 'Smart COB Light - Delta',
    code: 'IHT-PCL05',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'COB Light',
    specs: '9W',
    model: 'Concealed Delta',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '9W', 'Delta'],
    description: 'COB Delta light with inbuilt motion sensor and auto dimming'
  },
  {
    id: 'PCL06',
    name: 'Smart COB Light - Delta',
    code: 'IHT-PCL06',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'COB Light',
    specs: '12W',
    model: 'Concealed Delta',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '12W', 'Delta'],
    description: 'COB Delta light with inbuilt motion sensor and auto dimming'
  },

  // BulkHead Light - with Sensor
  {
    id: 'PBL01',
    name: 'Smart BulkHead Light',
    code: 'IHT-PBL01',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'BulkHead Light',
    specs: '10W',
    model: 'Oblong',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '10W', 'Oblong'],
    description: 'BulkHead light with motion sensor and auto dimming or on/off'
  },
  {
    id: 'PBL02',
    name: 'Smart BulkHead Light',
    code: 'IHT-PBL02',
    brand: 'Inzaus',
    category: 'motion-lights',
    subCategory: 'BulkHead Light',
    specs: '20W',
    model: 'Oblong',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Motion Sensor', 'Auto Dimming', '20W', 'Oblong'],
    description: 'BulkHead light with motion sensor and auto dimming or on/off'
  },

  // ============ SENSORS ============

  // Motion Sensor Mini - PIR
  {
    id: 'S24',
    name: 'Inzaus Motion Sensor Mini - PIR',
    code: 'S-24',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Motion Sensor',
    specs: '8m Range',
    model: 'Surface',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['PIR Sensor', '8m Range', 'Surface Mount'],
    description: 'Mini PIR motion sensor for surface mounting'
  },
  {
    id: 'S24A',
    name: 'Inzaus Motion Sensor Tiny - PIR',
    code: 'S-24 A',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Motion Sensor',
    specs: '6m Range',
    model: 'Ceiling',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['PIR Sensor', '6m Range', 'Ceiling Mount'],
    description: 'Tiny PIR motion sensor for ceiling mounting'
  },

  // Occupancy Presence Sensor
  {
    id: 'S2733',
    name: 'Inzaus Occupancy Presence Sensor',
    code: 'S-27/33',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Occupancy Sensor',
    specs: '6m Range',
    model: 'Ceiling',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    features: ['Presence Detection', '6m Range', 'Ceiling Mount'],
    description: 'Occupancy presence sensor for automatic lighting control'
  },

  // Sensor Switch - Microwave
  {
    id: 'S29',
    name: 'Sensor Switch - Microwave',
    code: 'S-29',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Microwave Sensor',
    specs: '8m Range',
    model: 'Any',
    image: '/sensor-switch-microwave.webp',
    features: ['Microwave', '8m Range', 'Universal Mount'],
    description: 'Microwave sensor switch for any mounting position'
  },

  // Microwave Sensor
  {
    id: 'S30',
    name: 'Microwave Sensor',
    code: 'S-30',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Microwave Sensor',
    specs: '12m Range',
    model: 'Surface',
    image: '/microwave-sensor.png',
    features: ['Microwave', '12m Range', 'Surface Mount'],
    description: 'High range microwave sensor for surface mounting'
  },
  {
    id: 'S31',
    name: 'Microwave Sensor',
    code: 'S-31',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Microwave Sensor',
    specs: '12m Range',
    model: 'Surface',
    image: '/microwave-sensor.png',
    features: ['Microwave', '12m Range', 'Surface Mount'],
    description: 'High range microwave sensor for surface mounting'
  },

  // LDR Sensor
  {
    id: 'LDR',
    name: 'LDR Sensor',
    code: 'LDR',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'LDR Sensor',
    specs: 'Light Dependent',
    model: 'Surface',
    image: '/ldr-sensor.jpg',
    features: ['Light Sensing', 'Auto Control', 'Surface Mount'],
    description: 'LDR sensor for automatic day/night light control'
  },

  // Smoke Sensor
  {
    id: 'SS25',
    name: 'Inzaus Smoke Sensor',
    code: 'SS-25',
    brand: 'Inzaus',
    category: 'sensors',
    subCategory: 'Smoke Sensor',
    specs: 'Smoke Detection',
    model: 'Ceiling',
    image: '/smoke-sensor.webp',
    features: ['Smoke Detection', 'Alert System', 'Ceiling Mount'],
    description: 'Smoke sensor for fire safety and early detection'
  },

]

const categories = [
  { value: '', label: 'All Products', icon: Grid, type: 'main' },
  
  // Motion Sensor Lights
  { value: 'motion-lights', label: 'Motion Sensor Lights', icon: Lightbulb, type: 'main' },
  { value: 'Moon Light', label: 'Moon Light', icon: Sun, type: 'sub', parent: 'motion-lights' },
  { value: 'Garden Light', label: 'Garden Light', icon: Lamp, type: 'sub', parent: 'motion-lights' },
  { value: 'Flood Light', label: 'Flood Light', icon: FlashlightOff, type: 'sub', parent: 'motion-lights' },
  { value: 'Foot Lamp', label: 'Foot Lamp', icon: Footprints, type: 'sub', parent: 'motion-lights' },
  { value: 'High Bay', label: 'High Bay', icon: Factory, type: 'sub', parent: 'motion-lights' },
  { value: 'Tube Light', label: 'Tube Light', icon: Cylinder, type: 'sub', parent: 'motion-lights' },
  { value: 'Concealed Panel Light', label: 'Concealed Panel Light', icon: Square, type: 'sub', parent: 'motion-lights' },
  { value: 'Surface Panel Light', label: 'Surface Panel Light', icon: LayoutGrid, type: 'sub', parent: 'motion-lights' },
  { value: 'Street Light', label: 'Street Light', icon: LampDesk, type: 'sub', parent: 'motion-lights' },
  { value: '2x2 Panel Light', label: '2x2 Panel Light', icon: LayoutGrid, type: 'sub', parent: 'motion-lights' },
  { value: 'COB Light', label: 'COB Light', icon: CircleDot, type: 'sub', parent: 'motion-lights' },
  { value: 'BulkHead Light', label: 'BulkHead Light', icon: Disc, type: 'sub', parent: 'motion-lights' },
  
  // Sensors
  { value: 'sensors', label: 'Sensors', icon: Eye, type: 'main' },
  { value: 'Motion Sensor', label: 'Motion Sensor', icon: Radio, type: 'sub', parent: 'sensors' },
  { value: 'Occupancy Sensor', label: 'Occupancy Sensor', icon: Radar, type: 'sub', parent: 'sensors' },
  { value: 'Microwave Sensor', label: 'Microwave Sensor', icon: Radar, type: 'sub', parent: 'sensors' },
  { value: 'LDR Sensor', label: 'LDR Sensor', icon: SunDim, type: 'sub', parent: 'sensors' },
  { value: 'Smoke Sensor', label: 'Smoke Sensor', icon: Flame, type: 'sub', parent: 'sensors' },
]

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = allProducts.filter(product => {
    // Check if it's a main category or subcategory filter
    const selectedCat = categories.find(c => c.value === selectedCategory)
    const matchesCategory = !selectedCategory || 
      product.category === selectedCategory || 
      product.subCategory === selectedCategory
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Group products by subcategory for better display
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const key = product.subCategory || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(product)
    return acc
  }, {})

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-slate-400 max-w-2xl text-lg mx-auto">
              Quality security, automation, and lighting equipment from trusted brands. 
              Contact us for pricing and installation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Search */}
              <div>
                <h3 className="text-white font-semibold mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="input-field pl-10 text-sm"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Categories</h3>
                  {(selectedCategory || searchQuery) && (
                    <button
                      onClick={() => { setSelectedCategory(''); setSearchQuery(''); }}
                      className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                    >
                      <X size={12} />
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`w-full text-left rounded-xl transition-all flex items-center gap-3 ${
                        cat.type === 'sub' ? 'pl-8 pr-4 py-2' : 'px-4 py-2.5'
                      } ${
                        selectedCategory === cat.value
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : cat.type === 'main' 
                            ? 'text-slate-300 hover:bg-slate-800/50 hover:text-white font-medium'
                            : 'text-slate-500 hover:bg-slate-800/30 hover:text-slate-300'
                      }`}
                    >
                      <cat.icon size={cat.type === 'sub' ? 14 : 18} />
                      <span className={cat.type === 'sub' ? 'text-xs' : 'text-sm'}>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl">
                <h4 className="text-white font-semibold mb-2">Need Help?</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Contact us for product recommendations and quotes
                </p>
                <Link to="/contact" className="btn-primary w-full text-center text-sm py-2.5">
                  Get in Touch
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 text-white rounded-xl border border-slate-700/50"
                >
                  <Filter size={18} />
                  Filters
                </button>
                <p className="text-slate-400">
                  Showing <span className="text-white font-medium">{filteredProducts.length}</span> products
                </p>
                
                {/* Active Filters */}
                {(selectedCategory || searchQuery) && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedCategory && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm rounded-lg border border-cyan-500/30">
                        {categories.find(c => c.value === selectedCategory)?.label}
                        <button 
                          onClick={() => setSelectedCategory('')}
                          className="hover:text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm rounded-lg border border-emerald-500/30">
                        "{searchQuery}"
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="hover:text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    )}
                    <button
                      onClick={() => { setSelectedCategory(''); setSearchQuery(''); }}
                      className="text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 p-1 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Products Display */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">No products found</h3>
                <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
                <button 
                  onClick={() => { setSelectedCategory(''); setSearchQuery(''); }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {Object.entries(groupedProducts).map(([subCategory, products]) => (
                  <div key={subCategory}>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full" />
                      {subCategory}
                      <span className="text-sm font-normal text-slate-500">({products.length})</span>
                    </h2>
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                      {products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                          className="card p-4 group hover-lift"
                        >
                          <div className="aspect-video bg-slate-800/50 rounded-xl overflow-hidden mb-4 relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-2 left-2">
                              <span className="px-2 py-1 bg-cyan-500/90 text-white text-xs font-medium rounded-lg">
                                {product.code}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-xs text-cyan-400 font-medium uppercase tracking-wider mb-1">
                            {product.brand}
                          </p>
                          <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                            {product.name}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                            <span>{product.specs}</span>
                            <span>•</span>
                            <span>{product.model}</span>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {product.features.slice(0, 3).map((feature, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-slate-800/80 text-slate-400 rounded-lg border border-slate-700/30">
                                {feature}
                              </span>
                            ))}
                          </div>

                          <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium group"
                          >
                            Get Quote
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Banner */}
            <div className="mt-16 p-8 bg-gradient-to-r from-cyan-600/10 via-emerald-500/10 to-cyan-600/10 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Interested in our products?</h3>
                  <p className="text-slate-400">Contact us for pricing, installation, and support in Vijayawada</p>
                </div>
                <div className="flex gap-3">
                  <a href="tel:+919876543210" className="btn-secondary flex items-center gap-2">
                    <Phone size={18} />
                    Call Us
                  </a>
                  <Link to="/contact" className="btn-primary flex items-center gap-2">
                    <Mail size={18} />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="absolute left-0 top-0 h-full w-80 max-w-[90vw] bg-slate-900 p-6 overflow-y-auto border-r border-slate-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="p-2 text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Search</h3>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input-field"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Categories</h3>
                  {(selectedCategory || searchQuery) && (
                    <button
                      onClick={() => { setSelectedCategory(''); setSearchQuery(''); }}
                      className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                    >
                      <X size={12} />
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setSelectedCategory(cat.value)
                        setShowFilters(false)
                      }}
                      className={`w-full text-left rounded-xl flex items-center gap-3 ${
                        cat.type === 'sub' ? 'pl-8 pr-4 py-2' : 'px-4 py-2.5'
                      } ${
                        selectedCategory === cat.value
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : cat.type === 'main'
                            ? 'text-slate-300 hover:text-white font-medium'
                            : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <cat.icon size={cat.type === 'sub' ? 14 : 18} />
                      <span className={cat.type === 'sub' ? 'text-xs' : 'text-sm'}>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Products
