import { SignInButton } from "../components/SignInButton.tsx"
import { SignUpButton } from "../components/SignUpButton.tsx"


export const LandingPage = () => {
  return <div className="bg-slate-300 h-screen flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <div className="pt-4">
        <SignInButton/>
        <SignUpButton/>
      </div>
    </div>
  </div>
  </div> 
}