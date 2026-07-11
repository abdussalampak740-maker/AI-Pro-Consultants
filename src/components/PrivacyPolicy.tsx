import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#05070a] text-slate-300 selection:bg-blue-500 selection:text-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1118270d_1px,transparent_1px),linear-gradient(to_bottom,#1118270d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            Legal Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">
            Last Updated: July 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-[#0c1017]/50 backdrop-blur-sm space-y-8 text-sm md:text-base leading-relaxed font-light">
          <div>
            <p className="text-slate-300">
              AI Pro Consultants (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you provide to us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Information We Collect
            </h2>
            <p className="text-slate-400">
              When you contact us through our website, Facebook, Instagram, Meta lead forms, advertisements, or other communication channels, we may collect information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name and business information</li>
              <li>Location</li>
              <li>Information about the services you are interested in</li>
              <li>Advertising or marketing requirements</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              How We Use Your Information
            </h2>
            <p className="text-slate-400">
              We may use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Respond to your inquiries</li>
              <li>Contact you regarding our services</li>
              <li>Provide information about our marketing and advertising services</li>
              <li>Prepare proposals or service recommendations</li>
              <li>Improve our services and customer experience</li>
              <li>Communicate with you regarding your request</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Facebook and Instagram Lead Ads
            </h2>
            <p className="text-slate-400">
              When you submit your information through a Facebook or Instagram advertisement or lead form, the information you provide may be shared with AI Pro Consultants so that we can contact you regarding your inquiry and the services you requested.
            </p>
            <p className="text-slate-400">
              We use this information only for legitimate business and communication purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Sharing of Information
            </h2>
            <p className="text-slate-400">
              We do not sell or rent your personal information. We may use trusted service providers and platforms where necessary to operate our business, communicate with customers, or provide our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Data Security
            </h2>
            <p className="text-slate-400">
              We take reasonable measures to protect the personal information provided to us. However, no method of online transmission or electronic storage is completely secure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Your Rights
            </h2>
            <p className="text-slate-400">
              You may contact us at any time to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Ask us to stop contacting you for marketing purposes</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Third-Party Platforms
            </h2>
            <p className="text-slate-400">
              Our website and services may use or link to third-party platforms, including Facebook, Instagram, and other service providers. Their handling of personal information is governed by their own privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-400">
              We may update this Privacy Policy from time to time. Any updates will be published on this page with a revised &ldquo;Last Updated&rdquo; date.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight border-b border-white/5 pb-2">
              Contact Us
            </h2>
            <p className="text-slate-400">
              If you have any questions about this Privacy Policy or how your information is handled, please contact:
            </p>
            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 mt-4 space-y-2 text-slate-300">
              <p className="font-bold text-white uppercase tracking-tight text-base">AI Pro Consultants</p>
              <p>Website: <a href="https://www.aiproconsultants.com" className="text-blue-400 hover:underline">www.aiproconsultants.com</a></p>
              <p>Email: <a href="mailto:aiproconsultantss@gmail.com" className="text-blue-400 hover:underline">aiproconsultantss@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
