'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import { ProfileTab } from './ProfileTab'
import { ActivityTab } from './ActivityTab'

export default function Profile () {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <main className='flex-grow container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-6'>마이페이지</h1>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className='space-y-4'
        >
          <TabsList>
            <TabsTrigger value='profile'>프로필</TabsTrigger>
            <TabsTrigger value='activity'>활동 내역</TabsTrigger>
          </TabsList>
          <TabsContent value='profile'>
            <ProfileTab />
          </TabsContent>
          <TabsContent value='activity'>
            <ActivityTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
