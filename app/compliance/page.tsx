import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "HIPAA Compliance | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare maintains strict HIPAA-HITECH compliant operations ensuring data privacy, security monitoring, and network protection across all healthcare services."
};

export default function HIPAACompliancePage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="HIPAA Compliance"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            HIPAA Compliance
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <p className="text-gray-700 leading-relaxed">
            SkyKorg Healthcare maintains strict HIPAA-HITECH compliant
            operations. We implement advanced security and privacy
            measures to protect healthcare data and ensure full
            compliance with regulatory standards.
          </p>

          {/* PHYSICAL ACCESS */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              1. Physical Access
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Biometric and proximity card access control</li>
              <li>Employee photo ID verification within facilities</li>
              <li>Regular audits of access logs</li>
              <li>Least-privilege access permissions</li>
            </ul>

          </div>

          {/* SECURITY */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              2. Security
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>24/7 security personnel monitoring facility entrances</li>
              <li>Visitor entry logs and identity verification</li>
              <li>Security logs retained for long-term compliance</li>
            </ul>

          </div>

          {/* MONITORING */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              3. Monitoring
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>CCTV monitoring of facility access points</li>
              <li>Continuous monitoring of security recordings</li>
              <li>Secure backup storage of surveillance recordings</li>
            </ul>

          </div>

          {/* VENDOR ACCESS */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              4. Vendor Access
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Confidentiality agreements for vendors</li>
              <li>Vendor supervision in sensitive areas</li>
            </ul>

          </div>

          {/* MOBILE PHONE USAGE */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              5. Mobile Phone Usage
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Restricted phone usage inside secure areas</li>
              <li>Employee phone lockers outside production floors</li>
            </ul>

          </div>

          {/* PERSONAL BAGGAGE */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              6. Personal Baggage
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>No backpacks or bags allowed inside production areas</li>
              <li>Locker facilities available outside secure zones</li>
            </ul>

          </div>

          {/* NETWORK SECURITY */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              7. Network & Application Security
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Active Directory user authentication</li>
              <li>Strong password and account security policies</li>
              <li>Restricted USB and external device access</li>
              <li>Controlled access to authorized employees</li>
            </ul>

          </div>

          {/* FIREWALL */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              8. Firewall Protection
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Enterprise-grade unified threat management systems</li>
              <li>Network traffic filtering and monitoring</li>
              <li>Intrusion prevention systems</li>
              <li>Secure NAT and network segmentation</li>
            </ul>

          </div>

          {/* VPN */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              9. VPN Security
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Secure VPN connections for client networks</li>
              <li>IP-based authentication for secure remote access</li>
            </ul>

          </div>

          {/* REDUNDANCY */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              10. Redundancy Management
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Redundant internet connectivity</li>
              <li>Active-active ISP configurations</li>
              <li>Backup power with UPS and generators</li>
            </ul>

          </div>

          {/* MALWARE */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              11. Virus & Malware Protection
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Centralized anti-malware systems</li>
              <li>Automated patch management</li>
              <li>Real-time threat detection and prevention</li>
            </ul>

          </div>

          {/* SAFETY */}
          <div>

            <h2 className="text-xl font-semibold mb-4">
              12. Other Safety Measures
            </h2>

            <ul className="space-y-2 text-gray-700 list-disc ml-6">
              <li>Fire extinguishers installed across facilities</li>
              <li>Regular emergency and safety drills</li>
            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Are You Looking for Streamlined Medical Billing Assistance?
          </h2>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Request a Demo
          </Link>

        </div>

      </section>

      <EnquiryForm />

    </main>
  );
}