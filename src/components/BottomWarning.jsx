import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      {/* here Link is used to take user from one page to another, it will take it to to={to} page */}
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>  
        {buttonText}
      </Link>
    </div>
}