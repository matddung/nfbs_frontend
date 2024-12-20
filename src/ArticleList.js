import React from 'react'
import { Card, CardContent } from './ui/Card'
import { Link } from 'react-router-dom'

export function ArticleList ({ articles = [] }) {
  return (
    <Card className='w-full'>
      <CardContent>
        <ul className='space-y-2'>
          {articles.map(article => (
            <li key={article.id} className='border-b pb-2 last:border-b-0'>
              <Link to={`/article/${article.id}`} className='hover:underline'>
                <h3 className='font-semibold'>{article.title}</h3>
              </Link>
              <p className='text-sm text-muted-foreground'>
                {article.publisher} - {article.date}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
