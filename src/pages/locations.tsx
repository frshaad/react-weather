import { NavLink, Outlet } from 'react-router-dom'

const LOCATIONS = ['Amol', 'NYC', 'London']

export default function Locations() {
  return (
    <div className="flex gap-5">
      <div>
        <h1>Locations</h1>
        <div className="flex flex-col gap-1">
          {LOCATIONS.map((location, index) => (
            <NavLink
              key={index}
              to={`/locations/${location}`}
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              {location}
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  )
}
