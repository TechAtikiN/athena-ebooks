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
    <div className='p-5 grid grid-cols-10 h-screen'>
      {/* Left Section */}
      <div className='col-span-2 border-r border-accent/15'>
        <div className='flex flex-col gap-3'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(tab.name)}
              className={`flex items-center font-semibold px-3 py-2 mr-5 -ml-2 rounded-r-full ${activeTab === tab.name ? 'bg-accent/30' : ''}`}
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
      <div className='col-span-8 px-5'>
        {/* tab content */}
        {activeTab === 'Home' && <HomeTab />}
        {activeTab === 'My Books' && <MyBooksTab />}
        {activeTab === 'Favorites' && <FavoritesTab />}
        {activeTab === 'Settings' && <SettingsTab />}
      </div>
    </div>
  )
}
