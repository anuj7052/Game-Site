import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GameVault Privacy Policy — learn how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-8">Last updated: April 2026</p>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
        <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
        <p>
          GameVault is designed with privacy in mind. We collect minimal information necessary to provide
          our gaming service:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-white">Usage Data:</strong> We may collect information about how you interact with our platform, including games played, pages visited, and time spent on the site.</li>
          <li><strong className="text-white">Local Storage:</strong> We use your browser&apos;s localStorage to save your favorites and recently played games. This data stays on your device and is not transmitted to our servers.</li>
          <li><strong className="text-white">Cookies:</strong> We use essential cookies for site functionality and may use third-party cookies for analytics and advertising purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">2. How We Use Information</h2>
        <p>We use collected information to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide, maintain, and improve our gaming platform</li>
          <li>Track game popularity and trending content</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Display relevant advertisements</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">3. Third-Party Services</h2>
        <p>
          Our platform may include third-party services for analytics (such as Google Analytics) and
          advertising (such as Google AdSense). These services may collect information about your browsing
          activity across websites. Please refer to their respective privacy policies for more information.
        </p>

        <h2 className="text-xl font-semibold text-white">4. Game Content</h2>
        <p>
          Games on our platform are provided by third-party developers and are loaded via iframes.
          Each game may have its own privacy practices. We do not control the data collection
          practices of individual games.
        </p>

        <h2 className="text-xl font-semibold text-white">5. Children&apos;s Privacy</h2>
        <p>
          Our platform is designed for a general audience. We do not knowingly collect personal
          information from children under 13. If you believe we have collected such information,
          please contact us immediately.
        </p>

        <h2 className="text-xl font-semibold text-white">6. Data Security</h2>
        <p>
          We implement appropriate security measures to protect against unauthorized access,
          alteration, or destruction of data. However, no method of transmission over the
          internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-white">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of any
          material changes by posting the new policy on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold text-white">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:privacy@gamevault.com" className="text-primary-400 hover:text-primary-300">
            privacy@gamevault.com
          </a>
        </p>
      </div>
    </div>
  );
}
