export default function Card({ clickable = false, children, className }) {
  const getClassName = () => {
    let className = 'mb-2 shadow-lg border border-gray-200 px-4 py-4 flex flex-col '
    if(clickable) {
      className += 'hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200 active:border-gray-300 active:shadow-xl '
    }
    return className
  }
  return (
    <div className={getClassName() + (className || "")}>
      {children}
    </div>
  )
}
