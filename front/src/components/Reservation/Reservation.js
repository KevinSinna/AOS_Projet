import React from 'react';
import Ticket from './Ticket'
export default class Reservation extends React.Component{
  constructor(props){
    super(props);   
    this.state={
      people:[  {
        name: 'Badr Cooper',
        title: 'Technicien',
        department: 'Villepinte',
        role: 'Admin',
        email: 'test@example.com',
        image:
        '../../assets/img/persotest.png',
      },
      {
        name: 'Badr Cooper',
        title: 'Technicien',
        department: 'Villepinte',
        role: 'Admin',
        email: 'test@example.com',
        image:
        '../../assets/img/persotest.png',
      }],
      search : false
    }
    this.init = this.init.bind(this);
  }
  async componentDidMount() {
    this.init();
  }
  async init(){


  }
render(props){
return(<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
  <tr>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Préstataire
    </th>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Profession
    </th>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Status
    </th>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Role
    </th>
    <th scope="col" className="relative px-6 py-3">
      <span className="sr-only">Edit</span>
    </th>
  </tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
  {this.state.people.map((person) => (
    <Ticket email = {person.email} name ={person.name} title = {person.title} status = "Reservé" department = {person.department} role ={person.role} image={person.image}></Ticket>
  ))}
</tbody>
</table>)

}

}