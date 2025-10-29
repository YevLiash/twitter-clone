import Search from '../components/Search'
import News from '../components/News'

function RightSide() {
  return (
    <div className="mt-5 flex flex-col gap-4 min-w-[350px]">
      <Search />
      <News />
    </div>
  )
}

export default RightSide