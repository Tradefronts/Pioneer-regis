import Link from 'next/link';

const footerLinks = {
  quickLinks: [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'About us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact us', href: '/contact' },
  ],
  social: [
    { name: 'Facebook'  },
    { name: 'Instagram'},
    { name: 'LinkedIn'},
    { name: 'Twitter' },
    { name: 'Youtube'},
  ],
  legal: [
    { name: 'Terms of service'},
    { name: 'Privacy policy' },
    { name: 'Cookie policy' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black  py-6 text-neutral-500">
      <div className="w-[85%]  mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7  xl:gap-8 sm:gap-6 gap-5 lg:mb-36 mb-16">
          <div className='lg:col-span-4 lg:grid-cols-2 md:col-span-3 col-span-3'>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white" />
              <span className="text-white text-xl font-semibold">skipmatrix</span>
            </div>
            <p className="font-medium text-sm leading-relaxed">
              20619 Torrence Chapel Rd<br />
              Suite 116 #1040<br />
              Cornelius, NC 28031<br />
              United States
            </p>
            <div className="mt-6 md:mb-0 mb-5 text-sm flex items-center md:gap-12 sm:gap-10 gap-5">
              <div className="space-y-2">
                <span className="block font-medium">Phone number</span>
                <span className="text-white/80 ">
                  1-800-201-1019
                </span>
              </div>
              <div className="space-y-2">
                <span className="block font-medium">Email</span>
                <span className="text-white/80">
                  support@skipmatrix.com
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className=" font-medium mb-4">Quick links</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  {link.name}

                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Social</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {footerLinks.social.map((link) => (
                <li key={link.name}>

                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="text-neutral-500 text-center text-sm">
          <span>© {new Date().getFullYear()} Skipmatrix. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer
