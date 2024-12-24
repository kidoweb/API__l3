import Link from 'next/link';
import { getUsers } from '../lib/api';

interface User {
  id: number;
  name: string;
}

export default async function Home() {
  const users: User[] = await getUsers();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список пользователей</h1>
      <ul className="space-y-2">
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className="text-blue-500 hover:underline">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

