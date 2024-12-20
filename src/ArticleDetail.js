'use client'

import React, { useState } from 'react'
import { Button } from './ui/Button'
import Textarea from './ui/Textarea'
import { MessageSquare } from 'lucide-react'

const article = {
  id: '1',
  category: '정치',
  title: '뉴스 제목 1',
  author: '김기자',
  content:
    '이것은 뉴스 1의 상세 내용입니다. 실제 뉴스에서는 더 자세한 내용이 들어갑니다. 여러 문단으로 구성될 수 있으며, 어떠시나 언용구 등이 포함될 수 있습니다.',
  date: '2024-11-21'
}

export default function ArticlePage () {
  const [comments, setComments] = useState([
    {
      id: '1',
      author: 'reader1',
      content: '좋은 기사네요.',
      date: '2024-11-21',
      isFirstComment: true,
      replies: [
        {
          id: '3',
          author: 'reader3',
          content: '저도 동감합니다!',
          date: '2024-11-21'
        }
      ]
    },
    {
      id: '2',
      author: 'reader2',
      content: '더 자세한 내용이 궁금합니다.',
      date: '2024-11-22'
    }
  ])
  const [newComment, setNewComment] = useState('')

  const handleCommentSubmit = e => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: String(comments.length + 1),
        author: '익명',
        content: newComment,
        date: new Date().toISOString().split('T')[0]
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <main className='flex-grow container mx-auto px-4 py-8 max-w-3xl'>
        <article className='mb-8'>
          <div className='mb-6'>
            <div className='flex justify-between items-center text-sm text-muted-foreground mb-2'>
              <span>{article.category}</span>
              <span>{article.date}</span>
            </div>
            <h1 className='text-2xl font-bold mb-1'>{article.title}</h1>
            <span className='text-sm text-muted-foreground'>
              {article.author}
            </span>
          </div>
          <p className='text-base leading-relaxed mb-4'>{article.content}</p>
          <div className='flex items-center gap-1 text-sm text-muted-foreground'>
            <MessageSquare className='w-4 h-4' />
            <span>댓글 {comments.length}</span>
          </div>
        </article>

        <section>
          <h2 className='font-bold mb-4'>댓글</h2>
          <form onSubmit={handleCommentSubmit} className='mb-6'>
            <Textarea
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder='댓글을 입력해주세요...'
              className='mb-2'
            />
            <Button
              type='submit'
              className='bg-black text-white hover:bg-gray-800'
            >
              댓글 작성
            </Button>
          </form>

          <div className='space-y-6'>
            {comments.map(comment => (
              <div key={comment.id} className='space-y-4'>
                <div className='space-y-2'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <div className='flex items-center space-x-2'>
                        <span className='font-medium'>{comment.author}</span>
                        <span className='text-sm text-muted-foreground'>
                          {comment.date}
                        </span>
                      </div>
                      <p className='mt-1'>{comment.content}</p>
                    </div>
                    {comment.isFirstComment && (
                      <div className='flex space-x-2'>
                        <button className='text-sm text-muted-foreground hover:text-gray-900'>
                          수정
                        </button>
                        <button className='text-sm text-muted-foreground hover:text-gray-900'>
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                  <button className='text-sm text-muted-foreground hover:text-gray-900'>
                    답글 달기
                  </button>
                </div>
                {comment.replies && comment.replies.length > 0 && (
                  <div className='ml-8 space-y-4 border-l-2 pl-4'>
                    {comment.replies.map(reply => (
                      <div key={reply.id} className='space-y-2'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <div className='flex items-center space-x-2'>
                              <span className='font-medium'>
                                {reply.author}
                              </span>
                              <span className='text-sm text-muted-foreground'>
                                {reply.date}
                              </span>
                            </div>
                            <p className='mt-1'>{reply.content}</p>
                          </div>
                        </div>
                        <button className='text-sm text-muted-foreground hover:text-gray-900'>
                          답글 달기
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
