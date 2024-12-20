import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from './ui/Dialog'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Label } from './ui/Label'

export function ForgotPassword ({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    // This is a mock function. In a real application, you would call an API endpoint.
    await new Promise(resolve => setTimeout(resolve, 1500))
    setMessage('임시 비밀번호가 이메일로 전송되었습니다.')
    setIsLoading(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>비밀번호 재설정</DialogTitle>
          <DialogDescription>
            가입하신 이메일 주소를 입력하시면 임시 비밀번호를 보내드립니다.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>이메일</Label>
            <Input
              id='email'
              type='email'
              placeholder='name@example.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? '처리 중...' : '임시 비밀번호 발급'}
          </Button>
          {message && <p className='text-sm text-green-600'>{message}</p>}
        </form>
      </DialogContent>
    </Dialog>
  )
}
