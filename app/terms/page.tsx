import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'GameVault Terms and Conditions of use.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms &amp; Conditions</h1>
      <p className="text-slate-500 text-sm mb-8">Last updated: April 2026</p>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
        <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
        <p>
          By accessing and using GameVault (&quot;the Service&quot;), you agree to be bound by these Terms
          and Conditions. If you do not agree with any part of these terms, you may not use our Service.
        </p>

        <h2 className="text-xl font-semibold text-white">2. Use of Service</h2>
        <p>GameVault provides free online games for entertainment purposes. You agree to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Use the Service for lawful purposes only</li>
          <li>Not attempt to hack, exploit, or disrupt the Service</li>
          <li>Not use automated tools to scrape or access the Service</li>
          <li>Not circumvent any security measures implemented on the platform</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">3. Game Content</h2>
        <p>
          All games available on GameVault are property of their respective developers and publishers.
          GameVault serves as a platform, and all intellectual property rights for the games remain
          with their original owners.
        </p>

        <h2 className="text-xl font-semibold text-white">4. Advertisements</h2>
        <p>
          Our Service is ad-supported. By using GameVault, you agree to the display of advertisements.
          We strive to ensure ads are non-intrusive and do not negatively impact your gaming experience.
        </p>

        <h2 className="text-xl font-semibold text-white">5. Disclaimer of Warranties</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind,
          either express or implied. We do not guarantee that the Service will be uninterrupted,
          secure, or error-free.
        </p>

        <h2 className="text-xl font-semibold text-white">6. Limitation of Liability</h2>
        <p>
          GameVault shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages resulting from your use of or inability to use the Service.
        </p>

        <h2 className="text-xl font-semibold text-white">7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective
          immediately upon posting. Your continued use of the Service constitutes acceptance
          of the modified terms.
        </p>

        <h2 className="text-xl font-semibold text-white">8. Contact</h2>
        <p>
          For questions about these Terms, please contact us at{' '}
          <a href="mailto:legal@gamevault.com" className="text-primary-400 hover:text-primary-300">
            legal@gamevault.com
          </a>
        </p>
      </div>
    </div>
  );
}
