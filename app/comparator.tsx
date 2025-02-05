import { useState } from 'react'
import Cylinder from './cylinder'

const Comparator = () => {
  const [cylinder1, setcylinder1] = useState({ rayon: '', hauteur: '' })
  const [cylinder2, setcylinder2] = useState({ rayon: '', hauteur: '' })
  const [resultat, setResultat] = useState<{
    volume1: number
    volume2: number
    pourcentageComparaison: string
  } | null>(null)
  
  const calculerVolume = (rayon: number, hauteur: number) => {
    return Math.PI * Math.pow(rayon, 2) * hauteur
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, cylinder: number) => {
    const { name, value } = event.target;
    if (cylinder === 1) {
      setcylinder1({ ...cylinder1, [name]: value });
    } else {
      setcylinder2({ ...cylinder2, [name]: value });
    }
  };
  

  const comparerVolumes = () => {
    const volume1 = calculerVolume(parseFloat(cylinder1.rayon), parseFloat(cylinder1.hauteur))
    const volume2 = calculerVolume(parseFloat(cylinder2.rayon), parseFloat(cylinder2.hauteur))

    const pourcentageComparaison = ((volume2 / volume1) * 100).toFixed(2)
    setResultat({ volume1, volume2, pourcentageComparaison })
  }

  return (
    <div className='subContainer'>
      <h2>Comparer les volumes de deux cylinders</h2>

      <Cylinder name='cylinder de départ' cylinder={cylinder1} handleChange={(e) => handleChange(e, 1)} />

      <Cylinder name='cylinder de fin' cylinder={cylinder2} handleChange={(e) => handleChange(e, 2)} />

      <button onClick={comparerVolumes}>Comparer les volumes</button>

      {resultat && (
        <div>
          <h3>Résultats de la comparaison</h3>
          <p>Volume de départ {resultat.volume1.toFixed(2)} cm³</p>
          <p>Volume de fin: {resultat.volume2.toFixed(2)} cm³</p>
          <p>Le cylinder 2 fait {resultat.pourcentageComparaison}% du volume du cylinder 1.</p>
        </div>
      )}
    </div>
  )
}

export default Comparator