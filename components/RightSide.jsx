import Search from '../components/Search'
import News from '../components/News'

function RightSide() {
  return (
    <div className="flex flex-col gap-4 min-w-[350px]">
      <Search />
      <News />
    </div>
  )
}

export default RightSide