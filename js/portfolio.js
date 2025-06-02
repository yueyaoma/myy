// Portfolio functionality

// DOM Elements
const portfolioGrid = document.querySelector('.portfolio-grid');
const portfolioFilters = document.querySelectorAll('.portfolio-filter .filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: '金融数据分析',
    category: 'project',
    description: '使用Python进行金融市场数据分析与可视化',
    imgUrl: 'images/project-1.jpg'
  },
  {
    id: 2,
    title: '山水画作',
    category: 'art',
    description: '传统山水画技法与现代元素的结合',
    imgUrl: 'images/art-1.jpg'
  },
  {
    id: 3,
    title: '城市风光',
    category: 'photography',
    description: '城市建筑与人文景观的摄影作品',
    imgUrl: 'images/photo-1.jpg'
  },
  {
    id: 4,
    title: '金融科技应用',
    category: 'project',
    description: '基于区块链的金融科技应用开发',
    imgUrl: 'images/project-2.jpg'
  },
  {
    id: 5,
    title: '人物速写',
    category: 'art',
    description: '捕捉人物神态与动态的速写作品',
    imgUrl: 'images/art-2.jpg'
  },
  {
    id: 6,
    title: '自然风光',
    category: 'photography',
    description: '大自然的壮丽景色与微妙细节',
    imgUrl: 'images/photo-2.jpg'
  },
  {
    id: 7,
    title: '数据可视化研究',
    category: 'project',
    description: '金融数据的可视化表达与分析',
    imgUrl: 'images/project-3.jpg'
  },
  {
    id: 8,
    title: '抽象艺术',
    category: 'art',
    description: '色彩与形式的抽象表达',
    imgUrl: 'images/art-3.jpg'
  },
  {
    id: 9,
    title: '人像摄影',
    category: 'photography',
    description: '捕捉人物表情与情感的摄影作品',
    imgUrl: 'images/photo-3.jpg'
  }
];
