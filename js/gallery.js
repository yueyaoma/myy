// Gallery functionality

// DOM Elements
const galleryContainer = document.querySelector('.gallery-container');
const galleryFilters = document.querySelectorAll('.gallery-filter .filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Gallery data
const galleryItems = [
  {
    id: 1,
    title: '山水风景',
    category: 'travel',
    imgUrl: 'images/gallery/travel/travel-1.jpg'
  },
  {
    id: 2,
    title: '城市夜景',
    category: 'travel',
    imgUrl: 'images/gallery/travel/travel-2.jpg'
  },
  {
    id: 3,
    title: '花卉特写',
    category: 'nature',
    imgUrl: 'images/gallery/nature/nature-1.jpg'
  },
  {
    id: 4,
    title: '海滩日落',
    category: 'travel',
    imgUrl: 'images/gallery/travel/travel-3.jpg'
  },
  {
    id: 5,
    title: '微距自然',
    category: 'nature',
    imgUrl: 'images/gallery/nature/nature-2.jpg'
  },
  {
    id: 6,
    title: '人像摄影',
    category: 'portrait',
    imgUrl: 'images/gallery/portrait/portrait-1.jpg'
  },
  {
    id: 7,
    title: '创意人像',
    category: 'portrait',
    imgUrl: 'images/gallery/portrait/portrait-2.jpg'
  },
  {
    id: 8,
    title: '山峰云海',
    category: 'nature',
    imgUrl: 'images/gallery/nature/nature-3.jpg'
  },
  {
    id: 9,
    title: '历史建筑',
    category: 'travel',
    imgUrl: 'images/gallery/travel/travel-4.jpg'
  },
  {
    id: 10,
    title: '生活剪影',
    category: 'portrait',
    imgUrl: 'images/gallery/portrait/portrait-3.jpg'
  },
  {
    id: 11,
    title: '森林小路',
    category: 'nature',
    imgUrl: 'images/gallery/nature/nature-4.jpg'
  },
  {
    id: 12,
    title: '旅途记忆',
    category: 'travel',
    imgUrl: 'images/gallery/travel/travel-5.jpg'
  }
];