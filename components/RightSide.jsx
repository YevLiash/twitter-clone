import Search from '../components/Search'
import News from '../components/News'

function RightSide() {
  return (
    <div className="pt-5 flex-col gap-4 hidden lg:flex self-start top-0  ">
      <Search />
      <News />
    </div>
  )
}

export default RightSide