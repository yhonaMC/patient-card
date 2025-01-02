import { useState } from 'react'
import 'bulma/css/bulma.min.css'
import './PatientCard.css'
import { PatientCardProps } from './PatientCard.type'
import QRCode from '../../assets/qr-code-148732_640.webp'

export default function PatientCard({
  patientNumber,
  age,
  diagnosis,
  name,
  address,
  website,
  image,
  titleBack
}: PatientCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="card-inner">
        {/* Front of card */}
        <div className="card card-front">
          <div className="card-content">
            <div className="medical-cross"></div>
            <div className="pattern-overlay"></div>

            <div className="media">
              <div className="media-content has-text-centered">
                <figure className="image profile-image mb-2">
                  <img
                    src={image}
                    alt="Profile"
                    className="is-rounded image-fit"
                  />
                </figure>
                <p className="title is-4 name-tag mb-2">
                  {name.toLocaleUpperCase()}
                </p>
                <p className="subtitle is-6 is-marginless has-text-white mb-2">
                  <strong className="has-text-white">Edad:</strong> {age}
                </p>
                <p className="subtitle is-6 is-marginless has-text-white ">
                  <strong className="has-text-white">Diagnóstico:</strong>{' '}
                  {diagnosis}
                </p>
              </div>
            </div>

            <div className="content has-text-centered is-fullwidth">
              <p className="id-number">
                {' '}
                <strong className="has-text-white">ID:</strong> {patientNumber}
              </p>

              <button
                className="button is-info is-light is-rounded  is-fullwidth"
                onClick={handleFlip}
              >
                Más detalles
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="card card-back">
          <div className="card-content">
            <div className="medical-cross"></div>
            <div className="pattern-overlay"></div>

            <div className="has-text-centered">
              <p className="title is-5 mb-4">{titleBack}</p>

              <div className="qr-code">
                <img src={QRCode} alt="QR Code" />
              </div>

              <div className="content mt-4">
                <p className="has-text-white subtitle is-6">{address}</p>
                <p className="has-text-white">{website}</p>
              </div>

              <button
                className="button is-info is-light is-rounded mt-4 is-fullwidth"
                onClick={handleFlip}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
