import React from 'react'
import UserCards from '@/components/common/UserCard'
const UserPage: React.FC = () => {
  return (
    <div>
        <h1>Users</h1>
        <p>This is users page</p>
    </div>
  )
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
<UserCards 
    name="John Doe"
    username="johndoe"
    email="johndoe@example.com"
    phone="123-456-7890"
    website="example.com"
    address={{
        street: "123 Main St",
        suite: "Apt 456",
        city: "New York",
        zipcode: "12345",
        geo: { lat: "40.7128", lng: "74.0060" }
    }}
    company={{
        name: "Acme Inc.",
        catchPhrase: "Innovative solutions",
        bs: "leading markets"
    }}
/>


export default UserPage