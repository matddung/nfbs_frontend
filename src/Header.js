import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  User,
  Settings,
  PenSquare,
  LogIn,
  UserPlus,
  LogOut
} from 'lucide-react'
import SearchPanel from './SearchPanel'

function Header () {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole] = useState('user')

  return (
    <header className='bg-[#f5f5f5] text-black py-2 px-4 flex justify-between items-center'>
      <div className='w-1/4'>
        <Link to='/'>
          <img src='/logo.png' alt='Logo' className='h-8' />
        </Link>
      </div>
      <div className='w-1/2 flex justify-center'>
        <div className='relative w-full max-w-md'>
          <input
            type='text'
            placeholder='뉴스 검색'
            className='w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer bg-white hover:bg-gray-100 transition-colors'
            readOnly
            onClick={e => {
              e.stopPropagation()
              setIsSearchOpen(true)
            }}
          />
          <Search className='w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none' />
        </div>
      </div>
      <div className='w-1/4 flex justify-end space-x-4'>
        {!isLoggedIn ? (
          <>
            <Link to='/signIn' className='flex items-center space-x-1'>
              <LogIn className='w-5 h-5' />
              <span>로그인</span>
            </Link>
            <Link to='/signUp' className='flex items-center space-x-1'>
              <UserPlus className='w-5 h-5' />
              <span>회원가입</span>
            </Link>
          </>
        ) : (
          <>
            {userRole === 'reporter' && (
              <Link to='/createArticle' className='flex items-center space-x-1'>
                <PenSquare className='w-5 h-5' />
                <span>기사작성</span>
              </Link>
            )}
            {(userRole === 'publisher' || userRole === 'admin') && (
              <Link
                to={userRole === 'publisher' ? '/press-management' : '/admin'}
                className='flex items-center space-x-1'
              >
                <Settings className='w-5 h-5' />
                <span>
                  {userRole === 'publisher' ? '언론사 관리' : '관리자 페이지'}
                </span>
              </Link>
            )}
            <Link to='/profile' className='flex items-center space-x-1'>
              <User className='w-5 h-5' />
              <span>마이페이지</span>
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className='flex items-center space-x-1'
            >
              <LogOut className='w-5 h-5' />
              <span>로그아웃</span>
            </button>
          </>
        )}
      </div>
      <SearchPanel
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  )
}

export default Header
