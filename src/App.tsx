import './App.css'
import PatientCard from './Components/PatientCard/PatientCard'
import Avatar from './assets/render-3d-personaje-avatar_23-2150611765.avif'

function App() {
  return (
    <>
      <div className="container">
        <PatientCard
          patientNumber="00010-200-40"
          age={35}
          diagnosis="COVID-19"
          name="HANNA THOMPSON"
          address="Avenida Providencia, Santiago"
          website="www.WiseMed.com"
          image={Avatar}
          titleBack="WISEMED"
        />
      </div>
    </>
  )
}

export default App
