import { LucideIcon } from 'lucide-react'

interface DashboardCardProps {
  title: string
  value: string
  icon: LucideIcon
  color: string
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="flex items-center p-6">
        <div className={`${color} p-3 rounded-lg mr-4`}>
          <Icon size={32} className="text-white" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  )
}
