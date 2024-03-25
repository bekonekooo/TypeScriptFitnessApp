

// this type definition allows the component to accept any kind of React nodes as its children.
type Props = {
    children:React.ReactNode  
}

const Htext = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 text-3xl font-bold text-[#57110c]">
        {children}
    </h1>
  )
}

export default Htext