import Header from './components/Header/Header'
import TeachingSelection from './components/TeachingSelection'
import DifferencesSelection from './components/DifferencesSelection'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'


function App() {
	const [tab, setTab] = useState('effect')

  return (
		<>
			<Header />
			<main>
				<IntroSection />
				<TabsSection active={tab} onChange={current => setTab(current)} />
				{tab === 'main' && (
					<>
						<TeachingSelection />
						<DifferencesSelection />
					</>
				)}

				{tab === 'feedback' && (
					<>
						<FeedbackSection />
					</>
				)}

				{tab === 'effect' && <EffectSection></EffectSection>}
			</main>
		</>
	)
}

export default App
