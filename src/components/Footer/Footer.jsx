const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-[url('/src/assets/images/footer.png')] bg-contain pt-10 lg:pt-20 pb-10 px-10 lg:px-40">
      <div className="footer justify-between">
        <div>
          <span className="footer-title text-color1">SERVICES</span>
          <a className="link link-hover text-color2">Emergency Checkup</a>
          <a className="link link-hover text-color2">Monthly Checkup</a>
          <a className="link link-hover text-color2">Weekly Checkup</a>
          <a className="link link-hover text-color2">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title text-color1">ORAL HEALTH</span>
          <a className="link link-hover text-color2">Fluoride Treatment</a>
          <a className="link link-hover text-color2">Cavity Filling</a>
          <a className="link link-hover text-color2">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title text-color1">OUR ADDRESS</span>
          <a className="link link-hover text-color2">
            New York - 101010 Hudson
          </a>
        </div>
      </div>
      <div className="mt-14 text-center">
        <p className="font-medium">Copyright © {year} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
