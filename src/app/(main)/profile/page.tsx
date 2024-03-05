'use client'

// named imports
import { tabs } from '@/constants/profile-tabs'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

// default imports
import FavoritesTab from '@/components/profile/FavoritesTab'
import HomeTab from '@/components/profile/HomeTab'
import MyBooksTab from '@/components/profile/MyBooksTab'
import SettingsTab from '@/components/profile/SettingsTab'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Home')
  const router = useRouter()
  const pathname = usePathname()

  const handleTabChange = (tag: string) => {
    setActiveTab(tag)
    router.replace(`${pathname}?tab=${tag.toLowerCase()}`)
  }

  return (
    <div className='p-5 sm:grid sm:grid-cols-10 h-screen'>
      {/* Left Section */}
      <div className='sm:col-span-2 border-r border-accent/15'>
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
      </div>

      {/* Right Section */}
      <div className='sm:col-span-8 px-5 py-3 sm:py-0'>
        {/* tab content */}
        {activeTab === 'Home' && <HomeTab />}
        {activeTab === 'My Books' && <MyBooksTab />}
        {activeTab === 'Favorites' && <FavoritesTab />}
        {activeTab === 'Settings' && <SettingsTab />}
      </div>
    </div>
  )
}
