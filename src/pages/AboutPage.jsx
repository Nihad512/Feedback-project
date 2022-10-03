import Card from "../components/shared/Card"

import {Link} from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
        <p>This website has been created by me Nihad Babayev in order to practice React</p>
        <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default AboutPage