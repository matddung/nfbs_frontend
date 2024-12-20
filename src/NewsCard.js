import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'

export function NewsCard ({ id, title, description, date, viewCount }) {
  return (
    <Link href={`/news/${id}`}>
      <div className='bg-white p-6 rounded-lg border hover:border-primary transition-colors'>
        <h2 className='text-lg font-medium mb-2'>{title}</h2>
        <p className='text-muted-foreground mb-4'>{description}</p>
        <div className='flex justify-between items-center text-sm text-muted-foreground'>
          <span>{date}</span>
          <div className='flex items-center gap-1'>
            <MessageSquare className='w-4 h-4' />
            <span>{viewCount}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
