const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const Product = require('./models/Product');
const User = require('./models/User');
const Blog = require('./models/Blog');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cctv_store';

const products = [
  // Cameras
  {
    name: 'Pro HD Dome Camera 4MP',
    description: 'High-definition 4MP dome camera with night vision capability. Perfect for indoor surveillance with a sleek, unobtrusive design. Features include wide dynamic range, motion detection, and remote viewing capability.',
    shortDescription: 'Professional 4MP dome camera with night vision',
    category: 'cameras',
    subCategory: 'dome',
    brand: 'SecureVision',
    model: 'SV-D4000',
    price: 149.99,
    salePrice: 129.99,
    onSale: true,
    stock: 50,
    sku: 'CAM-DOME-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800', alt: 'Dome Camera', isPrimary: true }
    ],
    specifications: {
      resolution: '4MP (2560x1440)',
      lens: '2.8mm fixed lens',
      nightVision: '30m IR range',
      weatherproof: 'IP66',
      connectivity: 'PoE / 12V DC',
      warranty: '3 years'
    },
    features: ['Motion Detection', 'Night Vision', 'Wide Dynamic Range', 'PoE Support', 'Mobile App Access'],
    tags: ['dome', 'indoor', '4mp', 'night vision'],
    rating: { average: 4.5, count: 128 },
    isFeatured: true
  },
  {
    name: 'Ultra HD Bullet Camera 8MP',
    description: 'Professional-grade 8MP bullet camera designed for outdoor use. Features advanced weatherproofing, long-range night vision, and smart motion detection with human/vehicle classification.',
    shortDescription: '8MP bullet camera for outdoor surveillance',
    category: 'cameras',
    subCategory: 'bullet',
    brand: 'SecureVision',
    model: 'SV-B8000',
    price: 249.99,
    stock: 35,
    sku: 'CAM-BULLET-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800', alt: 'Bullet Camera', isPrimary: true }
    ],
    specifications: {
      resolution: '8MP (3840x2160)',
      lens: '2.8-12mm motorized',
      nightVision: '50m IR range',
      weatherproof: 'IP67',
      connectivity: 'PoE / 12V DC',
      warranty: '3 years'
    },
    features: ['Smart Motion Detection', 'Human/Vehicle Classification', 'Motorized Zoom', 'IP67 Weatherproof', 'H.265+ Compression'],
    tags: ['bullet', 'outdoor', '8mp', '4k'],
    rating: { average: 4.8, count: 89 },
    isFeatured: true
  },
  {
    name: 'PTZ Camera 25X Zoom',
    description: 'Pan-Tilt-Zoom camera with 25x optical zoom for comprehensive coverage. Features auto-tracking, preset patrol patterns, and crystal clear 1080p video quality.',
    shortDescription: 'PTZ camera with 25x optical zoom',
    category: 'cameras',
    subCategory: 'ptz',
    brand: 'SecureVision',
    model: 'SV-PTZ2500',
    price: 599.99,
    salePrice: 549.99,
    onSale: true,
    stock: 15,
    sku: 'CAM-PTZ-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800', alt: 'PTZ Camera', isPrimary: true }
    ],
    specifications: {
      resolution: '2MP (1920x1080)',
      lens: '25x optical zoom',
      nightVision: '150m IR range',
      weatherproof: 'IP66',
      connectivity: 'PoE+ / 24V AC',
      warranty: '2 years'
    },
    features: ['Auto Tracking', '25x Optical Zoom', 'Preset Patterns', '360° Rotation', 'Smart Analytics'],
    tags: ['ptz', 'zoom', 'outdoor', 'auto-tracking'],
    rating: { average: 4.6, count: 45 },
    isFeatured: true
  },
  {
    name: 'Wireless WiFi Camera',
    description: 'Easy-to-install wireless camera with WiFi connectivity. Features two-way audio, motion alerts, and cloud storage options. Perfect for home security.',
    shortDescription: 'WiFi camera with two-way audio',
    category: 'cameras',
    subCategory: 'wireless',
    brand: 'HomeSafe',
    model: 'HS-WIFI100',
    price: 79.99,
    stock: 100,
    sku: 'CAM-WIFI-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'WiFi Camera', isPrimary: true }
    ],
    specifications: {
      resolution: '2MP (1920x1080)',
      lens: '3.6mm fixed',
      nightVision: '10m IR range',
      weatherproof: 'Indoor only',
      connectivity: 'WiFi 2.4GHz',
      warranty: '1 year'
    },
    features: ['Two-Way Audio', 'Motion Alerts', 'Cloud Storage', 'Easy Setup', 'Mobile App'],
    tags: ['wireless', 'wifi', 'indoor', 'home'],
    rating: { average: 4.2, count: 256 }
  },
  {
    name: 'Fisheye Panoramic Camera 12MP',
    description: '360-degree panoramic fisheye camera providing complete room coverage with a single device. Features dewarping technology and multiple viewing modes.',
    shortDescription: '360° panoramic fisheye camera',
    category: 'cameras',
    subCategory: 'fisheye',
    brand: 'SecureVision',
    model: 'SV-FE12000',
    price: 349.99,
    stock: 20,
    sku: 'CAM-FISH-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800', alt: 'Fisheye Camera', isPrimary: true }
    ],
    specifications: {
      resolution: '12MP',
      lens: '1.05mm fisheye',
      nightVision: '15m IR range',
      weatherproof: 'IP65',
      connectivity: 'PoE',
      warranty: '2 years'
    },
    features: ['360° Coverage', 'Dewarping', 'Multiple View Modes', 'PoE Support', 'Edge Storage'],
    tags: ['fisheye', 'panoramic', '360', 'indoor'],
    rating: { average: 4.4, count: 67 }
  },
  // DVRs
  {
    name: '8-Channel DVR 2TB',
    description: 'Professional 8-channel DVR with 2TB pre-installed hard drive. Supports up to 8 analog cameras with real-time recording and remote viewing.',
    shortDescription: '8-channel DVR with 2TB storage',
    category: 'dvr',
    brand: 'SecureVision',
    model: 'SV-DVR8200',
    price: 299.99,
    stock: 25,
    sku: 'DVR-8CH-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'DVR', isPrimary: true }
    ],
    specifications: {
      storage: '2TB HDD included',
      channels: '8 channels',
      resolution: '4MP recording',
      connectivity: 'HDMI, VGA, USB',
      warranty: '2 years'
    },
    features: ['Real-time Recording', 'Remote Viewing', 'Motion Detection', 'Email Alerts', 'Backup Support'],
    tags: ['dvr', '8-channel', '2tb'],
    rating: { average: 4.3, count: 98 },
    isFeatured: true
  },
  {
    name: '16-Channel DVR 4TB',
    description: 'High-capacity 16-channel DVR with 4TB storage. Perfect for medium to large businesses requiring extensive surveillance coverage.',
    shortDescription: '16-channel DVR with 4TB storage',
    category: 'dvr',
    brand: 'SecureVision',
    model: 'SV-DVR16400',
    price: 499.99,
    salePrice: 449.99,
    onSale: true,
    stock: 15,
    sku: 'DVR-16CH-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'DVR 16CH', isPrimary: true }
    ],
    specifications: {
      storage: '4TB HDD included',
      channels: '16 channels',
      resolution: '4MP recording',
      connectivity: 'HDMI, VGA, USB, eSATA',
      warranty: '2 years'
    },
    features: ['H.265+ Compression', 'Smart Playback', 'Two-Way Audio', 'RAID Support', 'Redundant Recording'],
    tags: ['dvr', '16-channel', '4tb', 'business'],
    rating: { average: 4.5, count: 56 }
  },
  // NVRs
  {
    name: '8-Channel PoE NVR 2TB',
    description: 'Network Video Recorder with 8 PoE ports for easy IP camera installation. Features plug-and-play setup and 2TB storage capacity.',
    shortDescription: '8-channel PoE NVR with 2TB',
    category: 'nvr',
    brand: 'SecureVision',
    model: 'SV-NVR8200P',
    price: 399.99,
    stock: 30,
    sku: 'NVR-8CH-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'NVR', isPrimary: true }
    ],
    specifications: {
      storage: '2TB HDD included',
      channels: '8 PoE channels',
      resolution: '8MP recording',
      connectivity: 'HDMI, VGA, USB, 8x PoE ports',
      warranty: '3 years'
    },
    features: ['PoE Built-in', 'Plug & Play', '8MP Support', 'Smart Search', 'Mobile Access'],
    tags: ['nvr', '8-channel', 'poe', '2tb'],
    rating: { average: 4.7, count: 112 },
    isFeatured: true
  },
  {
    name: '32-Channel Enterprise NVR',
    description: 'Enterprise-grade 32-channel NVR designed for large-scale deployments. Supports up to 8 SATA drives and features advanced analytics.',
    shortDescription: '32-channel enterprise NVR',
    category: 'nvr',
    brand: 'SecureVision',
    model: 'SV-NVR32E',
    price: 1299.99,
    stock: 8,
    sku: 'NVR-32CH-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Enterprise NVR', isPrimary: true }
    ],
    specifications: {
      storage: 'Up to 64TB (8x SATA)',
      channels: '32 channels',
      resolution: '12MP recording',
      connectivity: 'HDMI x2, VGA, USB 3.0',
      warranty: '3 years'
    },
    features: ['AI Analytics', 'Facial Recognition', 'License Plate Recognition', 'RAID Support', 'Redundant Power'],
    tags: ['nvr', '32-channel', 'enterprise', 'ai'],
    rating: { average: 4.9, count: 28 }
  },
  // Accessories
  {
    name: 'PoE Switch 8-Port',
    description: '8-port PoE switch with 120W total power budget. Perfect for powering IP cameras and other PoE devices.',
    shortDescription: '8-port PoE switch 120W',
    category: 'accessories',
    subCategory: 'networking',
    brand: 'NetPower',
    model: 'NP-PS8120',
    price: 89.99,
    stock: 45,
    sku: 'ACC-POE-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'PoE Switch', isPrimary: true }
    ],
    specifications: {
      ports: '8x PoE + 2x Uplink',
      power: '120W total',
      standard: '802.3af/at',
      warranty: '2 years'
    },
    features: ['120W Power Budget', 'Auto MDI/MDIX', 'Fanless Design', 'LED Indicators'],
    tags: ['poe', 'switch', 'networking'],
    rating: { average: 4.4, count: 89 }
  },
  {
    name: 'Surveillance HDD 4TB',
    description: 'Purpose-built hard drive for surveillance applications. Designed for 24/7 operation with optimized firmware for video recording.',
    shortDescription: '4TB surveillance hard drive',
    category: 'storage',
    brand: 'DataGuard',
    model: 'DG-SUR4000',
    price: 119.99,
    stock: 60,
    sku: 'STO-HDD-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'HDD', isPrimary: true }
    ],
    specifications: {
      capacity: '4TB',
      interface: 'SATA III',
      rpm: '5400 RPM',
      warranty: '3 years'
    },
    features: ['24/7 Operation', 'AllFrame Technology', 'Low Power', '180TB/year Workload'],
    tags: ['hdd', 'storage', '4tb', 'surveillance'],
    rating: { average: 4.6, count: 234 }
  },
  {
    name: '27" Security Monitor',
    description: 'Professional 27-inch security monitor with BNC and HDMI inputs. Features anti-glare screen and 24/7 operation capability.',
    shortDescription: '27" professional security monitor',
    category: 'monitors',
    brand: 'ViewSec',
    model: 'VS-MON27',
    price: 249.99,
    stock: 20,
    sku: 'MON-27-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Monitor', isPrimary: true }
    ],
    specifications: {
      size: '27 inches',
      resolution: '1920x1080',
      inputs: 'HDMI x2, VGA, BNC',
      warranty: '2 years'
    },
    features: ['24/7 Operation', 'Anti-Glare', 'Built-in Speakers', 'VESA Mount'],
    tags: ['monitor', '27-inch', 'display'],
    rating: { average: 4.3, count: 67 }
  },
  // Kits
  {
    name: '4-Camera Home Security Kit',
    description: 'Complete home security package including 4 HD cameras, 8-channel DVR with 1TB storage, cables, and all mounting hardware.',
    shortDescription: '4-camera home security kit',
    category: 'kits',
    brand: 'HomeSafe',
    model: 'HS-KIT4HD',
    price: 399.99,
    salePrice: 349.99,
    onSale: true,
    stock: 25,
    sku: 'KIT-4CAM-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Security Kit', isPrimary: true }
    ],
    specifications: {
      cameras: '4x 2MP Dome Cameras',
      storage: '1TB DVR',
      cables: '4x 60ft cables included',
      warranty: '2 years'
    },
    features: ['Easy DIY Install', 'Night Vision', 'Mobile App', 'Motion Alerts', 'Complete Package'],
    tags: ['kit', 'home', '4-camera', 'complete'],
    rating: { average: 4.5, count: 156 },
    isFeatured: true
  },
  {
    name: '8-Camera Business Security Kit',
    description: 'Professional business security system with 8 HD bullet cameras, 16-channel NVR with 4TB storage, PoE switch, and professional mounting accessories.',
    shortDescription: '8-camera business security kit',
    category: 'kits',
    brand: 'SecureVision',
    model: 'SV-KIT8PRO',
    price: 1299.99,
    salePrice: 1149.99,
    onSale: true,
    stock: 10,
    sku: 'KIT-8CAM-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Business Security Kit', isPrimary: true }
    ],
    specifications: {
      cameras: '8x 4MP Bullet Cameras',
      storage: '4TB NVR with PoE',
      extras: '8-port PoE switch included',
      warranty: '3 years'
    },
    features: ['Professional Grade', '4MP Resolution', 'PoE Installation', 'Remote Monitoring', 'Smart Analytics'],
    tags: ['kit', 'business', '8-camera', 'professional'],
    rating: { average: 4.8, count: 42 },
    isFeatured: true
  },
  // Sensors
  {
    name: 'Motion Sensor PIR',
    description: 'Passive infrared motion sensor for perimeter detection. Integrates with most security systems and features adjustable sensitivity.',
    shortDescription: 'PIR motion sensor',
    category: 'sensors',
    brand: 'SecureVision',
    model: 'SV-PIR100',
    price: 29.99,
    stock: 100,
    sku: 'SEN-PIR-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'PIR Sensor', isPrimary: true }
    ],
    specifications: {
      range: '12m detection range',
      angle: '110° detection angle',
      power: '12V DC',
      warranty: '1 year'
    },
    features: ['Adjustable Sensitivity', 'Pet Immune', 'Tamper Protection', 'LED Indicator'],
    tags: ['sensor', 'pir', 'motion', 'alarm'],
    rating: { average: 4.2, count: 89 }
  },
  {
    name: 'CAT6 Cable 1000ft',
    description: 'Professional-grade CAT6 ethernet cable for IP camera installations. UL listed and suitable for indoor/outdoor use.',
    shortDescription: 'CAT6 ethernet cable 1000ft',
    category: 'cables',
    brand: 'CablePro',
    model: 'CP-CAT6-1K',
    price: 149.99,
    stock: 30,
    sku: 'CAB-CAT6-001',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'CAT6 Cable', isPrimary: true }
    ],
    specifications: {
      length: '1000ft / 305m',
      type: 'CAT6 UTP',
      rating: 'CM/CMR rated',
      warranty: 'Lifetime'
    },
    features: ['550MHz Bandwidth', 'Solid Copper', 'Easy Pull Box', 'Sequential Marking'],
    tags: ['cable', 'cat6', 'ethernet', 'networking'],
    rating: { average: 4.7, count: 198 }
  }
];

const blogPosts = [
  {
    title: 'Top 10 CCTV Security Tips for Your Home',
    content: `
# Top 10 CCTV Security Tips for Your Home

Securing your home with CCTV cameras is one of the most effective ways to protect your family and property. Here are our top 10 tips for maximizing your home security system.

## 1. Strategic Camera Placement

Position cameras at all entry points including front and back doors, garage, and first-floor windows. Ensure cameras are placed high enough to avoid tampering but at an angle that captures faces clearly.

## 2. Don't Forget Interior Cameras

While exterior cameras are essential, interior cameras provide an additional layer of security. Place them in high-traffic areas like living rooms and hallways.

## 3. Ensure Proper Lighting

Good lighting is crucial for quality footage. Consider cameras with built-in IR for night vision, or install motion-activated lights around your property.

## 4. Regular Maintenance

Check your cameras monthly to ensure they're working properly. Clean lenses, verify recording functionality, and update firmware regularly.

## 5. Secure Your Recordings

Use encrypted storage solutions and strong passwords. Consider cloud backup for important footage.

## 6. Visible Deterrence

Make sure some cameras are visible to deter potential intruders. The presence of cameras alone can prevent many crimes.

## 7. Monitor Blind Spots

Walk around your property and identify any areas not covered by cameras. Adjust or add cameras as needed.

## 8. Quality Over Quantity

Invest in fewer high-quality cameras rather than many low-resolution ones. Clear footage is essential for identification.

## 9. Professional Installation

Consider professional installation to ensure optimal placement and proper configuration of your system.

## 10. Remote Monitoring

Set up mobile alerts and remote viewing so you can check on your home anytime, anywhere.

By following these tips, you can significantly enhance your home security and peace of mind.
    `,
    excerpt: 'Learn the top 10 essential tips for maximizing your home security with CCTV cameras.',
    category: 'tips',
    tags: ['home security', 'cctv tips', 'installation'],
    isPublished: true,
    publishedAt: new Date('2024-01-15'),
    featuredImage: { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Home Security' }
  },
  {
    title: 'Understanding IP vs Analog Cameras',
    content: `
# Understanding IP vs Analog Cameras

When choosing a CCTV system, one of the first decisions you'll face is whether to go with IP (Internet Protocol) or analog cameras. Let's break down the differences.

## Analog Cameras

### Pros:
- Lower upfront cost
- Simpler installation
- Reliable and proven technology
- Works with existing coaxial cable

### Cons:
- Lower resolution (typically up to 2MP)
- Limited scalability
- Requires DVR for recording
- No power over cable option

## IP Cameras

### Pros:
- Higher resolution (up to 12MP and beyond)
- Power over Ethernet (PoE) option
- Advanced features (analytics, zoom)
- Easy scalability
- Remote accessibility

### Cons:
- Higher initial investment
- Requires network infrastructure
- More complex setup

## Which Should You Choose?

For small residential applications with limited budget, analog systems may suffice. However, for businesses or those wanting the best image quality and features, IP cameras are the clear choice.

The gap in pricing has narrowed significantly, making IP cameras increasingly accessible for home users as well.
    `,
    excerpt: 'A comprehensive comparison between IP and analog CCTV cameras to help you make the right choice.',
    category: 'guides',
    tags: ['ip cameras', 'analog cameras', 'comparison'],
    isPublished: true,
    publishedAt: new Date('2024-02-01'),
    featuredImage: { url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800', alt: 'Camera Comparison' }
  },
  {
    title: 'New 4K Camera Technology Trends in 2024',
    content: `
# New 4K Camera Technology Trends in 2024

The surveillance industry continues to evolve rapidly. Here are the key technology trends shaping CCTV in 2024.

## 1. AI-Powered Analytics

Modern cameras now include built-in AI capabilities for:
- Facial recognition
- License plate recognition
- Object detection and classification
- Behavioral analysis

## 2. 4K and Beyond

4K (8MP) cameras have become mainstream, with 12MP and even 16MP cameras emerging for applications requiring extreme detail.

## 3. Cloud Integration

Hybrid cloud solutions are becoming standard, offering:
- Remote storage backup
- Easy scaling
- Reduced on-site hardware
- Enhanced accessibility

## 4. Cybersecurity Focus

With increasing cyber threats, manufacturers are prioritizing:
- End-to-end encryption
- Regular security updates
- Zero-trust architecture
- Secure boot processes

## 5. Edge Computing

Processing at the camera level reduces bandwidth and enables faster response times for critical security events.

Stay ahead of the curve by considering these technologies for your next security upgrade.
    `,
    excerpt: 'Discover the latest trends in 4K CCTV camera technology for 2024.',
    category: 'technology',
    tags: ['4k', 'technology', 'trends', 'ai'],
    isPublished: true,
    publishedAt: new Date('2024-03-01'),
    featuredImage: { url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800', alt: '4K Technology' }
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await Blog.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user if doesn't exist
    const existingAdmin = await User.findOne({ email: 'admin@cctvequipment.com' });
    let adminUser;
    
    if (!existingAdmin) {
      adminUser = await User.create({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@cctvequipment.com',
        password: 'admin123',
        role: 'admin'
      });
      console.log('Admin user created');
    } else {
      adminUser = existingAdmin;
      console.log('Admin user already exists');
    }

    // Seed products
    await Product.insertMany(products);
    console.log(`${products.length} products seeded`);

    // Seed blog posts with admin as author
    const postsWithAuthor = blogPosts.map(post => ({
      ...post,
      author: adminUser._id
    }));
    await Blog.insertMany(postsWithAuthor);
    console.log(`${blogPosts.length} blog posts seeded`);

    console.log('Database seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seedDatabase();

