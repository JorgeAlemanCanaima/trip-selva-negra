import ContributionForm from './components/ContributionForm'
import ParticipantsList from './components/ParticipantsList'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-12">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-green-900 mb-2">Ahorros para Barceló Montelimar</h1>
        <p className="text-center text-green-700 font-semibold mb-2">Meta: C$8,300</p>
        <p className="text-center text-green-800 italic">
          Hay que recoger porque sino no iremos
        </p>
        <img 
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/169554143.jpg?k=67da1ab80cf5444886966177c24d67f6631c120837905a292b47f2222d7c2727&o=&hp=1" 
          alt="Paisaje Selva Negra Nicaragua" 
          className="mx-auto rounded-md shadow-lg max-h-64 object-cover"
        />
        <ContributionForm />
      </div>
      <ParticipantsList />
      
    </main>
  )
}
