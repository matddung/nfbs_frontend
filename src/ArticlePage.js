import React from 'react'
import { CategoryTabs } from './CategoryTabs'
import { NewsCard } from './NewsCard'

const categories = ['전체', '정치', '경제', '사회', '문화', '스포츠']

// 더미 뉴스 데이터
const newsItems = [
  {
    id: '1',
    title: '뉴스 제목 1',
    description:
      '이것은 뉴스 1의 내용입니다. 실제 뉴스에서는 더 자세한 내용이 들어갑니다.',
    date: '2024-11-21',
    viewCount: 75
  },
  {
    id: '2',
    title: '뉴스 제목 2',
    description:
      '이것은 뉴스 2의 내용입니다. 실제 뉴스에서는 더 자세한 내용이 들어갑니다.',
    date: '2024-11-20',
    viewCount: 13
  },
  {
    id: '3',
    title: '뉴스 제목 3',
    description:
      '이것은 뉴스 3의 내용입니다. 실제 뉴스에서는 더 자세한 내용이 들어갑니다.',
    date: '2024-11-19',
    viewCount: 20
  }
]

export default function NewsPage () {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <main className='flex-grow container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-6'>뉴스 목록</h1>

        <CategoryTabs categories={categories} activeCategory='전체' />

        <div className='mt-6 space-y-4'>
          {newsItems.map(news => (
            <NewsCard
              key={news.id}
              id={news.id}
              title={news.title}
              description={news.description}
              date={news.date}
              viewCount={news.viewCount}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
