import { UserProps } from "@/interfaces";
const UserCards: React.FC<UserProps> = ({
    name, username, email, address, phone, website, company
}) => {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{name}({username})</h2>
            <p className="text-gray-700"><strong>Email:</strong>{email}</p>
            <p className="text-gray-700"><strong>Phone:</strong>{phone}</p>
            <p className="text-gray-700"><strong>Website:</strong>{''}
                <a
                    href={`https://{website}`}
                    className="text-blue-500 underline"
                    target="blank"
                    rel="noopener noreferrer">
                        {website}
                </a>
            </p>
            <div className="mt-4">
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">{address.street},{address.suite},{address.city} - {address.zipcode}</p>
                <p className="text-gray-600"><strong>Geo:</strong><strong>Lat:{address.geo.lat}, Lng:{address.geo.lng}</strong></p>
            </div>
            <div className="mt-4">
                <h3 className="font-medium">Company:</h3>
                <p className="text-gray-600">{company.name} - {company.catchPhrase} </p>
                <p className=""></p>
            </div>
        </div>
    )
}
export default UserCards