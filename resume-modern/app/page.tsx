import Header from '@/components/header';
import PersonalInfo from '@/components/personal-info';
import Education from '@/components/education';
import Skills from '@/components/skills';
import Interests from '@/components/interests';
import Experience from '@/components/experience';
import BoardMemberships from '@/components/board-memberships';
import Footer from '@/components/footer';
import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="print-hidden fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 print:mt-4">
          {/* Left Column - Personal Details */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <PersonalInfo />
            <Education />
            <Skills />
            <Interests />
          </div>
          
          {/* Right Column - Professional Experience */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <Experience />
            <BoardMemberships />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
