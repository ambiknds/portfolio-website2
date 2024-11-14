import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <ThemeToggle />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;