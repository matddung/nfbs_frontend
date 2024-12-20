'use client'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from './util/UserApiUtils'

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
import { ForgotPassword } from './ForgotPassword'

export default function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    const signInRequest = {
      email,
      password
    }

    try {
      // signIn 함수 호출
      const response = await signIn(signInRequest)

      // 서버에서 반환한 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', response.token)

      // 로그인 성공 시 페이지 이동
      navigate('/dashboard')
    } catch (err) {
      // 로그인 실패 시 에러 처리
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow flex items-center justify-center'>
        <Card className='w-[350px]'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>로그인</CardTitle>
            <CardDescription>
              이메일과 비밀번호를 입력하여 로그인하세요
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>이메일</Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>비밀번호</Label>
              <Input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
          </CardContent>
          <CardFooter className='flex flex-col space-y-2'>
            <Button className='w-full' onClick={handleLogin}>
              로그인
            </Button>
            <Button
              variant='link'
              className='text-sm text-muted-foreground hover:underline'
              onClick={() => setIsForgotPasswordOpen(true)}
            >
              비밀번호를 잊으셨나요?
            </Button>
            <p className='text-center text-sm text-muted-foreground'>
              계정이 없으신가요?{' '}
              <Link to='/signUp' className='text-primary hover:underline'>
                회원가입
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  )
}
