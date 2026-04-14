import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about GameVault — your destination for free online HTML5 games.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">About GameVault</h1>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
        <p>
          Welcome to <strong className="text-white">GameVault</strong> — your ultimate destination for free online
          games. We bring together thousands of HTML5 games that you can play instantly in your browser, with
          no downloads or installations required.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Our Mission</h2>
        <p>
          We believe that gaming should be accessible to everyone. Our mission is to provide a curated
          collection of high-quality games across multiple categories, from fast-paced action and racing
          to brain-teasing puzzles and strategic challenges.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Thousands of free HTML5 games playable on any device</li>
          <li>No downloads, no registrations — just instant play</li>
          <li>Categories including Action, Racing, Puzzle, Shooting, Sports, and more</li>
          <li>Regular updates with new games added frequently</li>
          <li>Mobile-friendly interface for gaming on the go</li>
          <li>Save your favorite games and track your recently played</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">Technology</h2>
        <p>
          GameVault is built with modern web technologies to ensure fast loading times, smooth gameplay,
          and a great user experience. All our games run directly in your browser using HTML5 technology,
          which means they work on desktop, tablet, and mobile devices.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p>
          Have questions, suggestions, or want to submit a game? We&apos;d love to hear from you!
          Visit our <a href="/contact" className="text-primary-400 hover:text-primary-300 underline">Contact page</a> to
          get in touch with our team.
        </p>
      </div>
    </div>
  );
}
