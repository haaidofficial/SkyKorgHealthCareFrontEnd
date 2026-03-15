
export default function Footer() {
  return (
    <footer className="bg-[#000e24] border-t border-gray-800">
      <div className="container-custom py-16 grid md:grid-cols-4 gap-10 text-gray-400">
        <div>
          <h3 className="text-white font-bold mb-4">SkyKorg Healthcare</h3>
          <p>SkyKorg HealthCare provides reliable medical billing and Revenue Cycle Management (RCM) services to help healthcare providers streamline operations, improve reimbursements, and focus on quality patient care.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Provider Solutions</li>
            <li>Payer Solutions</li>
            <li>DME Billing</li>
            <li>Prior Auth</li>
            <li>Compliance</li>
            <li>Resources</li>
            
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>info@skykorghealthcare.com</p>
        </div>
      </div>
      <div className="text-center py-6 text-gray-600 border-t border-gray-800">
        © 2026 SkyKorg Healthcare. All rights reserved.
      </div>
    </footer>
  );
}
