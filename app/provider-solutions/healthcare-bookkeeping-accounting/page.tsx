import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Accounting & Bookkeeping Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare offers professional accounting and bookkeeping services for healthcare organizations including nursing homes and medical facilities."
};

export default function AccountingBookkeepingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Accounting and Bookkeeping Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Accounting & Bookkeeping Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare delivers professional accounting and
            bookkeeping services designed to help healthcare providers
            manage finances efficiently while focusing on patient care.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            {/* INTRO */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Accounting & Bookkeeping for Healthcare Organizations
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Healthcare organizations such as nursing homes,
                rehabilitation centers, and medical practices require
                efficient financial management to ensure smooth
                operations. SkyKorg Healthcare provides scalable
                accounting and bookkeeping services tailored for the
                healthcare industry.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Our experienced accounting professionals help healthcare
                providers manage financial operations while maintaining
                accuracy, compliance, and transparency.
              </p>

            </section>

            {/* INVENTORY & FINANCIAL MANAGEMENT */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Inventory & Financial Management for Healthcare Facilities
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Proper inventory tracking and financial accounting are
                essential for healthcare providers managing medical
                supplies, billing systems, and operational expenses.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ Medical inventory tracking</li>
                <li>✔ Purchase and invoice management</li>
                <li>✔ Accounts payable and receivable</li>
                <li>✔ Financial performance monitoring</li>

              </ul>

            </section>

            {/* QUALITY & INTEGRITY */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Quality & Integrity in Financial Management
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our accounting experts ensure that every financial
                transaction is recorded accurately. We use modern
                accounting technologies to deliver transparent reporting
                and improved financial visibility.
              </p>

            </section>

            {/* BOOKKEEPING SERVICES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Bookkeeping Services
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Ledger posting</li>
                <li>✔ Payment follow-up and posting</li>
                <li>✔ Invoice processing</li>
                <li>✔ Bank transaction tracking</li>
                <li>✔ Credit card reconciliation</li>
                <li>✔ Payroll processing</li>

              </ul>

            </section>

            {/* RECONCILIATION */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Reconciliation & Financial Reporting
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Invoice reconciliation</li>
                <li>✔ Vendor reconciliation</li>
                <li>✔ Bank reconciliation</li>
                <li>✔ Financial statement preparation</li>

              </ul>

            </section>

            {/* ACCOUNTING SYSTEMS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Accounting System Integration
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare integrates accounting services with
                leading financial platforms such as QuickBooks, Intacct,
                and other modern accounting software.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ Accounting software implementation</li>
                <li>✔ Data conversion services</li>
                <li>✔ Integration with business applications</li>
                <li>✔ Secure cloud-based accounting systems</li>

              </ul>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Experienced accounting professionals</li>
                <li>✔ Healthcare industry expertise</li>
                <li>✔ Accurate financial reporting</li>
                <li>✔ Secure financial data handling</li>
                <li>✔ Scalable accounting services</li>

              </ul>

            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Streamline financial operations with SkyKorg Healthcare’s
                accounting and bookkeeping solutions.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule a Call
              </Link>

            </div>

            <div className="bg-white p-6 rounded-lg shadow">

              <h3 className="font-semibold mb-4">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ Healthcare financial expertise</li>
                <li>✔ Accurate bookkeeping processes</li>
                <li>✔ Advanced accounting technology</li>
                <li>✔ Scalable financial services</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Simplify Your Healthcare Financial Management
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to manage your accounting
            operations efficiently while focusing on patient care.
          </p>

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