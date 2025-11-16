import IglooNavbar from './components/IglooNavbar'
import ShoeHero from './components/ShoeHero'
import SceneCollections from './components/SceneCollections'
import SceneCraftsmanship from './components/SceneCraftsmanship'
import SceneComfort from './components/SceneComfort'
import SceneStory from './components/SceneStory'
import SceneShop from './components/SceneShop'
import SceneContact from './components/SceneContact'

function App() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <IglooNavbar />
      <main className="[scrollbar-width:none] [-ms-overflow-style:none]">
        <ShoeHero />
        <SceneCollections />
        <SceneCraftsmanship />
        <SceneComfort />
        <SceneStory />
        <SceneShop />
        <SceneContact />
      </main>
    </div>
  )
}

export default App
