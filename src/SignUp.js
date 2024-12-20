import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from './ui/Card'
import { Input } from './ui/Input'
import { Label } from './ui/Label'

export default function SignUp () {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailChecking, setIsEmailChecking] = useState(false)
  const [isEmailAvailable, setIsEmailAvailable] = useState(null)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    // 여기에 실제 회원가입 API 호출 로직을 구현하세요
    await new Promise(resolve => setTimeout(resolve, 1500)) // API 호출 시뮬레이션
    setIsLoading(false)
    navigate('/login') // 회원가입 성공 후 로그인 페이지로 이동
  }

  const checkEmailAvailability = async () => {
    setIsEmailChecking(true)
    // 여기에 실제 이메일 중복 확인 API 호출 로직을 구현하세요
    await new Promise(resolve => setTimeout(resolve, 1000)) // API 호출 시뮬레이션
    setIsEmailAvailable(Math.random() > 0.5) // 데모용 랜덤 결과
    setIsEmailChecking(false)
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow flex items-center justify-center'>
        <Card className='w-[350px]'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>회원가입</CardTitle>
            <CardDescription>
              새 계정을 만들어 뉴스 플랫폼을 이용하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='username'>사용자 명</Label>
                <Input
                  id='username'
                  type='text'
                  required
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>이메일</Label>
                <div className='flex space-x-2'>
                  <Input
                    id='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type='button'
                    onClick={checkEmailAvailability}
                    disabled={isEmailChecking || !email}
                  >
                    {isEmailChecking ? '확인 중...' : '중복 확인'}
                  </Button>
                </div>
                {isEmailAvailable !== null && (
                  <p
                    className={`text-sm ${
                      isEmailAvailable ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {isEmailAvailable
                      ? '사용 가능한 이메일입니다.'
                      : '이미 사용 중인 이메일입니다.'}
                  </p>
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>비밀번호</Label>
                <Input id='password' type='password' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>비밀번호 확인</Label>
                <Input id='confirmPassword' type='password' required />
              </div>
              <Button
                type='submit'
                className='w-full'
                disabled={isLoading || !isEmailAvailable}
              >
                {isLoading ? '처리 중...' : '회원가입'}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className='text-center text-sm text-muted-foreground w-full'>
              이미 계정이 있으신가요?{' '}
              <Link to='/signIn' className='text-primary hover:underline'>
                로그인
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
