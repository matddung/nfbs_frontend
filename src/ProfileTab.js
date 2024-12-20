'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Label } from './ui/Label'
import { ConfirmationModal } from './ConfirmationModal'
import { ConfirmDialog } from './ConfirmDialog'

export function ProfileTab () {
  const [profile, setProfile] = useState({
    nickname: '김뉴스',
    email: 'kimnews@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isUpdateConfirmOpen, setIsUpdateConfirmOpen] = useState(false)

  const handleDelete = () => {
    // 여기에 회원 탈퇴 로직을 추가합니다.
    console.log('회원 탈퇴 처리')
    setIsDeleteModalOpen(false)
  }

  return (
    <div className='space-y-6'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold'>{profile.nickname}</h2>
        <p className='text-sm text-muted-foreground'>{profile.email}</p>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault()
          setIsUpdateConfirmOpen(true)
        }}
        className='space-y-4'
      >
        <div>
          <Label htmlFor='nickname'>닉네임</Label>
          <Input
            id='nickname'
            value={profile.nickname}
            onChange={e => setProfile({ ...profile, nickname: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor='currentPassword'>현재 비밀번호</Label>
          <Input
            id='currentPassword'
            type='password'
            value={profile.currentPassword}
            onChange={e =>
              setProfile({ ...profile, currentPassword: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor='newPassword'>새 비밀번호</Label>
          <Input
            id='newPassword'
            type='password'
            value={profile.newPassword}
            onChange={e =>
              setProfile({ ...profile, newPassword: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor='confirmPassword'>새 비밀번호 확인</Label>
          <Input
            id='confirmPassword'
            type='password'
            value={profile.confirmPassword}
            onChange={e =>
              setProfile({ ...profile, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <Button type='submit'>프로필 업데이트</Button>
          <Button
            type='button'
            variant='destructive'
            onClick={e => {
              e.preventDefault()
              setIsDeleteModalOpen(true)
            }}
          >
            회원 탈퇴
          </Button>
        </div>
      </form>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title='회원 탈퇴'
        description='정말로 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
      />
      <ConfirmDialog
        isOpen={isUpdateConfirmOpen}
        onClose={() => setIsUpdateConfirmOpen(false)}
        onConfirm={() => {
          console.log('프로필 업데이트 완료')
          setIsUpdateConfirmOpen(false)
        }}
        title='프로필 업데이트 확인'
        description='입력하신 정보로 프로필을 업데이트하시겠습니까?'
      />
    </div>
  )
}
