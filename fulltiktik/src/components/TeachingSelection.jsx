import WayToTeach from './WayToTeach'
import { ways } from '../data'
export default function TeachingSelection() {
	return (
		<section>
			<h3>Наш подход</h3>

			<ul>
				{ways.map(way => (
					<WayToTeach key={way.title} {...way} />
				))}

				{/* <WayToTeach {...ways[0]} />
                <WayToTeach {...ways[1]} />
                <WayToTeach {...ways[2]} /> */}
			</ul>
		</section>
	)
}
