
interface CylinderProps {
  name: string;
  cylinder: { rayon: string; hauteur: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Cylinder: React.FC<CylinderProps> = ({ name, cylinder, handleChange }) => {
  return (
    <div>
      <h3>{name}</h3>
      <input 
        type="number" 
        name="rayon" 
        placeholder="Rayon (cm)" 
        value={cylinder.rayon} 
        onChange={handleChange} 
      />
      <input 
        type="number" 
        name="hauteur" 
        placeholder="Hauteur (cm)" 
        value={cylinder.hauteur} 
        onChange={handleChange} 
      />
    </div>
  );
};


export default Cylinder;