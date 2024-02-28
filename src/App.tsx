import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'

export default function App() {
  return (
    <div>
      <h1>Lorem ipsum dolor sit.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa
        minus, dicta blanditiis sunt fugiat molestiae corrupti! Neque nostrum
        perferendis accusantium blanditiis a aspernatur iusto. Cumque, tempore
        reiciendis. Quisquam odit cumque accusantium cum molestiae ipsam minus,
        explicabo sequi repellendus perferendis nisi eveniet consequatur et
        atque tempore quae saepe distinctio tenetur.
      </p>
      <Button>Click me</Button>
      <Link to="/settings">Settings</Link>
    </div>
  )
}
