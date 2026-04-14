import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the GameVault team. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Contact Us</h1>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
        <p>
          We&apos;re always happy to hear from our users. Whether you have a question, suggestion,
          or feedback, feel free to reach out to us.
        </p>

        <div className="glass-card p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">General Inquiries</h3>
            <p className="text-slate-400">
              For general questions or feedback, please email us at{' '}
              <a href="mailto:hello@gamevault.com" className="text-primary-400 hover:text-primary-300">
                hello@gamevault.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Game Submissions</h3>
            <p className="text-slate-400">
              Are you a game developer? We&apos;d love to feature your game on our platform. Contact us at{' '}
              <a href="mailto:games@gamevault.com" className="text-primary-400 hover:text-primary-300">
                games@gamevault.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Business & Partnerships</h3>
            <p className="text-slate-400">
              For business inquiries and partnership opportunities, reach out to{' '}
              <a href="mailto:business@gamevault.com" className="text-primary-400 hover:text-primary-300">
                business@gamevault.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Report an Issue</h3>
            <p className="text-slate-400">
              Found a bug or broken game? Let us know at{' '}
              <a href="mailto:support@gamevault.com" className="text-primary-400 hover:text-primary-300">
                support@gamevault.com
              </a>
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-8">
          We typically respond within 24-48 hours during business days. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}
