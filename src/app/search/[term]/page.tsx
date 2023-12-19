import { notFound } from "next/navigation"

type Props = {
    params: {
        term: string
    }
    
}
function SearchPage({params: term}: Props) {
    if(!term) notFound();
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage