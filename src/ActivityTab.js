'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/Card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/Select'
import { Input } from './ui/Input'
import { Label } from './ui/Label'

const activities = [
  {
    id: 1,
    content: '"정부, 새로운 경제 정책 발표" 기사에 댓글을 남겼습니다.',
    date: '2024-03-10',
    category: '경제',
    action: '댓글 작성'
  },
  {
    id: 2,
    content: '"주요 기업 2분기 실적 전망" 기사에 댓글을 남겼습니다.',
    date: '2024-03-07',
    category: '경제',
    action: '댓글 작성'
  },
  {
    id: 3,
    content: '"여야, 주요 법안 처리 합의" 기사에 댓글을 남겼습니다.',
    date: '2024-03-05',
    category: '정치',
    action: '댓글 작성'
  },
  {
    id: 4,
    content: '"신규 문화 지원 정책 발표" 기사를 조회했습니다.',
    date: '2024-03-03',
    category: '문화',
    action: '기사 조회'
  },
  {
    id: 5,
    content: '"전국 장마 시작, 집중호우 주의보" 기사에 좋아요를 눌렀습니다.',
    date: '2024-03-01',
    category: '사회',
    action: '좋아요'
  }
]

export function ActivityTab () {
  const [filter, setFilter] = useState('전체')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const filteredActivities = activities.filter(
    activity =>
      (filter === '전체' ||
        activity.category === filter ||
        activity.action === filter) &&
      (!startDate || activity.date >= startDate) &&
      (!endDate || activity.date <= endDate)
  )

  return (
    <div className='space-y-4'>
      <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className='w-full sm:w-[250px]'>
            <SelectValue placeholder='카테고리/활동 유형 선택' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='전체'>전체</SelectItem>
            <SelectItem value='경제'>경제</SelectItem>
            <SelectItem value='정치'>정치</SelectItem>
            <SelectItem value='사회'>사회</SelectItem>
            <SelectItem value='문화'>문화</SelectItem>
            <SelectItem value='댓글 작성'>댓글 작성</SelectItem>
            <SelectItem value='기사 조회'>기사 조회</SelectItem>
            <SelectItem value='좋아요'>좋아요</SelectItem>
          </SelectContent>
        </Select>
        <div className='flex space-x-2'>
          <div className='w-full sm:w-auto'>
            <Label htmlFor='start-date' className='sr-only'>
              시작일
            </Label>
            <Input
              id='start-date'
              type='date'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className='w-full'
            />
          </div>
          <div className='w-full sm:w-auto'>
            <Label htmlFor='end-date' className='sr-only'>
              종료일
            </Label>
            <Input
              id='end-date'
              type='date'
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className='w-full'
            />
          </div>
        </div>
      </div>
      {filteredActivities.map(activity => (
        <Card key={activity.id}>
          <CardHeader>
            <CardTitle>{activity.action}</CardTitle>
            <CardDescription>{activity.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{activity.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
