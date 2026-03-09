export default function Footer() {
  return (
    <footer className="bg-[#000e24] border-t border-gray-800">
      <div className="container-custom py-16 grid md:grid-cols-4 gap-10 text-gray-400">
        <div>
          <h3 className="text-white font-bold mb-4">SkyKorg Healthcare</h3>
          <p>Global provider of heavy industrial components and engineered solutions.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Contact</li>
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
      <div className="border-t mt-12">
      <div className="container-responsive py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} SkyKorg Healthcare. All rights reserved.
      </div>
    </div>
      
    </footer>
    
  );
}
