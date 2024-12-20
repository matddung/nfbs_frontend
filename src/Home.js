import React from 'react'
import { Statistics } from './Statistics'
import { CategoryTabs } from './CategoryTabs'
import { ArticleList } from './ArticleList'
import { Link } from 'react-router-dom'

const publisherStats = [
  { name: 'A 뉴스', value: 400 },
  { name: 'B 신문', value: 300 },
  { name: 'C 미디어', value: 200 },
  { name: 'D 방송', value: 280 },
  { name: 'E 저널', value: 180 },
]

const categoryStats = [
  { name: '정치', value: 25 },
  { name: '경제', value: 20 },
  { name: '사회', value: 15 },
  { name: '문화', value: 20 },
  { name: '스포츠', value: 20 },
]

const categories = ['전체', '정치', '경제', '사회', '문화', '스포츠']

const articles = [
  { id: '1', title: '정부, 새로운 경제 정책 발표', publisher: 'A 뉴스', date: '2023-06-01' },
  { id: '2', title: '여야, 주요 법안 처리 합의', publisher: 'B 신문', date: '2023-06-02' },
  { id: '3', title: '한국은행, 기준금리 동결', publisher: 'C 미디어', date: '2023-06-01' },
  { id: '4', title: '주요 기업 2분기 실적 전망', publisher: 'D 방송', date: '2023-06-02' },
  { id: '5', title: '전국 장마 시작, 집중호우 주의보', publisher: 'E 저널', date: '2023-06-03' },
  { id: '6', title: '코로나19 신규 확진자 감소세 지속', publisher: 'A 뉴스', date: '2023-06-04' },
  { id: '7', title: '국제영화제 한국 영화 3편 수상', publisher: 'B 신문', date: '2023-06-05' },
  { id: '8', title: '유명 작가 신작 소설 출간 임박', publisher: 'C 미디어', date: '2023-06-06' },
  { id: '9', title: '한국 축구 대표팀, 월드컵 예선 1차전 승리', publisher: 'D 방송', date: '2023-06-07' },
  { id: '10', title: '프로야구 올스타전 라인업 발표', publisher: 'E 저널', date: '2023-06-08' },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState('전체')

  const handleCategorySelect = (category) => {
    console.log("Selected category:", category)
    setActiveCategory(category)
    // TODO: 여기에 카테고리 선택에 따른 기사 필터링 로직을 추가하세요
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Statistics type="bar" title="언론사별 기사 통계" data={publisherStats} />
          <Statistics type="pie" title="카테고리별 기사 통계" data={categoryStats} />
        </div>

        <div className="flex justify-between items-center mb-6">
          <CategoryTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelectCategory={handleCategorySelect}
          />
          <Link href="/more-news" className="text-sm text-primary hover:underline">
            더 많은 뉴스 목록
          </Link>
        </div>
        <div className="mb-4 text-lg font-semibold">
          선택된 카테고리: {activeCategory}
        </div>
        <ArticleList articles={articles} />
      </main>
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 뉴스 플랫폼. All rights reserved.
        </div>
      </footer>
    </div>
  )
}