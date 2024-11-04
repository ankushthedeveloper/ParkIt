'use client'
import { useQuery } from '@apollo/client'
import { UsersDocument } from '@parkit/network/src/gql/generated'
import { add } from '@parkit/sample-lib'
export default function Home() {
  const { data, loading } = useQuery(UsersDocument)
  console.log(data)
  return (
    <main>
      <div className="flex flex-wrap bg-slate-600 max-w-[1000px]">
        Hello {add(4, 789)}
        {loading
          ? 'Loading'
          : data?.users.map((c) => (
              <div
                key={c.uid}
                className="text-white text-center h-52 text-2xl m-32 rounded-xl w-52 bg-blue-300"
              >
                {c.name}
              </div>
            ))}
      </div>
    </main>
  )
}
