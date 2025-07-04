import { createClient } from '@/lib/supabase/server'

type Participant = {
  id: number
  name: string
  amount: number
  created_at: string
}

async function getParticipants() {
  const supabase = await createClient()
  const { data: participants, error } = await supabase
    .from('participants')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching participants:', error)
    return []
  }

  return participants
}

export default async function ParticipantsList() {
  const participants: Participant[] = await getParticipants()
  const totalAmount = participants.reduce((acc, p) => acc + p.amount, 0)

  return (
    <div className="w-full max-w-4xl mt-12">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Lista de Aportes</h2>
      
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-2 rounded-lg" role="alert">
        <p className="font-bold">Total Recaudado</p>
        <p className="text-2xl">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'NIO' }).format(totalAmount)}</p>
        <p className="mt-2">Meta: <span className="font-semibold">C$7,230.00</span></p>
        <div className="w-full bg-green-200 rounded-full h-4 mt-2">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${Math.min((totalAmount / 7230) * 100, 100)}%` }}></div>
        </div>
        <span className="text-green-700 text-sm">{((totalAmount / 7230) * 100).toFixed(2)}% recaudado</span>
        <p className="text-xs text-gray-600 mt-1">Meta a cumplir al <span className="font-semibold">1ro de octubre</span></p>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Cantidad
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Fecha de Aporte
              </th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr key={p.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{p.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'NIO' }).format(p.amount)}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {new Date(p.created_at).toLocaleDateString('es-ES')}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 