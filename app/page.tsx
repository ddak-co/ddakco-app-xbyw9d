import DashboardCard from '@/components/DashboardCard'
import { Users, CreditCard, FileText, Building } from 'lucide-react'

const dashboard = [
  {
    title: '현재 입주자',
    value: '24명',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: '미납금',
    value: '₩1,250,000',
    icon: CreditCard,
    color: 'bg-red-500',
  },
  {
    title: '공지사항',
    value: '5건',
    icon: FileText,
    color: 'bg-yellow-500',
  },
  {
    title: '시설예약',
    value: '12건',
    icon: Building,
    color: 'bg-green-500',
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">대시보드</h1>
        <p className="text-gray-600 mt-2">기숙사 현황을 한눈에 확인하세요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboard.map((item) => (
          <DashboardCard key={item.title} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">최근 공지사항</h2>
          <div className="space-y-3">
            <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
              <p className="font-semibold">긴급: 수도 점검 안내</p>
              <p className="text-sm text-gray-600">2024.01.15</p>
            </div>
            <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
              <p className="font-semibold">2월 숙박료 고지</p>
              <p className="text-sm text-gray-600">2024.01.10</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">최근 입주 변동</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <div>
                <p className="font-semibold">김철수</p>
                <p className="text-sm text-gray-600">302호</p>
              </div>
              <span className="text-green-600 text-sm font-semibold">입실</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <div>
                <p className="font-semibold">이영희</p>
                <p className="text-sm text-gray-600">205호</p>
              </div>
              <span className="text-red-600 text-sm font-semibold">예정</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
