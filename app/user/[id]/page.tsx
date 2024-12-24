import Link from 'next/link';
import { getUserComments, Comment } from '../../../lib/api';

export default async function UserPage({ params }: { params: { id: string } }) {
  const comments: Comment[] = await getUserComments(params.id);

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Назад к списку пользователей
      </Link>
      <h1 className="text-2xl font-bold mb-4">Комментарии пользователя {params.id}</h1>
      <ul className="space-y-4">
        {comments.map((comment: Comment) => (
          <li key={comment.id} className="border p-4 rounded-lg">
            <h2 className="font-bold">{comment.name}</h2>
            <p className="text-gray-600">{comment.email}</p>
            <p className="mt-2">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

