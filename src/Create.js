import { useState } from "react";
import { useHistory} from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [brewer, setBrewer] = useState('');
  const [abv, setAbv] = useState('');
  const [pint, setPint] = useState('');
  const [growler, setGrowler] = useState('');
  const [six, setSix] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const drink = { name, type, brewer, abv, pint, growler, six };

    setIsPending(true);

    fetch('http://localhost:3000/drinks', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(drink)
    }).then(()=>{
        setIsPending(false)
        history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a New Beverage: </h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Type</label>
        <textarea
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></textarea>
        <label>Brewer:</label>
        <textarea
          required
          value={brewer}
          onChange={(e) => setBrewer(e.target.value)}
        ></textarea>
        <label>ABV:</label>
        <textarea
          required
          value={abv}
          onChange={(e) => setAbv(e.target.value)}
        ></textarea>
        <label>Price per Pint:</label>
        <textarea
          required
          value={pint}
          onChange={(e) => setPint(e.target.value)}
        ></textarea>
        <label>Price per Growler:</label>
        <textarea
          required
          value={growler}
          onChange={(e) => setGrowler(e.target.value)}
        ></textarea>
        <label>Price per Six-Pack:</label>
        <textarea
          required
          value={six}
          onChange={(e) => setSix(e.target.value)}
        ></textarea>
        
        {!isPending &&<button>Add Drink</button>}
        {isPending &&<button disabled>Adding drink...</button>}
      </form>
    </div>
  );
}
 
export default Create;