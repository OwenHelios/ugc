import LineTo from 'react-lineto'
import 'styles/Test.css'

const Test = () => {
  return (
    <div>
      <div className="demo">
        <div className="A">Element A</div>
        <div className="B">Element B</div>
        <LineTo
          borderColor="red"
          borderStyle="solid"
          borderWidth={2}
          fromAnchor="top right"
          toAnchor="top left"
          from="A"
          to="B"
        />
      </div>
    </div>
  )
}

export default Test
