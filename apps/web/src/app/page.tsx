import { add } from '@parkit/sample-lib'
export default function Home() {
  return (
    <h1 className="text-center font-bold text-slate-400 mt-80">
      Hello from NextJs {add(3, 8)}{' '}
    </h1>
  )
}
