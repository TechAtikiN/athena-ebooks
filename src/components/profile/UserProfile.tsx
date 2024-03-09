'use client'

// named imports
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { tabs } from '@/constants/profile-tabs'

// default imports
import HomeTab from './HomeTab'
import MyBooksTab from './MyBooksTab'
import FavoritesTab from './FavoritesTab'

interface Props {
  user: User
}

export default function UserProfile({ user }: Props) {
  const [activeTab, setActiveTab] = useState('Home')
  const router = useRouter()
  const pathname = usePathname()

  const handleTabChange = (tag: string) => {
    setActiveTab(tag)
    router.replace(`${pathname}?tab=${tag.toLowerCase()}`)
  }

  return (
    <div className='sm:grid sm:grid-cols-10'>
      {/* Left Section */}
      <div className='sm:col-span-2 border-r border-accent/15 p-5' >
        <div className='flex sm:flex-col gap-3'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(tab.name)}
              className={`flex items-center font-semibold px-3 py-2 mr-5 -ml-2 sm:rounded-r-full ${activeTab === tab.name ? 'bg-accent/30' : ''}`}
            >
              {/* tab icon  */}
              <div className={`${activeTab === tab.name ? 'text-accent' : ''}`}>{tab.icon}</div>
              {/* tab name */}
              <span className='ml-3'>{tab.name}</span>
            </button>
          ))}
        </div>
      </div >

      {/* Right Section */}
      <div className='sm:col-span-8 py-3 sm:py-0' >
        {/* tab content */}
        {activeTab === 'Home' && <HomeTab user={user} />}
        {activeTab === 'My Books' && <MyBooksTab books={user?.books} />}
        {activeTab === 'Favorites' && <FavoritesTab userId={user?.id} />}
      </div >
    </div>
  )
}
