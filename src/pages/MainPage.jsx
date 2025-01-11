import React from 'react'
import Header from '../components/Header'
import {motion} from "framer-motion";
import StatCard from '../components/StatCard';
import { Eye,MousePointerClick,Calendar1,CircleDollarSign } from 'lucide-react';
import SalesOverviewChart from '../components/SalesOverviewChart';
import ViewsClickedCharts from '../components/ViewsclickedChart';

const MainPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title ="Main"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
         {/* Package ID Input */}
         <div className="mb-6 flex justify-center">
          <div className="w-full max-w-md">
             <label htmlFor="package-id" className="block text-sm font-medium text-gray-300">
              Package ID
            </label>
            <input type="text" id="package-id"placeholder="Enter Package ID"
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-blue-500
             focus:ring-blue-500 sm:text-sm h-7 py-3" />
          </div>
        </div>
        {/* STATS */}
          <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0, y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}>
            <StatCard name="Total View" icon={Eye} value="125" color='#6366F1'/>
            <StatCard name="Clicks" icon={MousePointerClick} value="12" color='#EC4899'/>
            <StatCard name="Today" icon={Calendar1} value="25" color='#8B5CF6'/>
            <StatCard name="Earn" icon={CircleDollarSign} value="$127.5" color='#10B981'/>
          </motion.div>
          {/* CHARTS */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
           <SalesOverviewChart/>
           <ViewsClickedCharts/>
          </div>
      </main>
    </div>
  )
}

export default MainPage
