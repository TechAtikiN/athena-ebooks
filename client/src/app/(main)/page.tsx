import { authOptions } from '@/lib/auth';
import { Session, getServerSession } from 'next-auth'

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions)
  console.log(session)

  return (
    <div>
      {session ? (
        <div>
          <p>Data: {JSON.stringify(session)}</p>
        </div>
      ) : (
        <div>
          Not signed in
        </div>
      )}
    </div>
  );
}
