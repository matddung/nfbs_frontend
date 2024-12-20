import React, { useState, useRef } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Label } from './ui/Label'
import Textarea from './ui/Textarea'
import { Select, SelectItem, SelectValue, SelectTrigger, SelectContent } from './ui/Select'

import { ToastContainer, toast } from 'react-toastify'

function CreateArticle() {
  const fileInputRef = useRef(null)
  const [article, setArticle] = useState({
    title: '',
    content: '',
    category: '',
    image: null,
    imagePreview: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setArticle(prev => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = value => {
    console.log('선택된 값:', value) // 선택된 값 디버깅
    setArticle(prev => ({
      ...prev,
      category: value
    }))
  }

  const handleImageChange = e => {
    const file = e.target.files?.[0]
    if (file) {
      setArticle(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!article.title || !article.content || !article.category) {
      toast({
        title: '입력 오류',
        description: '모든 필드를 입력해주세요.',
        variant: 'destructive'
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Here you would typically make an API call to submit the article
      // For demonstration, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: '기사 제출 완료',
        description: '기사가 성공적으로 제출되었습니다.'
      })
      // In a real app, you'd use React Router for navigation
      // For now, we'll just log a message
      console.log('Redirecting to home page...')
    } catch (error) {
      toast({
        title: '제출 오류',
        description: '기사 제출 중 오류가 발생했습니다. 다시 시도해주세요.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <main className='flex-grow container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-6'>기사 작성</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <Label htmlFor='title'>제목</Label>
            <Input
              id='title'
              name='title'
              value={article.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor='category'>카테고리</Label>
            <Select
              value={article.category}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='카테고리 선택' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='politics'>정치</SelectItem>
                <SelectItem value='economy'>경제</SelectItem>
                <SelectItem value='society'>사회</SelectItem>
                <SelectItem value='culture'>문화</SelectItem>
                <SelectItem value='international'>국제</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor='content'>내용</Label>
            <Textarea
              id='content'
              name='content'
              value={article.content}
              onChange={handleInputChange}
              className='min-h-[300px]'
              required
            />
          </div>
          <div>
            <Label htmlFor='image'>이미지</Label>
            <div className='flex items-center space-x-4'>
              <input
                id='image'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='hidden'
                ref={fileInputRef}
              />
              <Button
                type='button'
                onClick={() => fileInputRef.current?.click()}
              >
                이미지 선택
              </Button>
              {article.imagePreview && (
                <div className='relative w-32 h-32'>
                  <img
                    src={article.imagePreview}
                    alt='Selected image'
                    className='object-cover w-full h-full'
                  />
                </div>
              )}
            </div>
          </div>
          <div className='flex justify-end space-x-4'>
            <Button
              type='button'
              variant='outline'
              onClick={() => console.log('Navigating to home...')}
            >
              취소
            </Button>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? '제출 중...' : '기사 제출'}
            </Button>
          </div>
        </form>
      </main>
      <ToastContainer />
    </div>
  )
}

export default CreateArticle
