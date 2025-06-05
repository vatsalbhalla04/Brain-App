import './App.css'; 
import PlusIcon from './components/icon/plusIcon';
import { Button } from './components/ui/Button';

function App(){
  return (
    <div>
      <Button startIcon={<PlusIcon/>} size='sm' variant='primary' text='Share'/>
      <Button size='lg' variant='secondary' text='Add Content'/>
      <Button size='md' variant='secondary' text='Add Content'/>
    </div>
  )
}
export default App;