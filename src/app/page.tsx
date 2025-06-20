import ContributionForm from './components/ContributionForm'
import ParticipantsList from './components/ParticipantsList'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-12">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-green-900 mb-2">Ahorros para la Selva Negra</h1>
        <p className="text-center text-green-800 italic">
          Hay que recoger porque sino no iremos
        </p>
        <img 
          src="https://i.pinimg.com/originals/e9/cc/22/e9cc220650296d9418e93fe279af2c70.jpg" 
          alt="Paisaje Selva Negra Nicaragua" 
          className="mx-auto rounded-md shadow-lg max-h-64 object-cover"
        />
        <ContributionForm />
      </div>
      <ParticipantsList />
      
    </main>
  )
}
